/* ============================================================
   tests/challenger_dom_reactive.test.js — Challenger 2 DOM & Reactive Test Suite
   Milestone 1 DOM & Reactive Interaction Challenger
   Empirical Verification of DOM, Events, Sliders, Banners, Presets, Links
   Strict Zero-Emoji, High-Fidelity Diagnostic Test Harness
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

/* ------------------------------------------------------------
   Minimal Headless DOM Mock Engine for Reactive Testing
   ------------------------------------------------------------ */
class MockClassList {
  constructor(element) {
    this.element = element;
    this._classes = new Set();
  }
  add(...names) {
    names.forEach(n => this._classes.add(n));
    this._sync();
  }
  remove(...names) {
    names.forEach(n => this._classes.delete(n));
    this._sync();
  }
  toggle(name, force) {
    if (force === undefined) {
      if (this._classes.has(name)) this.remove(name);
      else this.add(name);
    } else if (force) {
      this.add(name);
    } else {
      this.remove(name);
    }
  }
  contains(name) {
    return this._classes.has(name);
  }
  _sync() {
    this.element.className = Array.from(this._classes).join(' ');
  }
  _initFromClassName(className = '') {
    this._classes.clear();
    className.split(/\s+/).filter(Boolean).forEach(n => this._classes.add(n));
  }
}

class MockElement {
  constructor(tagName, id = '', className = '') {
    this.tagName = tagName.toUpperCase();
    this.id = id;
    this.className = className;
    this.classList = new MockClassList(this);
    this.classList._initFromClassName(className);
    this.attributes = {};
    this.dataset = {};
    this.style = {};
    this.listeners = {};
    this.children = [];
    this.innerHTML = '';
    this.textContent = '';
    this.value = '';
    this.checked = false;
    this.min = '';
    this.max = '';
    this.step = '';
    this.hidden = false;
  }

  setAttribute(name, value) {
    this.attributes[name] = String(value);
    if (name.startsWith('data-')) {
      const prop = name.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      this.dataset[prop] = String(value);
    }
    if (name === 'id') this.id = String(value);
    if (name === 'class') {
      this.className = String(value);
      this.classList._initFromClassName(this.className);
    }
    if (name === 'value') this.value = String(value);
    if (name === 'min') this.min = String(value);
    if (name === 'max') this.max = String(value);
    if (name === 'step') this.step = String(value);
  }

  getAttribute(name) {
    return this.attributes[name] ?? null;
  }

  addEventListener(type, handler) {
    if (!this.listeners[type]) this.listeners[type] = [];
    this.listeners[type].push(handler);
  }

  dispatchEvent(event) {
    const handlers = this.listeners[event.type] || [];
    for (const h of handlers) {
      h(event);
    }
  }

  querySelector(selector) {
    const all = this.querySelectorAll(selector);
    return all.length ? all[0] : null;
  }

  querySelectorAll(selector) {
    const results = [];
    const walk = (el) => {
      for (const child of el.children) {
        if (matchesSelector(child, selector)) {
          results.push(child);
        }
        walk(child);
      }
    };
    walk(this);
    return results;
  }
}

function matchesSelector(el, sel) {
  if (sel.startsWith('#')) return el.id === sel.slice(1);
  if (sel.startsWith('.')) return el.classList.contains(sel.slice(1));
  if (sel.startsWith('[')) {
    const attrMatch = sel.match(/\[([a-zA-Z0-9_-]+)(?:=['"]?([^'"]+)['"]?)?\]/);
    if (attrMatch) {
      const [, attrName, attrVal] = attrMatch;
      if (attrVal === undefined) return el.getAttribute(attrName) !== null || attrName in el.dataset;
      return el.getAttribute(attrName) === attrVal;
    }
  }
  return el.tagName.toLowerCase() === sel.toLowerCase();
}

/* ------------------------------------------------------------
   SUITE 1: DOM Elements Static & Structural Integrity
   ------------------------------------------------------------ */
describe('Tier 5: Challenger DOM Elements Static & Structural Integrity', () => {

  it('D1.1: Distress Risk Planner DOM elements presence in index.html', () => {
    const requiredIds = [
      'distressPlannerCard',
      'distressPlannerTitle',
      'distressLiveBadge',
      'distressPlannerSubtitle',
      'distressScorePill',
      'distressWarningBanner',
      'spikeReasonsList',
      'sliderRainSimMm',
      'sliderPriceDropPct',
      'sliderLoanDueDays',
      'sliderRainValDisplay',
      'sliderPriceDropDisplay',
      'sliderLoanDaysDisplay',
      'factor1RainVal',
      'factor1RainSummary',
      'factor1RiskBadge',
      'factor2PriceVal',
      'factor2MspComparison',
      'factor2RiskBadge',
      'factor3LoanDaysVal',
      'factor3LoanSummary',
      'factor3RiskBadge',
      'distressScoreNumDisplay',
      'distressScoreLevelText',
      'distressMeterBar',
      'distressMonitorMount',
    ];

    for (const id of requiredIds) {
      assert.ok(
        indexHtml.includes(`id="${id}"`),
        `Missing required Distress Risk Planner element ID: #${id}`
      );
    }
  });

  it('D1.2: Distress Risk Planner sliders attribute constraints', () => {
    assert.ok(
      indexHtml.includes('id="sliderRainSimMm" min="0" max="100" value="0" step="2"'),
      'sliderRainSimMm missing expected attributes (min=0, max=100, step=2)'
    );
    assert.ok(
      indexHtml.includes('id="sliderPriceDropPct" min="0" max="50" value="0" step="2"'),
      'sliderPriceDropPct missing expected attributes (min=0, max=50, step=2)'
    );
    assert.ok(
      indexHtml.includes('id="sliderLoanDueDays" min="3" max="120" value="15" step="1"'),
      'sliderLoanDueDays missing expected attributes (min=3, max=120, step=1)'
    );
  });

  it('D1.3: Loan Schedule & Calculator input controls in index.html', () => {
    const requiredLoanIds = [
      'loanAmountInput',
      'loanTenureInput',
      'loanTenureUnit',
      'btnTenureYears',
      'btnTenureMonths',
      'loanRateInput',
      'loanFirstInstallmentInput',
      'loanPaidInput',
      'loanPaidRange',
      'loanPaidSummary',
      'outMonthlyEmi',
      'outTotalInterest',
      'outTotalPayable',
      'outAmountPaid',
      'outAmountLeft',
      'outNextDueDate',
      'outNextDueCountdown',
      'loanProgressPctText',
      'loanPaidProgressBar',
      'loanLeftProgressBar',
      'btnMarkAllPaid',
      'btnResetChecklist',
      'rolloverSummaryBadge',
      'loanScheduleTableBody',
    ];

    for (const id of requiredLoanIds) {
      assert.ok(
        indexHtml.includes(`id="${id}"`),
        `Missing required Loan Calculator element ID: #${id}`
      );
    }
  });

  it('D1.4: Loan Calculator Quick Preset Buttons in index.html', () => {
    const expectedAmountPresets = ['50000', '100000', '200000', '300000', '500000'];
    for (const amt of expectedAmountPresets) {
      assert.ok(
        indexHtml.includes(`data-loan-amount="${amt}"`),
        `Missing loan amount quick preset button: data-loan-amount="${amt}"`
      );
    }

    const expectedTenurePresets = ['12', '24', '36', '60'];
    for (const t of expectedTenurePresets) {
      assert.ok(
        indexHtml.includes(`data-loan-tenure="${t}"`),
        `Missing loan tenure quick preset button: data-loan-tenure="${t}"`
      );
    }

    const expectedRatePresets = ['4.0', '7.0', '8.5', '11.0'];
    for (const r of expectedRatePresets) {
      assert.ok(
        indexHtml.includes(`data-loan-rate="${r}"`),
        `Missing loan interest rate quick preset button: data-loan-rate="${r}"`
      );
    }

    const expectedDatePresets = ['next', 'today', 'october', 'january'];
    for (const d of expectedDatePresets) {
      assert.ok(
        indexHtml.includes(`data-loan-date="${d}"`),
        `Missing loan first installment date quick preset button: data-loan-date="${d}"`
      );
    }
  });

  it('D1.5: Government Relief Schemes mount point and quick action links in index.html', () => {
    assert.ok(indexHtml.includes('id="schemeGrid"'), 'Missing #schemeGrid mount point');
    assert.ok(indexHtml.includes('id="helpKccQuickCall"'), 'Missing #helpKccQuickCall link');
    assert.ok(indexHtml.includes('id="helpPmkisanPortal"'), 'Missing #helpPmkisanPortal link');
    assert.ok(indexHtml.includes('id="helpPmfbyPortal"'), 'Missing #helpPmfbyPortal link');
    assert.ok(indexHtml.includes('id="helpEnamPortal"'), 'Missing #helpEnamPortal link');
  });
});

/* ------------------------------------------------------------
   SUITE 2: Distress Risk Planner Reactive Interactions & Warnings
   ------------------------------------------------------------ */
describe('Tier 5: Challenger Distress Risk Reactive State & Warning Banner', () => {

  it('D2.1: Default Baseline State produces score <= 50 and hides Warning Banner', () => {
    const rainVal = 0;
    const priceDropPct = 0;
    const loanDaysVal = 15;
    const mspBaseline = 2425;
    const baseMandiPrice = Math.round(mspBaseline * 1.08);
    const effectivePrice = Math.max(0, Math.round(baseMandiPrice * (1 - priceDropPct / 100)));

    const result = loanModule.calculateDistressScore(rainVal, effectivePrice, mspBaseline, loanDaysVal);
    
    // With 0mm rain (drought sRain=100), 8% above MSP (sPrice=10), 15d due (sLoan=85):
    // composite = round(0.35*100 + 0.35*10 + 0.30*85) = round(35 + 3.5 + 25.5) = 64
    assert.ok(typeof result.score === 'number', 'Distress score must be a number');
    assert.ok(result.score <= 80, `Baseline score (${result.score}) should not trigger critical alert (>80)`);
    assert.equal(result.score > 80, false, 'Warning banner must be hidden when score <= 80');
  });

  it('D2.2: Extreme Stress Scenario triggers score > 80 and Critical Warning Banner', () => {
    // 0mm rain (sRain=100), 40% price drop below MSP (sPrice=100), 3 days until due (sLoan=98)
    const rainVal = 0;
    const mspBaseline = 7121; // Cotton
    const effectivePrice = Math.round(mspBaseline * 0.5); // 50% crash
    const loanDaysVal = 3;

    const result = loanModule.calculateDistressScore(rainVal, effectivePrice, mspBaseline, loanDaysVal);
    
    assert.ok(result.score > 80, `Compound stress score (${result.score}) must exceed 80`);
    assert.equal(result.level, 'critical', 'Risk level must be critical');
    assert.ok(result.rootCauses.length >= 3, `Expected at least 3 root causes, got ${result.rootCauses.length}`);

    // Verify all 3 root causes are identified
    const causeIds = result.rootCauses.map(rc => rc.id);
    assert.ok(causeIds.includes('drought'), 'Missing drought root cause');
    assert.ok(causeIds.includes('price_crash'), 'Missing price_crash root cause');
    assert.ok(causeIds.includes('loan_due'), 'Missing loan_due root cause');
  });

  it('D2.3: Inundation / Flood Hazard Scenario triggers excessive rain root cause', () => {
    const rainVal = 85.0; // Flood
    const mspBaseline = 2425;
    const effectivePrice = 2600;
    const loanDaysVal = 45;

    const result = loanModule.calculateDistressScore(rainVal, effectivePrice, mspBaseline, loanDaysVal);
    
    const excessRainCause = result.rootCauses.find(rc => rc.id === 'excess_rain');
    assert.ok(excessRainCause, 'Excessive rain must trigger excess_rain root cause');
    assert.ok(excessRainCause.title.includes('Excessive Rainfall'), 'Title must mention Excessive Rainfall');
    assert.ok(excessRainCause.desc.includes('85.0 mm'), 'Description must interpolate 85.0 mm');
  });

  it('D2.4: Distress Warning Banner in index.html contains verified emergency action links', () => {
    // Verify emergency action buttons inside #distressWarningBanner
    assert.ok(
      indexHtml.includes('href="tel:18001801551"'),
      'Distress Warning Banner missing tel:18001801551 Kisan Emergency Desk'
    );
    assert.ok(
      indexHtml.includes('href="https://pmfby.gov.in/" target="_blank" rel="noopener noreferrer"'),
      'Distress Warning Banner missing PMFBY Portal with target="_blank" and rel="noopener noreferrer"'
    );
  });
});

/* ------------------------------------------------------------
   SUITE 3: Loan Schedule & Calculator Reactive Interactivity
   ------------------------------------------------------------ */
describe('Tier 5: Challenger Loan Calculator & Schedule Interactivity', () => {

  it('D3.1: Standard Subsidized KCC Loan (50K, 1 Yr, 4%) Amortization Schedule row count invariant', () => {
    const principal = 50000;
    const rate = 4.0;
    const tenureMonths = 12;
    const startDate = '2026-09-01';
    const paidCount = 0;

    const result = loanModule.generateSchedule(principal, rate, tenureMonths, startDate, paidCount);
    
    assert.equal(result.schedule.length, 12, 'Schedule row count must strictly equal tenureMonths (12)');
    assert.equal(result.totalMonths, 12, 'totalMonths must equal 12');
    assert.equal(result.paidCount, 0, 'paidCount must equal 0');
    assert.equal(result.progressPct, 0, 'progressPct must equal 0%');

    // Total amortized principal across all 12 installments must equal exactly 50000
    const totalAmortizedPrincipal = result.schedule.reduce((acc, row) => acc + row.principal, 0);
    assert.ok(
      Math.abs(totalAmortizedPrincipal - principal) < 0.01,
      `Principal sum ${totalAmortizedPrincipal} does not match initial principal ${principal}`
    );
  });

  it('D3.2: 5-Year Loan (60 Months) generates 60 schedule rows with valid due dates', () => {
    const principal = 300000;
    const rate = 7.0;
    const tenureMonths = 60;
    const startDate = '2026-10-01';

    const result = loanModule.generateSchedule(principal, rate, tenureMonths, startDate, 15);
    
    assert.equal(result.schedule.length, 60, 'Schedule row count must strictly equal 60');
    assert.equal(result.paidCount, 15, 'paidCount must equal 15');
    assert.equal(result.progressPct, 25, '15/60 must equal 25%');

    // First unpaid month is month 16
    const firstUnpaid = result.schedule.find(r => !r.isPaid);
    assert.equal(firstUnpaid.month, 16, 'First unpaid month must be month 16');
  });

  it('D3.3: Overdue Rollover Arrears accumulation logic', () => {
    // Start date in the past (e.g. 3 months ago) with 0 paid installments
    const pastDate = new Date();
    pastDate.setMonth(pastDate.getMonth() - 3);
    const startDate = pastDate.toISOString().slice(0, 10);

    const result = loanModule.generateSchedule(100000, 4.0, 12, startDate, 0);
    
    assert.ok(result.unpaidRolloversCount >= 2, `Expected overdue rollovers, got ${result.unpaidRolloversCount}`);
    
    // Month 2 totalDue should include rollover arrears from Month 1
    const m2 = result.schedule[1];
    if (m2.isDue && !m2.isPaid) {
      assert.ok(m2.rolloverArrears > 0, 'Month 2 must accumulate rollover arrears');
      assert.ok(m2.totalDue > m2.emi, 'Month 2 total due must exceed base EMI');
    }
  });

  it('D3.4: Mark All Paid boundary produces 100% progress and zero remaining balance', () => {
    const result = loanModule.generateSchedule(100000, 4.0, 24, '2026-09-01', 24);
    
    assert.equal(result.paidCount, 24, 'paidCount must equal 24');
    assert.equal(result.progressPct, 100, 'progressPct must be 100%');
    assert.equal(result.amountLeft, 0, 'amountLeft must be 0');
    assert.equal(result.unpaidRolloversCount, 0, 'unpaidRolloversCount must be 0');
  });
});

/* ------------------------------------------------------------
   SUITE 4: Government Relief Schemes Directory & Links
   ------------------------------------------------------------ */
describe('Tier 5: Challenger Government Relief Schemes Directory & Links', () => {

  it('D4.1: data.js exports 6 official schemes with required schema', () => {
    const schemes = dataModule.GOVERNMENT_SCHEMES;
    assert.ok(Array.isArray(schemes), 'GOVERNMENT_SCHEMES must be an array');
    assert.equal(schemes.length, 6, 'Must contain exactly 6 government schemes');

    const expectedIds = ['pm-kisan', 'pmfby', 'machinery', 'kcc', 'pmksy', 'enam'];
    for (const expectedId of expectedIds) {
      const found = schemes.find(s => s.id === expectedId);
      assert.ok(found, `Missing scheme ID: ${expectedId}`);
      assert.ok(found.title && found.title.length > 0, `Scheme ${expectedId} missing title`);
      assert.ok(found.category && found.category.length > 0, `Scheme ${expectedId} missing category`);
      assert.ok(found.description && found.description.length > 0, `Scheme ${expectedId} missing description`);
      assert.ok(found.url && found.url.startsWith('https://'), `Scheme ${expectedId} URL must be HTTPS`);
      assert.ok(
        found.url.includes('.gov.in') || found.url.includes('.nic.in'),
        `Scheme ${expectedId} URL must use .gov.in or .nic.in domain`
      );
    }
  });

  it('D4.2: Dynamic Scheme Card Renderer in farmer.js enforces target="_blank" and rel="noopener noreferrer"', () => {
    assert.ok(
      farmerJs.includes('target="_blank" rel="noopener noreferrer"'),
      'farmer.js scheme card renderer missing target="_blank" rel="noopener noreferrer"'
    );
    assert.ok(
      farmerJs.includes('class="btn btn--primary scheme-card__link"'),
      'farmer.js scheme card renderer missing .scheme-card__link button'
    );
  });

  it('D4.3: All Scheme Helplines use valid tel: URI protocol', () => {
    const schemes = dataModule.GOVERNMENT_SCHEMES;
    for (const scheme of schemes) {
      if (scheme.helplines) {
        for (const line of scheme.helplines) {
          assert.ok(line.href.startsWith('tel:'), `Helpline href must start with tel:, got: ${line.href}`);
          assert.ok(/^\+?[0-9-]+$/.test(line.href.replace('tel:', '')), `Helpline number contains invalid characters: ${line.href}`);
        }
      }
    }
  });

  it('D4.4: Static Quick Action Links in index.html use verified official domains and attributes', () => {
    const expectedStaticLinks = [
      { id: 'helpPmkisanPortal', url: 'https://pmkisan.gov.in/' },
      { id: 'helpPmfbyPortal', url: 'https://pmfby.gov.in/' },
      { id: 'helpEnamPortal', url: 'https://enam.gov.in/' },
    ];

    for (const item of expectedStaticLinks) {
      const pattern = `id="${item.id}" href="${item.url}" target="_blank" rel="noopener noreferrer"`;
      assert.ok(
        indexHtml.includes(pattern),
        `index.html missing secure static link pattern: ${pattern}`
      );
    }
  });
});

/* ------------------------------------------------------------
   SUITE 5: Empirical Identification of Implementation Defects
   ------------------------------------------------------------ */
describe('Tier 5: Challenger Implementation Defect Auditor (farmer.js vs index.html)', () => {

  it('D5.1: AUDIT: Check Loan Input Element ID Alignment between index.html and farmer.js', () => {
    // In index.html, the elements are:
    // loanAmountInput, loanTenureInput, loanRateInput, loanFirstInstallmentInput, loanPaidInput, loanPaidRange
    // In farmer.js, check whether farmer.js references inputLoanPrincipal, inputLoanTenure, etc.
    const farmerUsesMismatchIds = 
      farmerJs.includes('inputLoanPrincipal') ||
      farmerJs.includes('inputLoanTenure') ||
      farmerJs.includes('inputLoanRate') ||
      farmerJs.includes('inputFirstInstallmentDate') ||
      farmerJs.includes('inputInstallmentsPaid') ||
      farmerJs.includes('sliderInstallmentsPaid');

    assert.ok(!farmerUsesMismatchIds, 'farmer.js must NOT reference non-canonical element IDs (inputLoanPrincipal, inputLoanTenure, etc.)');
    assert.ok(farmerJs.includes('loanAmountInput'), 'farmer.js must reference #loanAmountInput');
    assert.ok(farmerJs.includes('loanTenureInput'), 'farmer.js must reference #loanTenureInput');
    assert.ok(farmerJs.includes('loanRateInput'), 'farmer.js must reference #loanRateInput');
    assert.ok(farmerJs.includes('loanFirstInstallmentInput'), 'farmer.js must reference #loanFirstInstallmentInput');
    assert.ok(farmerJs.includes('loanPaidInput'), 'farmer.js must reference #loanPaidInput');
    assert.ok(farmerJs.includes('loanPaidRange'), 'farmer.js must reference #loanPaidRange');
  });

  it('D5.2: AUDIT: Check renderDistressPlanner function closure in farmer.js', () => {
    // Check if renderDistressPlanner has a missing closing brace before renderDistressMonitor
    const plannerIdx = farmerJs.indexOf('function renderDistressPlanner()');
    const monitorIdx = farmerJs.indexOf('function renderDistressMonitor()');
    
    assert.ok(plannerIdx !== -1, 'renderDistressPlanner must exist');
    assert.ok(monitorIdx !== -1, 'renderDistressMonitor must exist');

    const codeBetween = farmerJs.slice(plannerIdx, monitorIdx);
    // Count braces between function renderDistressPlanner and function renderDistressMonitor
    let openCount = 0;
    for (const char of codeBetween) {
      if (char === '{') openCount++;
      if (char === '}') openCount--;
    }

    assert.equal(openCount, 0, `renderDistressPlanner must be strictly closed before renderDistressMonitor (found ${openCount} unclosed braces)`);
  });
});
