/* ============================================================
   tests/tier2_boundary_math.test.js — Tier 2 Boundary & Math Tests
   Validates boundary conditions, numerical limits, and invariants for:
   - Reducing balance EMI mathematical precision
   - Schedule generation amortization invariants
   - Distress risk multi-factor formula and band thresholds
   - Extreme, zero, negative, and out-of-range input handling
   ============================================================ */

import { describe, it, assert } from './test_framework.js';
import { calculateEMI, generateSchedule, calculateDistressScore } from '../assets/js/loan.js';

// Distress calculation logic replicating farmer.js engine
function computeDistressRisk(rainMm, priceDropPct, daysUntilDue) {
  const rain = Number(rainMm) || 0;
  const price = Number(priceDropPct) || 0;
  const days = Number(daysUntilDue) || 0;
  
  const rawScore = (rain * 0.4) + (price * 0.8) + (Math.max(0, 30 - days) * 0.45);
  const score = Math.max(0, Math.min(100, Math.round(rawScore)));
  
  let band = 'low';
  if (score >= 80) band = 'critical';
  else if (score >= 60) band = 'high';
  else if (score >= 35) band = 'watch';
  
  return { score, band, rawScore };
}

describe('Tier 2: Loan Reducing Balance EMI Mathematical Boundaries', () => {
  it('B1.1: Zero and negative principal return 0 EMI', () => {
    assert.equal(calculateEMI(0, 7.0, 12), 0, 'Zero principal must yield 0 EMI');
    assert.equal(calculateEMI(-50000, 7.0, 12), 0, 'Negative principal must yield 0 EMI');
  });

  it('B1.2: Zero and negative tenure return 0 EMI', () => {
    assert.equal(calculateEMI(50000, 7.0, 0), 0, 'Zero tenure months must yield 0 EMI');
    assert.equal(calculateEMI(50000, 7.0, -6), 0, 'Negative tenure months must yield 0 EMI');
  });

  it('B1.3: 0% interest rate returns exact linear division (principal / months)', () => {
    const emi = calculateEMI(60000, 0, 12);
    assert.equal(emi, 5000, '0% interest EMI must equal 60000 / 12 = 5000');

    const emi36 = calculateEMI(120000, 0, 36);
    assert.ok(Math.abs(emi36 - (120000 / 36)) < 1e-9, '0% interest for 36 months must match division');
  });

  it('B1.4: Standard subsidized KCC rate (4% p.a., 12m) computes exact reducing balance', () => {
    const principal = 100000;
    const rate = 4.0;
    const months = 12;
    const emi = calculateEMI(principal, rate, months);
    
    // Formula verification: r = 0.04/12 = 0.0033333333333333335
    const r = rate / 12 / 100;
    const expected = (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    
    assert.ok(Math.abs(emi - expected) < 1e-6, `KCC EMI mismatch: got ${emi}, expected ${expected}`);
    assert.ok(emi > (principal / months), 'EMI with interest must exceed base principal division');
    assert.ok(Math.round(emi) === 8515, `Rounded EMI should be 8515, got ${Math.round(emi)}`);
  });

  it('B1.5: High interest boundary (50% p.a.) remains numerically stable', () => {
    const emi = calculateEMI(50000, 50.0, 12);
    assert.ok(Number.isFinite(emi) && emi > 0, '50% rate EMI must be finite positive number');
    assert.ok(emi > (50000 / 12), '50% rate EMI must be significantly higher than zero interest');
  });

  it('B1.6: Extreme loan amounts and tenures produce valid finite numbers', () => {
    const largeLoanEMI = calculateEMI(10000000, 8.5, 60); // ₹1 Crore for 5 years
    assert.ok(Number.isFinite(largeLoanEMI) && largeLoanEMI > 0, 'Large loan EMI must be finite');

    const longTenureEMI = calculateEMI(1000000, 7.5, 360); // ₹10 Lakhs for 30 years (360m)
    assert.ok(Number.isFinite(longTenureEMI) && longTenureEMI > 0, '360-month EMI must be finite');
  });
});

describe('Tier 2: Loan Installment Schedule Invariants', () => {
  it('B2.1: Total amortized principal across all installments exactly equals initial principal', () => {
    const principal = 75000;
    const result = generateSchedule(principal, 8.5, 18, new Date('2026-09-01'), 0);
    
    assert.equal(result.schedule.length, 18, 'Schedule must contain exactly 18 months');
    
    const sumPrincipal = result.schedule.reduce((acc, row) => acc + row.principal, 0);
    assert.ok(
      Math.abs(sumPrincipal - principal) < 0.01,
      `Sum of principal components (${sumPrincipal}) must equal initial principal (${principal})`
    );
  });

  it('B2.2: Final installment remaining balance is strictly 0', () => {
    const result = generateSchedule(50000, 7.0, 12, new Date('2026-09-01'), 0);
    const lastRow = result.schedule[result.schedule.length - 1];
    assert.equal(lastRow.balance, 0, 'Final installment remaining balance must be exactly 0');
  });

  it('B2.3: Interest portions decrease monotonically over reducing balance tenure', () => {
    const result = generateSchedule(100000, 9.0, 24, new Date('2026-09-01'), 0);
    for (let i = 1; i < result.schedule.length; i++) {
      const prevInterest = result.schedule[i - 1].interest;
      const currInterest = result.schedule[i].interest;
      assert.ok(
        currInterest <= prevInterest + 1e-6,
        `Month ${i + 1} interest (${currInterest}) should be <= Month ${i} interest (${prevInterest})`
      );
    }
  });

  it('B2.4: Paid installments count boundary handling (0, partial, full, negative, overflow)', () => {
    const tenure = 12;
    // 0 paid
    const res0 = generateSchedule(50000, 7.0, tenure, new Date('2026-09-01'), 0);
    assert.equal(res0.schedule.filter(s => s.isPaid).length, 0, '0 paid should mark 0 rows as paid');

    // Partial paid (5 paid)
    const res5 = generateSchedule(50000, 7.0, tenure, new Date('2026-09-01'), 5);
    assert.equal(res5.schedule.filter(s => s.isPaid).length, 5, '5 paid should mark first 5 rows as paid');
    for (let i = 0; i < 5; i++) {
      assert.equal(res5.schedule[i].status, 'Paid', `Month ${i + 1} status must be Paid`);
      assert.equal(res5.schedule[i].rolloverArrears, 0, `Paid month ${i + 1} arrears must be 0`);
    }

    // Negative paid clamped to 0
    const resNeg = generateSchedule(50000, 7.0, tenure, new Date('2026-09-01'), -3);
    assert.equal(resNeg.schedule.filter(s => s.isPaid).length, 0, 'Negative paid count must clamp to 0');

    // Overflow paid clamped to tenure
    const resOver = generateSchedule(50000, 7.0, tenure, new Date('2026-09-01'), 999);
    assert.equal(resOver.schedule.filter(s => s.isPaid).length, tenure, 'Overflow paid count must clamp to tenure');
  });

  it('B2.5: Due dates increment sequentially by month', () => {
    const result = generateSchedule(50000, 7.0, 6, new Date('2026-01-01'), 0);
    assert.equal(result.schedule[0].date, '2026-01-01');
    assert.equal(result.schedule[1].date, '2026-02-01');
    assert.equal(result.schedule[2].date, '2026-03-01');
    assert.equal(result.schedule[3].date, '2026-04-01');
    assert.equal(result.schedule[4].date, '2026-05-01');
    assert.equal(result.schedule[5].date, '2026-06-01');
  });
});

describe('Tier 2: Distress Risk Multi-Factor Mathematical Boundaries', () => {
  it('B3.1: Minimum baseline conditions yield 0 score and Low risk band', () => {
    // 0mm rain, 0% price drop, 30+ days due
    const res30 = computeDistressRisk(0, 0, 30);
    assert.equal(res30.score, 0, '0 rain, 0 drop, 30 days must yield 0 score');
    assert.equal(res30.band, 'low', '0 score must be low band');

    const res60 = computeDistressRisk(0, 0, 60);
    assert.equal(res60.score, 0, '0 rain, 0 drop, 60 days must yield 0 score');
    assert.equal(res60.band, 'low');
  });

  it('B3.2: Single-factor maximum boundaries test factor weighting', () => {
    // Max Rain alone (100mm rain * 0.4 = 40)
    const resRain = computeDistressRisk(100, 0, 30);
    assert.equal(resRain.score, 40, '100mm rain alone must yield 40 score');
    assert.equal(resRain.band, 'watch', '40 score must be in watch band (35-59)');

    // Max Price Drop alone (50% drop * 0.8 = 40)
    const resPrice = computeDistressRisk(0, 50, 30);
    assert.equal(resPrice.score, 40, '50% price drop alone must yield 40 score');
    assert.equal(resPrice.band, 'watch', '40 score must be in watch band (35-59)');

    // Loan due today alone (0 days: 30 * 0.45 = 13.5 -> 14)
    const resLoan = computeDistressRisk(0, 0, 0);
    assert.equal(resLoan.score, 14, '0 days loan proximity alone must yield 14 score');
    assert.equal(resLoan.band, 'low', '14 score must be in low band (<35)');
  });

  it('B3.3: High & Critical multi-factor compounding boundaries', () => {
    // Rain (76mm) + Price (50%) + Loan (3 days) -> Default demo values:
    // 76 * 0.4 (30.4) + 50 * 0.8 (40.0) + (30-3)*0.45 (12.15) = 82.55 -> 83
    const demo = computeDistressRisk(76, 50, 3);
    assert.equal(demo.score, 83, 'Default preset (76mm, 50%, 3d) should compute 83');
    assert.equal(demo.band, 'critical', '83 score must be in critical band (>=80)');

    // Triple maximum compounding: 100mm rain + 50% price + 0 days
    // 40 + 40 + 13.5 = 93.5 -> 94
    const tripleMax = computeDistressRisk(100, 50, 0);
    assert.equal(tripleMax.score, 94, 'Triple max stress should compute 94');
    assert.equal(tripleMax.band, 'critical');
  });

  it('B3.4: Score range clamping limits score strictly to [0, 100]', () => {
    // Extreme overflow
    const overflow = computeDistressRisk(200, 100, -20);
    assert.equal(overflow.score, 100, 'Extreme values must clamp to 100 max');

    // Extreme negative inputs
    const underflow = computeDistressRisk(-50, -50, 100);
    assert.equal(underflow.score, 0, 'Negative values must clamp to 0 min');
  });

  it('B3.5: Band transition exact thresholds (34/35, 59/60, 79/80)', () => {
    // Low / Watch transition at 35
    assert.equal(computeDistressRisk(85, 0, 30).score, 34); // 85 * 0.4 = 34
    assert.equal(computeDistressRisk(85, 0, 30).band, 'low');

    assert.equal(computeDistressRisk(87.5, 0, 30).score, 35); // 87.5 * 0.4 = 35
    assert.equal(computeDistressRisk(87.5, 0, 30).band, 'watch');

    // Watch / High transition at 60
    assert.equal(computeDistressRisk(75, 36.25, 30).score, 59); // 30 + 29 = 59
    assert.equal(computeDistressRisk(75, 36.25, 30).band, 'watch');

    assert.equal(computeDistressRisk(75, 37.5, 30).score, 60); // 30 + 30 = 60
    assert.equal(computeDistressRisk(75, 37.5, 30).band, 'high');

    // High / Critical transition at 80
    assert.equal(computeDistressRisk(100, 48.75, 30).score, 79); // 40 + 39 = 79
    assert.equal(computeDistressRisk(100, 48.75, 30).band, 'high');

    assert.equal(computeDistressRisk(100, 50, 30).score, 80); // 40 + 40 = 80
    assert.equal(computeDistressRisk(100, 50, 30).band, 'critical');
  });

  it('B3.6: calculateDistressScore (loan.js engine) computes exact 3-factor composite risk and levels', () => {
    // Normal baseline (25mm rain, profitable mandi price, 90 days loan due)
    const normal = calculateDistressScore(25, 2600, 2425, 90);
    assert.ok(normal.score <= 50, `Normal conditions must yield low score, got ${normal.score}`);
    assert.equal(normal.level, 'low');
    assert.equal(normal.rootCauses.length, 0, 'Normal baseline should have 0 root causes');

    // Extreme compound distress (0.5mm drought rain, 50% price crash below MSP, 3 days due)
    const severe = calculateDistressScore(0.5, 1200, 2425, 3);
    assert.ok(severe.score > 80, `Compound stress should trigger critical score > 80, got ${severe.score}`);
    assert.equal(severe.level, 'critical');
    assert.ok(severe.rootCauses.some(rc => rc.id === 'drought'), 'Should diagnose drought stress');
    assert.ok(severe.rootCauses.some(rc => rc.id === 'price_crash'), 'Should diagnose price crash below MSP');
    assert.ok(severe.rootCauses.some(rc => rc.id === 'loan_due'), 'Should diagnose imminent loan due date');
  });

  it('B3.7: calculateDistressScore handles excessive inundation rainfall hazard', () => {
    const flood = calculateDistressScore(90, 2500, 2425, 60);
    assert.ok(flood.sRain >= 70, 'Excess rainfall should yield high rain stress score');
    assert.ok(flood.rootCauses.some(rc => rc.id === 'excess_rain'), 'Should diagnose excess rain and inundation hazard');
  });
});

