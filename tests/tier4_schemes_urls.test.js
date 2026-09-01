/* ============================================================
   tests/tier4_schemes_urls.test.js — Tier 4 Government Schemes URL Validator
   Validates official government scheme destinations and helplines:
   - All scheme URLs use verified official .gov.in or .nic.in domains
   - Strict HTTPS protocol compliance
   - Helpline telephone URI and number validation
   - Static HTML markup anchor link compliance
   ============================================================ */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, it, assert } from './test_framework.js';
import { GOVERNMENT_SCHEMES } from '../assets/js/data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const ALLOWED_GOV_DOMAINS = ['.gov.in', '.nic.in'];

describe('Tier 4: Government Schemes URL Domain Compliance', () => {
  it('U1.1: Every scheme URL in data.js uses an official .gov.in or .nic.in domain', () => {
    assert.ok(GOVERNMENT_SCHEMES.length > 0, 'GOVERNMENT_SCHEMES array must not be empty');

    for (const scheme of GOVERNMENT_SCHEMES) {
      assert.ok(scheme.url, `Scheme ${scheme.id} is missing a URL`);
      
      const parsedUrl = new URL(scheme.url);
      const hostname = parsedUrl.hostname.toLowerCase();

      const isOfficialGov = ALLOWED_GOV_DOMAINS.some(domain =>
        hostname.endsWith(domain) || hostname === domain.slice(1)
      );

      assert.ok(
        isOfficialGov,
        `Scheme '${scheme.id}' (${scheme.title}) URL '${scheme.url}' hostname '${hostname}' does not match official government domains (.gov.in / .nic.in)`
      );
    }
  });

  it('U1.2: All scheme URLs strictly enforce HTTPS encryption', () => {
    for (const scheme of GOVERNMENT_SCHEMES) {
      const parsedUrl = new URL(scheme.url);
      assert.equal(
        parsedUrl.protocol,
        'https:',
        `Scheme '${scheme.id}' URL '${scheme.url}' does not use secure HTTPS protocol`
      );
    }
  });

  it('U1.3: No scheme uses placeholder, empty, hash, or javascript: URLs', () => {
    for (const scheme of GOVERNMENT_SCHEMES) {
      assert.ok(scheme.url.trim().length > 0, `Scheme '${scheme.id}' URL is empty`);
      assert.ok(!scheme.url.startsWith('#'), `Scheme '${scheme.id}' has placeholder hash URL`);
      assert.ok(!scheme.url.startsWith('javascript:'), `Scheme '${scheme.id}' has javascript: URL`);
      assert.ok(!scheme.url.includes('example.com'), `Scheme '${scheme.id}' contains mock domain`);
    }
  });
});

describe('Tier 4: Official Helpline Telephone & Protocol Validation', () => {
  it('U2.1: Helpline href attributes use valid tel: URI protocol', () => {
    for (const scheme of GOVERNMENT_SCHEMES) {
      for (const helpline of scheme.helplines) {
        assert.ok(helpline.label, `Scheme ${scheme.id} helpline missing label`);
        assert.ok(helpline.href, `Scheme ${scheme.id} helpline missing href`);
        assert.ok(
          helpline.href.startsWith('tel:'),
          `Scheme ${scheme.id} helpline href '${helpline.href}' must start with tel:`
        );
        const digits = helpline.href.replace(/^tel:/, '').replace(/\D/g, '');
        assert.ok(digits.length >= 5, `Helpline phone number has too few digits: ${helpline.href}`);
      }
    }
  });

  it('U2.2: Official national emergency and scheme toll-free helplines are accurate', () => {
    const pmKisan = GOVERNMENT_SCHEMES.find(s => s.id === 'pm-kisan');
    assert.ok(pmKisan, 'PM-Kisan scheme must be present');
    const pmKisanLabels = pmKisan.helplines.map(h => h.label);
    assert.ok(pmKisanLabels.includes('155261'), 'PM-Kisan must include official 155261 helpline');

    const pmfby = GOVERNMENT_SCHEMES.find(s => s.id === 'pmfby');
    assert.ok(pmfby, 'PMFBY scheme must be present');
    const pmfbyLabels = pmfby.helplines.map(h => h.label);
    assert.ok(pmfbyLabels.includes('14447'), 'PMFBY must include official 14447 helpline');

    const enam = GOVERNMENT_SCHEMES.find(s => s.id === 'enam');
    assert.ok(enam, 'e-NAM scheme must be present');
    const enamLabels = enam.helplines.map(h => h.label);
    assert.ok(enamLabels.includes('1800-270-0224'), 'e-NAM must include 1800-270-0224 helpline');
  });
});

describe('Tier 4: Static index.html Government Links Audit', () => {
  it('U3.1: index.html government scheme buttons point to official domains', () => {
    const indexHtml = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf8');

    // Extract all href URLs in index.html
    const hrefRegex = /href="([^"]+)"/g;
    const links = [];
    let match;
    while ((match = hrefRegex.exec(indexHtml)) !== null) {
      links.push(match[1]);
    }

    const externalLinks = links.filter(l => l.startsWith('http://') || l.startsWith('https://'));
    
    // Check specific known government action buttons
    assert.ok(externalLinks.includes('https://pmkisan.gov.in/'), 'index.html missing pmkisan.gov.in link');
    assert.ok(externalLinks.includes('https://pmfby.gov.in/'), 'index.html missing pmfby.gov.in link');
    assert.ok(externalLinks.includes('https://enam.gov.in/'), 'index.html missing enam.gov.in link');

    // Ensure none of the external links use insecure http://
    const insecureLinks = externalLinks.filter(l => l.startsWith('http://'));
    assert.equal(insecureLinks.length, 0, `Insecure HTTP links found: ${insecureLinks.join(', ')}`);
  });
});
