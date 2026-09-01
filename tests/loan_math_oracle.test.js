/* ============================================================
   tests/loan_math_oracle.test.js — Exhaustive Mathematical Oracle
   Validates:
   1. Reducing balance EMI analytical accuracy across 300+ randomized combos
   2. Amortization invariants: Principal conservation, Final balance zero,
      Payment identity, Interest conservation, Monotonicity
   3. Distress Risk 3-factor composite formulas, subscore bounds & clamping
   4. Extreme boundary, degenerate, negative, NaN, and rollover invariants
   ============================================================ */

import { describe, it, assert } from './test_framework.js';
import { calculateEMI, calculateDistressScore, generateSchedule, generateLoanSchedule } from '../assets/js/loan.js';

// Deterministic Pseudo-Random Number Generator (LCG) for reproducible fuzzing
function createSeededRandom(seed = 123456789) {
  let s = seed;
  return function() {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

describe('Mathematical Oracle: Reducing Balance EMI Random Fuzzing (300+ Combinations)', () => {
  it('M1.1: EMI formula matches theoretical closed-form solution for 300 randomized inputs', () => {
    const rng = createSeededRandom(42);
    const testCount = 300;

    for (let t = 0; t < testCount; t++) {
      // Principal: ₹10,000 to ₹10,000,000
      const principal = Math.round(10000 + rng() * 9990000);
      // Rate: 0.0% to 50.0%
      const annualRate = +(rng() * 50.0).toFixed(2);
      // Tenure: 1 to 120 months
      const months = Math.floor(1 + rng() * 120);

      const emi = calculateEMI(principal, annualRate, months);

      // Analytical Oracle
      let expectedEMI;
      if (annualRate === 0) {
        expectedEMI = principal / months;
      } else {
        const monthlyRate = annualRate / 12 / 100;
        const factor = Math.pow(1 + monthlyRate, months);
        expectedEMI = (principal * monthlyRate * factor) / (factor - 1);
      }

      // Check finite and positive
      assert.ok(Number.isFinite(emi), `EMI must be finite for P=${principal}, r=${annualRate}, m=${months}`);
      assert.ok(emi > 0, `EMI must be positive for P=${principal}, r=${annualRate}, m=${months}`);

      // Verify relative error < 1e-7
      const relError = Math.abs(emi - expectedEMI) / expectedEMI;
      assert.ok(
        relError < 1e-7,
        `Relative error too high (${relError}) for P=${principal}, r=${annualRate}, m=${months}. Got ${emi}, expected ${expectedEMI}`
      );
    }
  });
});

describe('Mathematical Oracle: Amortization Schedule Invariants (300+ Combinations)', () => {
  it('M2.1: Invariant 1 — Sum of all installment principal parts exactly equals original principal', () => {
    const rng = createSeededRandom(101);
    const testCount = 300;

    for (let t = 0; t < testCount; t++) {
      const principal = Math.round(10000 + rng() * 9990000);
      const annualRate = +(rng() * 40.0).toFixed(2);
      const months = Math.floor(1 + rng() * 120);

      const scheduleResult = generateSchedule(principal, annualRate, months, '2026-09-01', 0);
      assert.equal(scheduleResult.schedule.length, months, `Schedule length must equal tenure months (${months})`);

      const sumPrincipal = scheduleResult.schedule.reduce((acc, row) => acc + row.principal, 0);
      const diff = Math.abs(sumPrincipal - principal);

      assert.ok(
        diff < 1e-4,
        `Principal conservation failed! Sum=${sumPrincipal}, Original=${principal}, Diff=${diff} for P=${principal}, r=${annualRate}, m=${months}`
      );
    }
  });

  it('M2.2: Invariant 2 — Final installment remaining balance is strictly 0', () => {
    const rng = createSeededRandom(202);
    const testCount = 300;

    for (let t = 0; t < testCount; t++) {
      const principal = Math.round(10000 + rng() * 5000000);
      const annualRate = +(rng() * 36.0).toFixed(2);
      const months = Math.floor(1 + rng() * 60);

      const scheduleResult = generateSchedule(principal, annualRate, months, '2026-09-01', 0);
      const lastRow = scheduleResult.schedule[scheduleResult.schedule.length - 1];

      assert.equal(
        lastRow.balance,
        0,
        `Final balance must be strictly 0, got ${lastRow.balance} for P=${principal}, r=${annualRate}, m=${months}`
      );
    }
  });

  it('M2.3: Invariant 3 — Total payment identity: totalPayment == principal + totalInterest', () => {
    const rng = createSeededRandom(303);
    const testCount = 300;

    for (let t = 0; t < testCount; t++) {
      const principal = Math.round(10000 + rng() * 5000000);
      const annualRate = +(rng() * 30.0).toFixed(2);
      const months = Math.floor(1 + rng() * 60);

      const scheduleResult = generateSchedule(principal, annualRate, months, '2026-09-01', 0);
      const { emi, totalPayment, totalInterest } = scheduleResult;

      // Identity: totalPayment == emi * months
      assert.ok(
        Math.abs(totalPayment - emi * months) < 1e-6,
        `totalPayment must equal emi * months`
      );

      // Identity: totalPayment == principal + totalInterest
      const expectedTotal = principal + totalInterest;
      assert.ok(
        Math.abs(totalPayment - expectedTotal) < 1e-4,
        `Payment identity failed: totalPayment=${totalPayment}, principal+interest=${expectedTotal}`
      );
    }
  });

  it('M2.4: Invariant 4 — Sum of scheduled interest portions matches totalInterest within roundoff', () => {
    const rng = createSeededRandom(404);
    const testCount = 200;

    for (let t = 0; t < testCount; t++) {
      const principal = Math.round(10000 + rng() * 1000000);
      const annualRate = +(1.0 + rng() * 24.0).toFixed(2);
      const months = Math.floor(1 + rng() * 60);

      const scheduleResult = generateSchedule(principal, annualRate, months, '2026-09-01', 0);
      const sumInterest = scheduleResult.schedule.reduce((acc, row) => acc + row.interest, 0);

      // Due to final month principal adjustment (principalPart = balance), sumInterest closely approximates totalInterest
      const diff = Math.abs(sumInterest - scheduleResult.totalInterest);
      const relDiff = diff / (scheduleResult.totalInterest || 1);

      assert.ok(
        relDiff < 0.01 || diff < 1.0,
        `Interest conservation discrepancy: sumInterest=${sumInterest}, totalInterest=${scheduleResult.totalInterest}, relDiff=${relDiff}`
      );
    }
  });

  it('M2.5: Invariant 5 — Interest portions strictly decrease monotonically over loan tenure for positive interest', () => {
    const testCases = [
      { p: 50000, r: 4.0, m: 12 },   // KCC crop loan
      { p: 150000, r: 7.0, m: 36 },  // Dairy / Tractor loan
      { p: 1000000, r: 9.5, m: 60 }, // Agricultural infrastructure loan
      { p: 5000000, r: 12.0, m: 120 } // Farm warehouse loan
    ];

    for (const tc of testCases) {
      const res = generateSchedule(tc.p, tc.r, tc.m, '2026-09-01', 0);
      for (let i = 1; i < res.schedule.length; i++) {
        const prevInterest = res.schedule[i - 1].interest;
        const currInterest = res.schedule[i].interest;
        assert.ok(
          currInterest <= prevInterest + 1e-9,
          `Interest must decrease monotonically: month ${i+1} (${currInterest}) > month ${i} (${prevInterest})`
        );
      }
    }
  });

  it('M2.6: generateLoanSchedule alias export is strictly identical to generateSchedule', () => {
    assert.equal(generateLoanSchedule, generateSchedule, 'generateLoanSchedule must be identical alias of generateSchedule');
  });
});

describe('Mathematical Oracle: Distress Score Invariants & Clamping (1000+ Combinations)', () => {
  it('M3.1: Invariant — Distress score is strictly clamped in [0, 100] for 1000 extreme randomized inputs', () => {
    const rng = createSeededRandom(505);
    const testCount = 1000;

    for (let t = 0; t < testCount; t++) {
      // Extreme values: -1000 to +10,000
      const rain = -1000 + rng() * 11000;
      const mandi = -10000 + rng() * 110000;
      const msp = -5000 + rng() * 55000;
      const days = -500 + rng() * 5500;

      const result = calculateDistressScore(rain, mandi, msp, days);

      // Score must be finite integer in [0, 100]
      assert.ok(Number.isFinite(result.score), `Score must be finite for inputs rain=${rain}, mandi=${mandi}, msp=${msp}, days=${days}`);
      assert.ok(result.score >= 0, `Score must be >= 0, got ${result.score}`);
      assert.ok(result.score <= 100, `Score must be <= 100, got ${result.score}`);
      assert.equal(result.score, Math.round(result.score), `Score must be an integer, got ${result.score}`);

      // Subscores must be in [0, 100]
      assert.ok(result.sRain >= 0 && result.sRain <= 100, `sRain out of bounds: ${result.sRain}`);
      assert.ok(result.sPrice >= 0 && result.sPrice <= 100, `sPrice out of bounds: ${result.sPrice}`);
      assert.ok(result.sLoan >= 0 && result.sLoan <= 100, `sLoan out of bounds: ${result.sLoan}`);

      // Risk level classification consistency
      if (result.score > 80) {
        assert.equal(result.level, 'critical', `Score ${result.score} must have level 'critical'`);
      } else if (result.score >= 51) {
        assert.equal(result.level, 'watch', `Score ${result.score} must have level 'watch'`);
      } else {
        assert.equal(result.level, 'low', `Score ${result.score} must have level 'low'`);
      }

      // Breakdown weights must sum to 1.00
      const weightSum = result.breakdown.reduce((acc, b) => acc + b.weight, 0);
      assert.ok(Math.abs(weightSum - 1.0) < 1e-6, `Breakdown weights must sum to 1.0, got ${weightSum}`);
    }
  });

  it('M3.2: Factor weight composite formula exactness: score == round(0.35*sRain + 0.35*sPrice + 0.30*sLoan)', () => {
    const testPoints = [
      { rain: 0, mandi: 1200, msp: 2400, days: 3 },    // Severe drought + 50% price crash + 3 days due
      { rain: 80, mandi: 2000, msp: 2425, days: 10 },  // Flood + mild price drop + 10 days due
      { rain: 30, mandi: 2500, msp: 2400, days: 45 },  // Ideal rain + good price + 45 days due
      { rain: 1, mandi: 2425, msp: 2425, days: 90 },   // Drought alone
      { rain: 25, mandi: 1000, msp: 2500, days: 120 }, // Massive crash alone
      { rain: 25, mandi: 2600, msp: 2425, days: 2 }    // Loan due alone
    ];

    for (const tp of testPoints) {
      const res = calculateDistressScore(tp.rain, tp.mandi, tp.msp, tp.days);
      const expected = Math.max(0, Math.min(100, Math.round(0.35 * res.sRain + 0.35 * res.sPrice + 0.30 * res.sLoan)));
      assert.equal(res.score, expected, `Composite score mismatch: got ${res.score}, expected ${expected}`);
    }
  });

  it('M3.3: Specific agronomic distress thresholds and root cause diagnostics', () => {
    // 1. Extreme Drought (rain <= 2.0 mm) triggers drought root cause
    const droughtRes = calculateDistressScore(1.0, 3000, 2400, 90);
    assert.ok(droughtRes.sRain >= 70, `sRain must be >= 70 for 1.0mm rain, got ${droughtRes.sRain}`);
    assert.ok(droughtRes.rootCauses.some(rc => rc.id === 'drought'), 'Must contain drought root cause');

    // 2. Heavy Flood (rain >= 60.0 mm) triggers flood root cause
    const floodRes = calculateDistressScore(80.0, 3000, 2400, 90);
    assert.ok(floodRes.sRain >= 70, `sRain must be >= 70 for 80mm rain, got ${floodRes.sRain}`);
    assert.ok(floodRes.rootCauses.some(rc => rc.id === 'excess_rain'), 'Must contain excess_rain root cause');

    // 3. Price Crash (< MSP) triggers price_crash root cause when sPrice >= 50
    const crashRes = calculateDistressScore(25.0, 1800, 2400, 90);
    assert.ok(crashRes.sPrice >= 50, `sPrice must be >= 50 for 25% price drop, got ${crashRes.sPrice}`);
    assert.ok(crashRes.rootCauses.some(rc => rc.id === 'price_crash'), 'Must contain price_crash root cause');

    // 4. Imminent Due Date (days <= 30 -> sLoan >= 65) triggers loan_due root cause
    const dueRes = calculateDistressScore(25.0, 3000, 2400, 5);
    assert.ok(dueRes.sLoan >= 65, `sLoan must be >= 65 for 5 days due, got ${dueRes.sLoan}`);
    assert.ok(dueRes.rootCauses.some(rc => rc.id === 'loan_due'), 'Must contain loan_due root cause');
  });
});

describe('Mathematical Oracle: Degenerate, Negative, and Boundary Inputs', () => {
  it('M4.1: Degenerate loan inputs produce safe zero outputs without crashing or NaN', () => {
    // Non-numbers, null, undefined, strings
    assert.equal(calculateEMI(null, 5, 12), 0);
    assert.equal(calculateEMI(undefined, 5, 12), 0);
    assert.equal(calculateEMI('not_a_number', 5, 12), 0);
    assert.equal(calculateEMI(50000, 'invalid', 12), 50000 / 12); // Rate defaults to 0 -> linear division
    assert.equal(calculateEMI(50000, 5, 'zero_months'), 0);       // Tenure 0 -> 0

    // Schedule generation with degenerate inputs
    const zeroSched = generateSchedule(0, 0, 0);
    assert.equal(zeroSched.emi, 0);
    assert.equal(zeroSched.totalPayment, 0);
    assert.equal(zeroSched.totalInterest, 0);
    assert.equal(zeroSched.schedule.length, 12); // Default fallback tenure 12
    assert.equal(zeroSched.schedule[0].principal, 0);
    assert.equal(zeroSched.schedule[0].interest, 0);
  });

  it('M4.2: Repayment progress, arrears rollover and countdown calculations', () => {
    const baseDate = new Date();
    baseDate.setMonth(baseDate.getMonth() - 3); // 3 months in past

    const res = generateSchedule(60000, 0, 6, baseDate, 2);
    // 6 months tenure, 0% interest -> EMI = 10,000
    // Total = 60,000. 2 paid -> amountPaid = 20,000, amountLeft = 40,000
    assert.equal(res.emi, 10000);
    assert.equal(res.totalPayment, 60000);
    assert.equal(res.amountPaid, 20000);
    assert.equal(res.amountLeft, 40000);
    assert.equal(res.progressPct, 33); // round(2/6 * 100) = 33%
    assert.equal(res.paidCount, 2);

    // First 2 marked paid
    assert.equal(res.schedule[0].isPaid, true);
    assert.equal(res.schedule[1].isPaid, true);
    assert.equal(res.schedule[2].isPaid, false);
  });
});
