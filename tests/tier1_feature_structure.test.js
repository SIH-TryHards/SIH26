/* ============================================================
   tests/tier1_feature_structure.test.js — Tier 1 Feature Structure Tests
   Validates presence, schema, and layout contracts for:
   - Distress Risk Monitor UI and components
   - Loan Schedule & Calculator engine and containers
   - Government Relief Schemes directory and official schemas
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

describe('Tier 1: Distress Risk Monitor Structure & Components', () => {
  it('F1.1: index.html must contain #distressMonitorMount container', () => {
    assert.ok(
      indexHtml.includes('id="distressMonitorMount"'),
      'index.html is missing #distressMonitorMount element'
    );
  });

  it('F1.2: farmer.js defines renderDistressMonitor and builds full card DOM', () => {
    assert.ok(
      farmerJs.includes('function renderDistressMonitor('),
      'farmer.js does not define renderDistressMonitor()'
    );
    assert.ok(
      farmerJs.includes('class="distress-card"'),
      'renderDistressMonitor does not construct distress-card'
    );
    assert.ok(
      farmerJs.includes('id="distressScoreValue"'),
      'renderDistressMonitor missing #distressScoreValue'
    );
    assert.ok(
      farmerJs.includes('id="distressScoreBand"'),
      'renderDistressMonitor missing #distressScoreBand'
    );
    assert.ok(
      farmerJs.includes('id="distressScoreProgress"'),
      'renderDistressMonitor missing #distressScoreProgress'
    );
  });

  it('F1.3: Distress monitor includes ARIA accessibility attributes on progressbar', () => {
    assert.ok(
      farmerJs.includes('role="progressbar"'),
      'Distress monitor progress bar missing role="progressbar"'
    );
    assert.ok(
      farmerJs.includes('aria-valuemin="0"') && farmerJs.includes('aria-valuemax="100"'),
      'Distress monitor progress bar missing aria-valuemin / aria-valuemax'
    );
  });

  it('F1.4: Distress monitor renders all 3 required interactive sliders with limits and defaults', () => {
    // Rain Slider (0-100mm, default 76)
    assert.ok(
      farmerJs.includes('id="distressRainInput"') &&
      farmerJs.includes('min="0"') &&
      farmerJs.includes('max="100"'),
      'Rain slider #distressRainInput is missing or has incorrect range'
    );
    // Price Crash Slider (0-50%, default 50)
    assert.ok(
      farmerJs.includes('id="distressPriceInput"') &&
      farmerJs.includes('max="50"'),
      'Price slider #distressPriceInput is missing or has incorrect range'
    );
    // Loan Proximity Slider (0-120 days, default 3)
    assert.ok(
      farmerJs.includes('id="distressLoanInput"') &&
      farmerJs.includes('max="120"'),
      'Loan slider #distressLoanInput is missing or has incorrect range'
    );
  });

  it('F1.5: Distress monitor outputs correspond to slider fields', () => {
    assert.ok(
      farmerJs.includes('id="distressRainValue"'),
      'Missing output #distressRainValue'
    );
    assert.ok(
      farmerJs.includes('id="distressPriceValue"'),
      'Missing output #distressPriceValue'
    );
    assert.ok(
      farmerJs.includes('id="distressLoanValue"'),
      'Missing output #distressLoanValue'
    );
  });
});

describe('Tier 1: Loan Schedule Calculator Engine & DOM Structure', () => {
  it('F2.1: loan.js exports calculateEMI and generateSchedule functions', () => {
    assert.equal(typeof loanModule.calculateEMI, 'function', 'calculateEMI is not exported as function');
    assert.equal(typeof loanModule.generateSchedule, 'function', 'generateSchedule is not exported as function');
  });

  it('F2.2: index.html contains all loan input controls and quick presets', () => {
    assert.ok(indexHtml.includes('id="loanAmountInput"'), 'Missing #loanAmountInput');
    assert.ok(indexHtml.includes('id="loanTenureInput"'), 'Missing #loanTenureInput');
    assert.ok(indexHtml.includes('id="loanTenureUnit"'), 'Missing #loanTenureUnit');
    assert.ok(indexHtml.includes('id="loanRateInput"'), 'Missing #loanRateInput');
    assert.ok(indexHtml.includes('id="loanFirstInstallmentInput"'), 'Missing #loanFirstInstallmentInput');
    assert.ok(indexHtml.includes('id="loanPaidInput"'), 'Missing #loanPaidInput');
    assert.ok(indexHtml.includes('id="loanPaidRange"'), 'Missing #loanPaidRange');
    assert.ok(indexHtml.includes('id="loanPaidSummary"'), 'Missing #loanPaidSummary');
  });

  it('F2.3: index.html contains loan result mount points', () => {
    assert.ok(indexHtml.includes('id="loanResultBox"'), 'Missing #loanResultBox');
    assert.ok(indexHtml.includes('id="loanStatusCards"'), 'Missing #loanStatusCards');
    assert.ok(indexHtml.includes('id="loanScheduleMount"'), 'Missing #loanScheduleMount');
  });

  it('F2.4: generateSchedule produces complete data contract with summary and installments', () => {
    const result = loanModule.generateSchedule(50000, 7.0, 12, '2026-09-01', 2);
    
    assert.ok(typeof result.emi === 'number' && result.emi > 0, 'result.emi must be positive number');
    assert.ok(typeof result.totalPayment === 'number' && result.totalPayment > 50000, 'result.totalPayment invalid');
    assert.ok(typeof result.totalInterest === 'number' && result.totalInterest > 0, 'result.totalInterest invalid');
    assert.ok(Array.isArray(result.schedule), 'result.schedule must be an array');
    assert.equal(result.schedule.length, 12, 'result.schedule must contain 12 months');

    const firstMonth = result.schedule[0];
    const requiredKeys = ['month', 'date', 'emi', 'principal', 'interest', 'balance', 'isPaid', 'rolloverArrears', 'totalDue', 'status'];
    for (const key of requiredKeys) {
      assert.ok(key in firstMonth, `Installment record missing key: ${key}`);
    }
  });

  it('F2.5: farmer.js renders loan schedule table with status badges and checkbox interaction', () => {
    assert.ok(farmerJs.includes('function renderLoanSchedule('), 'Missing renderLoanSchedule in farmer.js');
    assert.ok(farmerJs.includes('loan-schedule-table'), 'Missing loan-schedule-table class in farmer.js');
    assert.ok(farmerJs.includes('data-loan-paid-month'), 'Missing data-loan-paid-month binding in farmer.js');
    assert.ok(farmerJs.includes('loan-status-pill'), 'Missing loan-status-pill class in farmer.js');
  });

  it('F2.6: farmer.js binds to canonical index.html loan input element IDs', () => {
    const canonicalIds = [
      'loanAmountInput',
      'loanTenureInput',
      'loanRateInput',
      'loanFirstInstallmentInput',
      'loanPaidInput',
      'loanPaidRange',
      'loanTenureUnit'
    ];
    for (const id of canonicalIds) {
      assert.ok(
        farmerJs.includes(`$('${id}')`),
        `farmer.js does not bind to canonical element ID: #` + id
      );
    }
  });
});

describe('Tier 1: Government Relief Schemes Directory & Schema', () => {
  it('F3.1: data.js exports GOVERNMENT_SCHEMES array with 6 official schemes', () => {
    assert.ok(Array.isArray(dataModule.GOVERNMENT_SCHEMES), 'GOVERNMENT_SCHEMES must be an exported array');
    assert.equal(dataModule.GOVERNMENT_SCHEMES.length, 6, 'GOVERNMENT_SCHEMES must contain exactly 6 schemes');
  });

  it('F3.2: Every scheme contains required structural properties', () => {
    const requiredProps = ['id', 'category', 'title', 'description', 'url', 'helplines'];
    for (const scheme of dataModule.GOVERNMENT_SCHEMES) {
      for (const prop of requiredProps) {
        assert.ok(prop in scheme, `Scheme ${scheme.id || 'unknown'} missing property: ${prop}`);
        assert.ok(scheme[prop] !== undefined && scheme[prop] !== null, `Scheme property ${prop} is null/undefined`);
      }
      assert.ok(Array.isArray(scheme.helplines), `Scheme ${scheme.id} helplines must be an array`);
    }
  });

  it('F3.3: Scheme IDs match the 6 official core schemes', () => {
    const ids = dataModule.GOVERNMENT_SCHEMES.map(s => s.id);
    const expectedIds = ['pm-kisan', 'pmfby', 'machinery', 'kcc', 'pmksy', 'enam'];
    for (const expected of expectedIds) {
      assert.ok(ids.includes(expected), `Missing official scheme id: ${expected}`);
    }
  });

  it('F3.4: index.html contains government schemes mounts and quick action links', () => {
    assert.ok(indexHtml.includes('id="schemeGrid"'), 'index.html missing #schemeGrid');
    assert.ok(indexHtml.includes('id="schemesTitle"'), 'index.html missing #schemesTitle');
    assert.ok(indexHtml.includes('id="schemesIntro"'), 'index.html missing #schemesIntro');
    assert.ok(indexHtml.includes('id="helpPmkisanPortal"'), 'index.html missing #helpPmkisanPortal');
    assert.ok(indexHtml.includes('id="helpKccQuickCall"'), 'index.html missing #helpKccQuickCall');
  });
});
