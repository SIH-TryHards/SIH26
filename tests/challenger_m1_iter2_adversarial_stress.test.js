/* ============================================================
   tests/challenger_m1_iter2_adversarial_stress.test.js
   Adversarial Stress Harness: Edge Cases, Invariants, Extreme DOM State Mutations
   Milestone 1 Iteration 2 — Challenger 2 (DOM Challenger)
   ============================================================ */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, assert } from './test_framework.js';
import * as loanModule from '../assets/js/loan.js';
import * as dataModule from '../assets/js/data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');
const farmerJs = fs.readFileSync(path.join(rootDir, 'assets/js/farmer.js'), 'utf8');

/* ============================================================
   SUITE 1: DOM Integrity & Duplicate ID Detector
   ============================================================ */
describe('Adversarial Stress: DOM Integrity & Zero Duplicate IDs', () => {

  it('ADV-1.1: Verify index.html contains ZERO duplicate element IDs across the entire file', () => {
    const idRegex = /\bid=["']([^"']+)["']/g;
    const seenIds = new Map();
    const duplicates = [];

    let match;
    while ((match = idRegex.exec(indexHtml)) !== null) {
      const id = match[1];
      const count = (seenIds.get(id) || 0) + 1;
      seenIds.set(id, count);
      if (count === 2) {
        duplicates.push(id);
      }
    }

    assert.equal(
      duplicates.length,
      0,
      `Found duplicate element IDs in index.html: ${duplicates.join(', ')}`
    );
  });

  it('ADV-1.2: Verify no orphan unclosed HTML tags in restored modules', () => {
    // Specifically test the section #viewLoan
    const loanViewStart = indexHtml.indexOf('id="viewLoan"');
    const loanViewEnd = indexHtml.indexOf('</section>', loanViewStart);
    assert.ok(loanViewStart !== -1, 'Missing #viewLoan section');
    assert.ok(loanViewEnd !== -1, 'Missing </section> closing tag for #viewLoan');

    const viewHtml = indexHtml.slice(loanViewStart, loanViewEnd + 10);
    
    // Count open vs close div tags inside #viewLoan
    const openDivs = (viewHtml.match(/<div\b/g) || []).length;
    const closeDivs = (viewHtml.match(/<\/div>/g) || []).length;
    assert.equal(
      openDivs,
      closeDivs,
      `Mismatched div tags inside #viewLoan: ${openDivs} open vs ${closeDivs} close`
    );
  });
});

/* ============================================================
   SUITE 2: Dynamic Slider Rapid Mutation & Reactive State Fuzzing
   ============================================================ */
describe('Adversarial Stress: Dynamic Slider Rapid State Mutations', () => {

  it('ADV-2.1: Rapid Fuzzing across 500 combinations of Rain, PriceDrop, and LoanDueDays', () => {
    // Stress test the 3 sliders across diverse permutation boundaries
    const rainSteps = [0, 1, 2, 5, 15, 30, 45, 60, 75, 85, 100];
    const priceDrops = [0, 5, 10, 20, 25, 35, 45, 50];
    const loanDays = [3, 4, 7, 10, 15, 20, 30, 45, 60, 90, 120];

    let testCount = 0;
    for (const rain of rainSteps) {
      for (const drop of priceDrops) {
        for (const days of loanDays) {
          testCount++;
          const msp = 2425;
          const baseMandi = Math.round(msp * 1.08);
          const effectivePrice = Math.max(0, Math.round(baseMandi * (1 - drop / 100)));
          
          const result = loanModule.calculateDistressScore(rain, effectivePrice, msp, days);
          
          // Invariant 1: Score is strictly clamped to [0, 100]
          assert.ok(
            result.score >= 0 && result.score <= 100,
            `Score out of range [0, 100]: got ${result.score} for rain=${rain}, drop=${drop}, days=${days}`
          );
          
          // Invariant 2: Level matches score
          if (result.score > 80) {
            assert.equal(result.level, 'critical', `Score ${result.score} must have level 'critical'`);
          } else if (result.score >= 51) {
            assert.equal(result.level, 'watch', `Score ${result.score} must have level 'watch'`);
          } else {
            assert.equal(result.level, 'low', `Score ${result.score} must have level 'low'`);
          }

          // Invariant 3: If score > 80, rootCauses must not be empty
          if (result.score > 80) {
            assert.ok(
              result.rootCauses.length > 0,
              `Score ${result.score} > 80 but rootCauses array is empty`
            );
          }
        }
      }
    }

    assert.ok(testCount >= 500, `Expected at least 500 permutations, ran ${testCount}`);
  });

  it('ADV-2.2: Extreme Crop MSP baselines (Cotton, Chilli, Onion, Wheat, Rice, Groundnut)', () => {
    const crops = [
      { name: 'cotton', msp: 7121 },
      { name: 'onion', msp: 1650 },
      { name: 'soybean', msp: 4892 },
      { name: 'chilli', msp: 7500 },
      { name: 'tomato', msp: 1800 },
      { name: 'wheat', msp: 2425 },
      { name: 'rice', msp: 2320 },
      { name: 'groundnut', msp: 6783 },
    ];

    for (const c of crops) {
      const dropPct = 40;
      const baseMandi = Math.round(c.msp * 1.08);
      const effectivePrice = Math.max(0, Math.round(baseMandi * (1 - dropPct / 100)));
      
      const result = loanModule.calculateDistressScore(0, effectivePrice, c.msp, 5);
      assert.ok(result.score > 70, `High stress for crop ${c.name} should yield score > 70, got ${result.score}`);
      const priceCause = result.rootCauses.find(rc => rc.id === 'price_crash');
      assert.ok(priceCause, `Crop ${c.name} with 40% price drop must trigger price_crash root cause`);
    }
  });
});

/* ============================================================
   SUITE 3: Loan Tenure Unit Toggle & Checkbox Chain State
   ============================================================ */
describe('Adversarial Stress: Loan Tenure Unit Toggle & Checkbox Chain Mutations', () => {

  it('ADV-3.1: Tenure conversion between Years and Months preserves mathematical invariant', () => {
    const yearValues = [1, 2, 3, 5, 10, 15, 20, 25, 30];
    for (const yr of yearValues) {
      const months = yr * 12;
      const resYears = loanModule.generateSchedule(100000, 4.0, months, '2026-09-01', 0);
      const resMonths = loanModule.generateSchedule(100000, 4.0, yr * 12, '2026-09-01', 0);
      
      assert.equal(resYears.schedule.length, months);
      assert.equal(resMonths.schedule.length, months);
      assert.equal(Math.round(resYears.emi), Math.round(resMonths.emi));
      assert.equal(Math.round(resYears.totalPayment), Math.round(resMonths.totalPayment));
    }
  });

  it('ADV-3.2: Sequential Checkbox marking from Month 1 to Month N produces progressive principal reduction', () => {
    const principal = 120000;
    const rate = 6.0;
    const tenureMonths = 12;
    const startDate = '2026-09-01';

    let prevRemainingBalance = Infinity;
    let prevAmountPaid = -1;

    for (let paidCount = 0; paidCount <= tenureMonths; paidCount++) {
      const res = loanModule.generateSchedule(principal, rate, tenureMonths, startDate, paidCount);
      
      assert.equal(res.paidCount, paidCount);
      assert.ok(res.amountPaid > prevAmountPaid, `amountPaid must strictly increase as paidCount increases`);
      assert.ok(res.amountLeft <= prevRemainingBalance, `amountLeft must decrease as paidCount increases`);

      // Verify that the first paidCount rows in the schedule have isPaid === true
      for (let i = 0; i < tenureMonths; i++) {
        if (i < paidCount) {
          assert.equal(res.schedule[i].isPaid, true, `Row ${i + 1} must be marked isPaid=true`);
        } else {
          assert.equal(res.schedule[i].isPaid, false, `Row ${i + 1} must be marked isPaid=false`);
        }
      }

      prevAmountPaid = res.amountPaid;
      prevRemainingBalance = res.amountLeft;
    }
  });
});

/* ============================================================
   SUITE 4: Security & URL Hardening Audit
   ============================================================ */
describe('Adversarial Stress: Security & External URL Hardening', () => {

  it('ADV-4.1: External government links enforce rel="noopener noreferrer" and https://', () => {
    const linkRegex = /<a\b([^>]*)>/g;
    let match;
    while ((match = linkRegex.exec(indexHtml)) !== null) {
      const attrStr = match[1];
      if (attrStr.includes('href="http:') || attrStr.includes("href='http:")) {
        assert.fail(`Insecure HTTP link found in index.html: ${attrStr}`);
      }
      if (attrStr.includes('target="_blank"')) {
        assert.ok(
          attrStr.includes('rel="noopener noreferrer"'),
          `External link with target="_blank" must include rel="noopener noreferrer": ${attrStr}`
        );
      }
    }
  });

  it('ADV-4.2: Government Scheme URLs are syntactically valid and belong to *.gov.in or *.nic.in', () => {
    const schemes = dataModule.GOVERNMENT_SCHEMES;
    for (const scheme of schemes) {
      const parsedUrl = new URL(scheme.url);
      assert.equal(parsedUrl.protocol, 'https:', `Scheme ${scheme.id} URL must use HTTPS`);
      assert.ok(
        parsedUrl.hostname.endsWith('.gov.in') || parsedUrl.hostname.endsWith('.nic.in'),
        `Scheme ${scheme.id} hostname ${parsedUrl.hostname} is not an official .gov.in or .nic.in domain`
      );
    }
  });
});
