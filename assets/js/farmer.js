/* ============================================================
   farmer.js — farmer screen controller.

   Owns the DOM and view flow only. Strings come from i18n.js,
   persistence from storage.js, seed data through the repository,
   navigation through the hash router, form controls are the
   shadcn-style components (pathway.md PART 3 §3).

   Coverage: S1 gate, S2 location (36 states, 762 districts,
   villages + free-text), S3 land, S4 crop with auto-derived
   growth stage (advisory.calculateStage), S5 stub. Geographic
   names translate live via Sarvam when a key is configured.
   ============================================================ */

import { LANGUAGES, t, getLang, setLang } from './i18n.js';
import * as storage from './storage.js';
import { repository, getAuth } from './repository/index.js';
import * as router from './router.js';
import { createSelect } from './components/select.js';
import {
  calculateCropPhenology,
  calculateCropWaterDemand,
  evaluateSprayWindow,
  buildTomorrowActionPlan,
  calculateStage,
  buildAdvisories
} from './advisory.js';
import { classifySoilHydration } from './services/weather.js';
import { SARVAM_LOCALES, SARVAM_API_KEY, setSarvamKey } from './config.js';
import { sarvamEnabled, translateNames } from './services/sarvam.js';
import * as voice from './voice.js';
import * as icons from './icons.js';
import { generateSchedule } from './loan.js';

const _el = (id) => document.getElementById(id);
const $ = (id) => {
  const el = _el(id);
  if (el) return el;
  /* Return a safe no-op proxy so .textContent = ... never throws */
  return new Proxy({}, { get: () => '', set: () => true });
};

const languageGate = $('languageGate');
const languageGrid = $('languageGrid');
const voiceNote = $('voiceNote');
const openPickerBtn = $('openLanguagePicker');
const selectedLabel = $('selectedLanguageLabel');

const locationError = $('locationError');
const villageFreeField = $('villageFreeField');
const villageFree = $('villageFree');

const landError = $('landError');
const landArea = $('landArea');
const cropError = $('cropError');
const varietyFreeField = $('varietyFreeField');
const varietyFree = $('varietyFree');
const sownDate = $('sownDate');
const stageChip = $('stageChip');

/* S6 auth gate */
const authTabs = $('authTabs');
const tabFarmer = $('tabFarmer');
const tabOfficer = $('tabOfficer');
const panelFarmer = $('panelFarmer');
const panelOfficer = $('panelOfficer');
const phoneInput = $('phoneInput');
const otpField = $('otpField');
const otpInput = $('otpInput');
const demoOtpNote = $('demoOtpNote');
const sendOtpBtn = $('sendOtpBtn');
const resendBtn = $('resendBtn');
const farmerError = $('farmerError');
const staffInput = $('staffInput');
const passwordInput = $('passwordInput');
const officerError = $('officerError');
const authError = $('authError');
const authSuccess = $('authSuccess');
const authSuccessActions = $('authSuccessActions');
const authContinueBtn = $('authContinueBtn');
const guestBtn = $('guestBtn');
const signoutBtn = $('signoutBtn');

let otpSent = false;
let resendTimer = null;

/* S7 home */
let homeAdvisories = [];
let acked = false;

/* S6.5 profile completion — server "me" cache (ACCOUNT CONTRACT §6) */
let meCache = null;

/* S9 Mandi */
let mandiQty = 20;

/* S8 Advisory detail — index of the card tapped on S7 */
let selectedAdvisoryIndex = 0;

/* S10 Help */
const visitForm = $('visitForm');
const visitDateInput = $('visitDateInput');
const visitReasonInput = $('visitReasonInput');
const visitError = $('visitError');
const visitSuccess = $('visitSuccess');
const officerVisitToggleBtn = $('officerVisitToggleBtn');

const VIEWS = ['welcome', 'location', 'land', 'crop', 'review', 'intent', 'auth', 'profile', 'home', 'advisory', 'mandi', 'help', 'officer', 'loan'];
const OTHER = '__other__';
const TREE = repository.getLocationTree();
const LAND = repository.getLandOptions();
const CROPS = repository.getCropCatalogue();
const SEVERITY_ICON = { urgent: icons.alert, warning: icons.alert, watch: icons.alert, info: icons.info };

/* true when the gate covers a first visit: picking a language then
   advances into S2. A reopen from the globe button just changes
   language in place. */
let gateAdvances = false;

function getLanguageByCode(code) {
  return LANGUAGES.find((l) => l.code === code) ?? null;
}

/* ---------- S1 language gate ---------- */

function speak(language) {
  if (!('speechSynthesis' in window)) {
    voiceNote.textContent = t('gate.unavailable');
    return;
  }
  window.speechSynthesis.cancel();
  const speech = new SpeechSynthesisUtterance(language.nativeName);
  speech.lang = language.locale;
  speech.rate = 0.85;
  window.speechSynthesis.speak(speech);
  voiceNote.textContent = t('gate.preview', { language: language.nativeName });
}

function renderLanguageTiles() {
  languageGrid.replaceChildren();

  LANGUAGES.forEach((language) => {
    const tile = document.createElement('div');
    tile.className = 'language-tile';

    const choose = document.createElement('button');
    choose.className = 'language-tile__choice';
    choose.type = 'button';
    choose.dataset.language = language.code;
    choose.setAttribute('aria-label', `Choose ${language.label}`);

    const name = document.createElement('span');
    name.className = 'language-tile__name';
    name.textContent = language.nativeName;

    const listen = document.createElement('button');
    listen.className = 'language-tile__listen';
    listen.type = 'button';
    listen.innerHTML = icons.speaker(16);
    listen.title = `Listen to ${language.label}`;
    listen.setAttribute('aria-label', `Listen to ${language.label}`);
    listen.addEventListener('click', () => speak(language));

    choose.append(name);
    choose.addEventListener('click', () => selectLanguage(language, { advance: gateAdvances }));
    tile.append(choose, listen);
    languageGrid.append(tile);
  });
}

function selectLanguage(language, { advance }) {
  storage.setLanguage(language.code);
  setLang(language.code);
  applyCopy();
  voiceNote.textContent = '';
  languageGate.hidden = true;
  openPickerBtn.hidden = false;
  openPickerBtn.focus();
  /* First-ever choice flows straight into S2; a later change of
     language stays on the screen it was opened from. */
  if (advance) router.go('location');
}

/* ---------- shared rendering ---------- */

function applyCopy() {
  document.documentElement.lang = getLang();

  const lang = getLanguageByCode(getLang());
  selectedLabel.textContent = lang ? lang.nativeName : 'English';

  $('taglineText').textContent = t('brand.tagline');

  $('languageTitle').textContent = t('gate.choose');
  $('languagePrompt').textContent = t('gate.prompt');

  $('welcomeStep').textContent = t('welcome.stepLabel');
  $('starterTitle').textContent = t('welcome.title');
  $('welcomeText').textContent = t('welcome.text');
  $('welcomeNext').textContent = t('welcome.next');
  $('startSetup').textContent = t('welcome.cta');

  $('locStepLabel').textContent = t('loc.stepLabel');
  $('locTitle').textContent = t('loc.title');
  $('locHelp').textContent = t('loc.help');
  $('lblState').textContent = t('loc.state');
  $('lblDistrict').textContent = t('loc.district');
  $('lblVillage').textContent = t('loc.village');
  $('lblVillageFree').textContent = t('loc.village');
  villageFree.placeholder = t('loc.villageFreePh');
  $('locBack').textContent = t('loc.back');
  $('locContinue').textContent = t('loc.continue');

  $('landStepLabel').textContent = t('land.stepLabel');
  $('landTitle').textContent = t('land.title');
  $('landHelp').textContent = t('land.help');
  $('lblArea').textContent = t('land.area');
  landArea.placeholder = t('land.areaPh');
  $('lblSoil').textContent = t('land.soil');
  $('lblIrrigation').textContent = t('land.irrigation');
  $('landBack').textContent = t('loc.back');
  $('landContinue').textContent = t('loc.continue');

  $('cropStepLabel').textContent = t('crop.stepLabel');
  $('cropTitle').textContent = t('crop.title');
  $('cropHelp').textContent = t('crop.help');
  $('lblCrop').textContent = t('crop.crop');
  $('lblVariety').textContent = t('crop.variety');
  $('lblVarietyFree').textContent = t('crop.variety');
  varietyFree.placeholder = t('crop.varietyPh');
  $('lblSown').textContent = t('crop.sown');
  $('cropBack').textContent = t('loc.back');
  $('cropContinue').textContent = t('loc.continue');

  $('s5StepLabel').textContent = t('s5.stepLabel');
  $('s5Title').textContent = t('s5.title');
  $('s5Help').textContent = t('s5.help');
  $('reviewBack').textContent = t('loc.back');
  $('reviewSave').textContent = t('s5.save');
  $('reviewSaved').textContent = t('s5.saved');

  /* S6-F1 account intent chrome */
  $('intentStepLabel').textContent = t('intent.stepLabel');
  $('intentTitle').textContent = t('intent.title');
  $('intentWhy').textContent = t('intent.why');
  $('intentSummaryLabel').textContent = t('intent.summary');
  $('intentBenefitsTitle').textContent = t('intent.benefitsTitle');
  $('intentPrivacy').textContent = t('intent.privacy');
  $('consentText').textContent = t('intent.terms');
  $('intentContinue').textContent = t('intent.continue');
  $('intentChange').textContent = t('intent.change');
  $('intentBack').textContent = `‹ ${t('loc.back')}`;
  $('intentGuest').textContent = t('s6.guest');

  $('s6StepLabel').textContent = t('s6.stepLabel');  $('s6Title').textContent = t('s6.title');  $('s6Help').textContent = t('s6.help');
  tabFarmer.textContent = t('s6.tabFarmer');
  tabOfficer.textContent = t('s6.tabOfficer');
  $('lblPhone').textContent = t('s6.phone');
  phoneInput.placeholder = t('s6.phonePh');
  $('lblOtp').textContent = t('s6.otp');
  otpInput.placeholder = t('s6.otpPh');
  sendOtpBtn.textContent = otpSent ? t('s6.verify') : t('s6.sendCode');
  $('lblStaff').textContent = t('s6.staffId');
  $('lblPassword').textContent = t('s6.password');
  $('officerLoginBtn').textContent = t('s6.signIn');
  $('forgotNote').textContent = t('s6.forgot');
  guestBtn.textContent = t('s6.guest');
  signoutBtn.textContent = t('s6.signout');
  authContinueBtn.textContent = t('s6.continue');

  /* S6.5 profile completion chrome */
  $('lblName').textContent = t('p.name');
  $('displayNameInput').placeholder = t('p.namePh');
  $('profileSaveBtn').textContent = t('p.save');

  /* S7 home chrome */
  $('advisoryTitle').textContent = t('home.title');
  $('advisoryDetailWhyLabel').textContent = t('adv.detail.why');
  $('advisoryDetailBack').textContent = `‹ ${t('loc.back')}`;
  $('guestNote').textContent = t('home.guestNote');
  paintListenButton(voice.isSpeaking());
  $('ackBtn').innerHTML = acked
    ? `${icons.check(18)}<span>${escapeHtml(t('home.acked'))}</span>`
    : `${icons.check(18)}<span>${escapeHtml(t('home.ack'))}</span>`;
  $('ackBtn').disabled = acked;
  $('weatherDeviation').className = 'deviation';

  /* S9 mandi comparison chrome */
  $('mandiStepLabel').textContent = t('nav.mandi');
  $('mandiTitle').textContent = t('mandi.title');
  $('mandiHelp').textContent = t('mandi.help');
  $('lblMandiCrop').textContent = t('mandi.cropLabel');
  $('lblMandiQty').textContent = t('mandi.qtyLabel');
  $('mandiQtyInput').placeholder = t('mandi.qtyPh');
    $('mandiRecalcBtn').textContent = t('mandi.recalc');
  $('mandiResultsLabel').textContent = t('mandi.bestNetTag');

  /* S10 help chrome */
  $('helpStepLabel').textContent = t('nav.help');
  $('helpTitle').textContent = t('help.title');
  $('helpHelp').textContent = t('help.help');
  $('officerRole').textContent = t('help.officerRole');
  $('officerCallBtn').textContent = t('help.callBtn');
  $('officerVisitToggleBtn').textContent = t('help.visitBtn');
  $('visitFormTitle').textContent = t('help.visitTitle');
  $('lblVisitDate').textContent = t('help.visitDateLabel');
  $('lblVisitReason').textContent = t('help.visitReasonLabel');
  $('visitReasonInput').placeholder = t('help.visitReasonPh');
  $('visitSubmitBtn').textContent = t('help.visitSubmit');
  $('visitCancelBtn').textContent = t('help.visitCancel');
  $('helplinesTitle').textContent = t('help.helplinesTitle');
  $('kccName').textContent = t('help.kcc');
  $('disasterName').textContent = t('help.disasterLine');

  $('schemesTitle').textContent = t('help.schemesTitle');
  $('scheme1Title').textContent = t('help.scheme1Title');
  $('scheme1Desc').textContent = t('help.scheme1Desc');
  $('scheme2Title').textContent = t('help.scheme2Title');
  $('scheme2Desc').textContent = t('help.scheme2Desc');


  /* Navigation labels */
  $('navHomeLabel').textContent = t('nav.home');
  $('navMandiLabel').textContent = t('nav.mandi');
  $('navHelpLabel').textContent = t('nav.help');
  $('navLoanLabel').textContent = t('nav.loan');
  $('navProfileLabel').textContent = t('nav.profile');

  /* Module 5: My Loan */
  $('loanTitle').textContent = t('loan.title');
  $('loanHelp').textContent = t('loan.help');
  $('lblLoanAmount').textContent = t('loan.amount');
  $('lblLoanTenure').textContent = t('loan.tenure');
  $('lblLoanRate').textContent = t('loan.rate');
  $('loanCalcBtn').textContent = t('loan.calculate');
  $('loanResultTitle').textContent = t('loan.resultTitle');
  $('lblLoanEmi').textContent = t('loan.emi');
  $('lblLoanTotalInterest').textContent = t('loan.totalInterest');
  $('lblLoanTotalPayment').textContent = t('loan.totalPayment');
  $('loanKccNote').textContent = t('loan.kccNote');

  /* S11 profile overview chrome */
  $('profileFarmOverviewTitle').textContent = t('profile.title');
  $('lblProfileLoc').textContent = t('profile.locLabel');
  $('lblProfileLand').textContent = t('profile.landLabel');
  $('lblProfileCrop').textContent = t('profile.cropLabel');
  $('lblProfileLang').textContent = t('profile.langLabel');
  $('btnEditLoc').textContent = t('profile.change');
  $('btnEditLand').textContent = t('profile.change');
  $('btnEditCrop').textContent = t('profile.change');
  $('btnEditLang').textContent = t('profile.change');
  $('profileSignoutBtn').textContent = t('profile.signout');

  paintAuthState();
  /* renderHome is called by the 'home' route handler, not here.
     Calling it here at boot with no session causes unhandled async
     errors that kill the JS execution chain. */
  if (storage.getSession()) {
    renderHome().catch(() => {});
  }

  stateSelect.setPlaceholder(t('loc.ph.state'));
  districtSelect.setPlaceholder(t('loc.ph.district'));
  villageSelect.setPlaceholder(t('loc.ph.village'));
  stateSelect.setSearchPlaceholder(t('loc.search'));
  districtSelect.setSearchPlaceholder(t('loc.search'));
  stateSelect.setEmptyLabel(t('loc.noResults'));
  districtSelect.setEmptyLabel(t('loc.noResults'));
  soilSelect.setPlaceholder(t('ph.select'));
  irrigationSelect.setPlaceholder(t('ph.select'));
  cropSelect.setPlaceholder(t('ph.select'));
  varietySelect.setPlaceholder(t('ph.select'));

  refreshCascades();
  paintStage();
  translateGeo();
}

/* ---------- S2 location cascades ---------- */

const stateSelect = createSelect({
  placeholder: t('loc.ph.state'),
  searchable: true,
  searchPlaceholder: t('loc.search'),
  labelledBy: 'lblState',
  onChange: onStateChange,
});

const districtSelect = createSelect({
  placeholder: t('loc.ph.district'),
  searchable: true,
  searchPlaceholder: t('loc.search'),
  labelledBy: 'lblDistrict',
  onChange: onDistrictChange,
});

const villageSelect = createSelect({
  placeholder: t('loc.ph.village'),
  labelledBy: 'lblVillage',
  onChange: onVillageChange,
});

function selectedState() {
  return TREE.find((s) => s.code === stateSelect.getValue()) ?? null;
}

function selectedDistrict() {
  return selectedState()?.districts.find((d) => d.code === districtSelect.getValue()) ?? null;
}

function villageOptions() {
  const district = selectedDistrict();
  const options = (district?.villages ?? []).map((v) => ({ value: v, label: v }));
  /* Full village lists (~650k entries) are a connected-mode LGD
     fetch; every district always offers free text instead. */
  options.push({ value: OTHER, label: t('loc.other') });
  return options;
}

function refreshCascades() {
  const draft = storage.getDraftProfile();

  stateSelect.setOptions(TREE.map((s) => ({ value: s.code, label: s.name })));
  if (draft?.stateCode) stateSelect.setValue(draft.stateCode);

  const state = selectedState();
  districtSelect.setOptions(
    state ? state.districts.map((d) => ({ value: d.code, label: d.name })) : [],
  );
  districtSelect.setDisabled(!state);
  if (state && draft?.districtCode) districtSelect.setValue(draft.districtCode);

  villageSelect.setOptions(villageOptions());
  villageSelect.setDisabled(!selectedDistrict());
  if (draft?.village) {
    villageSelect.setValue(draft.villageCustom ? OTHER : draft.village);
    villageFree.value = draft.villageCustom ? draft.village : '';
  }
  villageFreeField.hidden = villageSelect.getValue() !== OTHER;
}

function onStateChange(code) {
  const state = TREE.find((s) => s.code === code);
  storage.saveDraftProfile({
    stateCode: state?.code ?? null,
    stateName: state?.name ?? null,
    districtCode: null,
    districtName: null,
    village: null,
    villageCustom: false,
  });
  refreshCascades();
  hideError(locationError);
  translateGeo();
}

function onDistrictChange() {
  const district = selectedDistrict();
  storage.saveDraftProfile({
    districtCode: district?.code ?? null,
    districtName: district?.name ?? null,
    village: null,
    villageCustom: false,
  });
  refreshCascades();
  hideError(locationError);
  translateGeo();
}

function onVillageChange(value) {
  const custom = value === OTHER;
  villageFreeField.hidden = !custom;
  if (custom) {
    villageFree.focus();
    storage.saveDraftProfile({ village: villageFree.value.trim() || null, villageCustom: true });
  } else {
    villageFree.value = '';
    storage.saveDraftProfile({ village: value || null, villageCustom: false });
  }
  hideError(locationError);
}

function onFreeVillageInput() {
  storage.saveDraftProfile({ village: villageFree.value.trim() || null, villageCustom: true });
}

function showError(node, fieldKey) {
  node.textContent = t('err.required', { field: t(fieldKey) });
  node.hidden = false;
}

function showErrorText(node, key, params) {
  node.textContent = t(key, params);
  node.hidden = false;
}

function hideError(node) {
  node.hidden = true;
}

function onSubmitLocation(event) {
  event.preventDefault();

  const custom = villageSelect.getValue() === OTHER;
  const village = custom ? villageFree.value.trim() : villageSelect.getValue();

  let missing = null;
  if (!stateSelect.getValue()) missing = 'loc.state';
  else if (!districtSelect.getValue()) missing = 'loc.district';
  else if (!village) missing = 'loc.village';

  if (missing) {
    showError(locationError, missing);
    return;
  }

  const state = selectedState();
  const district = selectedDistrict();
  storage.saveDraftProfile({
    stateCode: state.code,
    stateName: state.name,
    districtCode: district.code,
    districtName: district.name,
    village,
    villageCustom: custom,
  });
  hideError(locationError);
  router.go('land');
}

/* ---------- S3 land ---------- */

const soilSelect = createSelect({
  placeholder: t('ph.select'),
  labelledBy: 'lblSoil',
  onChange: () => { saveLand(); hideError(landError); },
});

const irrigationSelect = createSelect({
  placeholder: t('ph.select'),
  labelledBy: 'lblIrrigation',
  onChange: () => { saveLand(); hideError(landError); },
});

function refreshLand() {
  const draft = storage.getDraftProfile();
  soilSelect.setOptions(LAND.soils.map((s) => ({ value: s.value, label: t(s.key) })));
  irrigationSelect.setOptions(LAND.irrigation.map((i) => ({ value: i.value, label: t(i.key) })));
  if (draft?.soilType) soilSelect.setValue(draft.soilType);
  if (draft?.irrigation) irrigationSelect.setValue(draft.irrigation);
  if (draft?.areaAcres) landArea.value = draft.areaAcres;
}

function saveLand() {
  const area = parseFloat(landArea.value);
  storage.saveDraftProfile({
    areaAcres: Number.isFinite(area) && area > 0 ? area : null,
    soilType: soilSelect.getValue() || null,
    irrigation: irrigationSelect.getValue() || null,
  });
}

function onSubmitLand(event) {
  event.preventDefault();
  saveLand();

  const area = parseFloat(landArea.value);
  if (!Number.isFinite(area) || area <= 0) {
    showErrorText(landError, 'err.area');
    return;
  }
  if (!soilSelect.getValue()) { showError(landError, 'land.soil'); return; }
  if (!irrigationSelect.getValue()) { showError(landError, 'land.irrigation'); return; }

  hideError(landError);
  router.go('crop');
}

/* ---------- S4 crop ---------- */

const cropSelect = createSelect({
  placeholder: t('ph.select'),
  labelledBy: 'lblCrop',
  onChange: onCropChange,
});

const varietySelect = createSelect({
  placeholder: t('ph.select'),
  labelledBy: 'lblVariety',
  onChange: onVarietyChange,
});

function selectedCrop() {
  return CROPS.find((c) => c.value === cropSelect.getValue()) ?? null;
}

function refreshCrop() {
  const draft = storage.getDraftProfile();

  cropSelect.setOptions(CROPS.map((c) => ({ value: c.value, label: t(c.key) })));
  if (draft?.crop) cropSelect.setValue(draft.crop);

  const crop = selectedCrop();
  const options = crop
    ? crop.varieties.map((v) => ({ value: v, label: v }))
    : [];
  options.push({ value: OTHER, label: t('crop.other') });
  varietySelect.setOptions(options);
  varietySelect.setDisabled(!crop);
  if (draft?.variety) {
    varietySelect.setValue(draft.varietyCustom ? OTHER : draft.variety);
    varietyFree.value = draft.varietyCustom ? draft.variety : '';
  }
  varietyFreeField.hidden = varietySelect.getValue() !== OTHER;
  if (draft?.sownOn) sownDate.value = draft.sownOn;
}

function onCropChange() {
  storage.saveDraftProfile({
    crop: cropSelect.getValue() || null,
    variety: null,
    varietyCustom: false,
  });
  refreshCrop();
  hideError(cropError);
  paintStage();
}

function onVarietyChange(value) {
  const custom = value === OTHER;
  varietyFreeField.hidden = !custom;
  if (custom) {
    varietyFree.focus();
    storage.saveDraftProfile({ variety: varietyFree.value.trim() || null, varietyCustom: true });
  } else {
    varietyFree.value = '';
    storage.saveDraftProfile({ variety: value || null, varietyCustom: false });
  }
  hideError(cropError);
}

function onFreeVarietyInput() {
  storage.saveDraftProfile({ variety: varietyFree.value.trim() || null, varietyCustom: true });
}

function onSownChange() {
  saveCropStage();
  hideError(cropError);
  paintStage();
}

function saveCropStage() {
  const crop = cropSelect.getValue() || null;
  const sown = sownDate.value || null;
  let stage = null;
  let expectedHarvest = null;
  let stageDays = null;

  if (crop && sown) {
    const derived = calculateStage(sown, crop);
    /* future dates are rejected on submit; here we just skip deriving */
    if (new Date(`${sown}T00:00:00`) <= new Date()) {
      stage = derived.stage;
      expectedHarvest = derived.expectedHarvest;
      stageDays = derived.daysSinceSowing;
    }
  }

  const custom = varietySelect.getValue() === OTHER;
  storage.saveDraftProfile({
    crop,
    variety: custom ? (varietyFree.value.trim() || null) : (varietySelect.getValue() || null),
    varietyCustom: custom,
    sownOn: sown,
    growthStage: stage,
    expectedHarvest,
    stageDays,
  });
}

function paintStage() {
  const draft = storage.getDraftProfile();
  if (!draft?.crop || !draft?.sownOn || !draft?.growthStage) {
    stageChip.hidden = true;
    return;
  }
  stageChip.textContent = t('crop.stageNow', {
    crop: t(`crop.${draft.crop}`),
    stage: t(`stage.${draft.growthStage}`),
  });
  stageChip.hidden = false;
}

function onSubmitCrop(event) {
  event.preventDefault();
  saveCropStage();

  const draft = storage.getDraftProfile();
  const todayISO = new Date().toISOString().slice(0, 10);

  if (!draft.crop) { showError(cropError, 'crop.crop'); return; }
  if (!draft.variety) { showError(cropError, 'crop.variety'); return; }
  if (!draft.sownOn) { showError(cropError, 'crop.sown'); return; }
  if (draft.sownOn > todayISO) { showErrorText(cropError, 'err.sown'); return; }

  hideError(cropError);
  router.go('review');
}

/* ---------- S5 review ---------- */

function buildReview() {
  const d = storage.getDraftProfile();
  const rows = $('reviewRows');
  rows.replaceChildren();
  if (!locationComplete(d) || !landComplete(d) || !cropComplete(d)) return;

  const locale = getLanguageByCode(getLang())?.locale ?? 'en-IN';
  const rowsDef = [
    {
      label: t('s5.locLabel'),
      value: `${d.village} · ${d.districtName} · ${d.stateName}`,
      go: 'location',
    },
    {
      label: t('s5.landLabel'),
      value: [
        t('land.acres', { acres: d.areaAcres }),
        t(`soil.${d.soilType}`),
        t(`irrig.${d.irrigation}`),
      ].join(' · '),
      go: 'land',
    },
    {
      label: t('s5.cropLabel'),
      value: [
        t(`crop.${d.crop}`),
        d.variety,
        new Date(`${d.sownOn}T00:00:00`).toLocaleDateString(locale),
        t(`stage.${d.growthStage}`),
      ].join(' · '),
      go: 'crop',
    },
  ];

  rowsDef.forEach((row) => {
    const el = document.createElement('div');
    el.className = 'review-row';

    const meta = document.createElement('div');
    meta.className = 'review-row__meta';
    const label = document.createElement('div');
    label.className = 'review-row__label';
    label.textContent = row.label;
    const value = document.createElement('div');
    value.className = 'review-row__value';
    value.textContent = row.value;
    meta.append(label, value);

    const change = document.createElement('button');
    change.type = 'button';
    change.className = 'btn btn--outline';
    change.textContent = t('s5.change');
    change.addEventListener('click', () => router.go(row.go));

    el.append(meta, change);
    rows.append(el);
  });
}

function onSaveReview() {
  storage.saveDraftProfile({ completed: true });
  router.go('intent');   // S5 → S6-F1 account intent (never straight to the phone form)
}

/* ---------- S6-F1 account intent ---------- */

function buildIntentSummary() {
  const d = storage.getDraftProfile();
  const rows = $('intentSummary');
  rows.replaceChildren();
  if (!locationComplete(d) || !landComplete(d) || !cropComplete(d)) return;

  const locale = getLanguageByCode(getLang())?.locale ?? 'en-IN';
  const rowsDef = [
    {
      label: t('s5.locLabel'),
      value: `${d.village} · ${d.districtName}`,
    },
    {
      label: t('s5.landLabel'),
      value: `${t('land.acres', { acres: d.areaAcres })} · ${t(`irrig.${d.irrigation}`)}`,
    },
    {
      label: t('s5.cropLabel'),
      value: `${t(`crop.${d.crop}`)} · ${d.variety} · ${
        new Date(`${d.sownOn}T00:00:00`).toLocaleDateString(locale)}`,
    },
  ];

  rowsDef.forEach((row) => {
    const el = document.createElement('div');
    el.className = 'review-row';
    const meta = document.createElement('div');
    meta.className = 'review-row__meta';
    const label = document.createElement('div');
    label.className = 'review-row__label';
    label.textContent = row.label;
    const value = document.createElement('div');
    value.className = 'review-row__value';
    value.textContent = row.value;
    meta.append(label, value);
    el.append(meta);
    rows.append(el);
  });
}

function renderIntent() {
  buildIntentSummary();

  $('intentBenefits').innerHTML = ['intent.b1', 'intent.b2', 'intent.b3']
    .map((key) => `<li>${icons.check(16)}<span>${escapeHtml(t(key))}</span></li>`)
    .join('');

  const accepted = storage.getDraftProfile()?.consent?.accepted === true
    && storage.getDraftProfile()?.consent?.version === 1;
  $('consentCheck').checked = accepted;
  $('intentContinue').disabled = !accepted;
}

function onConsentChange() {
  const accepted = $('consentCheck').checked;
  /* Versioned local/demo consent only — nothing is sent to the API yet. */
  storage.saveDraftProfile({
    consent: accepted
      ? { version: 1, accepted: true, acceptedAt: new Date().toISOString() }
      : { version: 1, accepted: false },
  });
  $('intentContinue').disabled = !accepted;
}

/* ---------- S6 auth gate ---------- */

const AUTH_ERR_KEYS = new Set([
  'INVALID_OTP', 'OTP_EXPIRED', 'TOO_MANY_ATTEMPTS',
  'RATE_LIMITED', 'INVALID_CREDENTIALS', 'NETWORK', 'VALIDATION',
  'TOKEN_EXPIRED', 'TOKEN_INVALID', 'NO_TOKEN', 'NO_ACCOUNT',
]);

function authErrorKey(code) {
  return AUTH_ERR_KEYS.has(code) ? `err.auth.${code}` : 'err.auth.NETWORK';
}

function setAuthTab(which) {
  const farmer = which === 'farmer';
  tabFarmer.setAttribute('aria-selected', String(farmer));
  tabOfficer.setAttribute('aria-selected', String(!farmer));
  panelFarmer.hidden = !farmer;
  panelOfficer.hidden = farmer;
}

function paintAuthState() {
  const session = storage.getSession();
  const signedIn = Boolean(session?.role && session.role !== 'guest');
  const guest = session?.role === 'guest';



  authTabs.hidden = signedIn || guest;
  panelFarmer.hidden = !farmerTabActive() || signedIn || guest;
  panelOfficer.hidden = farmerTabActive() || signedIn || guest;
  guestBtn.hidden = signedIn || guest;
  signoutBtn.hidden = !(signedIn || guest);
  authSuccessActions.hidden = !(signedIn || guest);

  if (signedIn) {
    /* never the raw number — masked until a name exists (ACCOUNT §3.5) */
    const who = session.role === 'officer'
      ? (session.name ?? session.id)
      : (session.name ?? session.masked ?? `••• ${(session.phone ?? '').slice(-3)}`);
    authSuccess.hidden = false;
    authSuccess.classList.remove('form-error');
    authSuccess.textContent = t('s6.signedInAs', { who });
  } else if (guest) {
    authSuccess.hidden = false;
    authSuccess.textContent = t('s6.successGuest');
  } else {
    authSuccess.hidden = true;
  }
}

function farmerTabActive() {
  return tabFarmer.getAttribute('aria-selected') === 'true';
}

function showAuthSuccess(key, params) {
  authSuccess.textContent = t(key, params);
  authSuccess.hidden = false;
  authSuccessActions.hidden = false;
}

function startResendCountdown() {
  let seconds = 30;
  resendBtn.hidden = false;
  resendBtn.disabled = true;
  clearInterval(resendTimer);
  resendTimer = setInterval(() => {
    seconds -= 1;
    if (seconds <= 0) {
      clearInterval(resendTimer);
      resendBtn.disabled = false;
      resendBtn.textContent = t('s6.sendCode');
    } else {
      resendBtn.textContent = t('s6.resendIn', { seconds });
    }
  }, 1000);
}

async function onFarmerSubmit(event) {
  event.preventDefault();
  hideError(farmerError);

  const phone = phoneInput.value.replace(/\D/g, '');
  if (!/^[6-9]\d{9}$/.test(phone)) {
    showErrorText(farmerError, 'err.auth.phone');
    return;
  }

  const auth = await getAuth();

  if (!otpSent) {
    sendOtpBtn.disabled = true;
    try {
      const res = await auth.requestOtp(phone);
      otpSent = true;
      otpField.hidden = false;
      otpInput.focus();
      sendOtpBtn.textContent = t('s6.verify');
      startResendCountdown();
      if (res?.dev_code) {
        demoOtpNote.textContent = t('s6.demoOtp', { code: res.dev_code });
        demoOtpNote.hidden = false;
      }
    } catch (e) {
      showErrorText(farmerError, authErrorKey(e.code));
    } finally {
      sendOtpBtn.disabled = false;
    }
    return;
  }

  const otp = otpInput.value.trim();
  if (!/^\d{6}$/.test(otp)) {
    showErrorText(farmerError, 'err.auth.otpShape');
    return;
  }

  sendOtpBtn.disabled = true;
  try {
    const res = await auth.verifyOtp(phone, otp);
    storage.saveSession({
      token: res.token, role: 'farmer', phone,
      masked: res.farmer.masked, name: null,
    });
    clearInterval(resendTimer);
    /* ACCOUNT §3.8–3.9: a new account collects its display name;
       an existing phone recovers the account — never a duplicate. */
    if (res.farmer.new_account || !res.farmer.has_profile) {
      router.go('profile');
    } else {
      await recoverAccount();
      router.go('home');
    }
  } catch (e) {
    showErrorText(farmerError, authErrorKey(e.code));
    if (e.code === 'OTP_EXPIRED' || e.code === 'TOO_MANY_ATTEMPTS') {
      otpSent = false;
      otpField.hidden = true;
      demoOtpNote.hidden = true;
      sendOtpBtn.textContent = t('s6.sendCode');
    }
  } finally {
    sendOtpBtn.disabled = false;
  }
}

async function onResend() {
  if (resendBtn.disabled) return;
  hideError(farmerError);
  const phone = phoneInput.value.replace(/\D/g, '');
  const auth = await getAuth();
  resendBtn.disabled = true;
  try {
    const res = await auth.requestOtp(phone);
    if (res?.dev_code) {
      demoOtpNote.textContent = t('s6.demoOtp', { code: res.dev_code });
      demoOtpNote.hidden = false;
    }
    startResendCountdown();
  } catch (e) {
    showErrorText(farmerError, authErrorKey(e.code));
    resendBtn.disabled = false;
  }
}

async function onOfficerSubmit(event) {
  event.preventDefault();
  hideError(officerError);

  const staffId = staffInput.value.trim();
  const password = passwordInput.value;
  if (!staffId || !password) {
    showErrorText(officerError, 'err.auth.INVALID_CREDENTIALS');
    return;
  }

  const auth = await getAuth();
  $('officerLoginBtn').disabled = true;
  try {
    const res = await auth.loginOfficer(staffId, password);
    storage.saveSession({
      token: res.token, role: 'officer',
      id: res.officer.staff_id, name: res.officer.name,
    });
    showAuthSuccess('s6.successOfficer', { name: res.officer.name });
    paintAuthState();
  } catch (e) {
    showErrorText(officerError, authErrorKey(e.code));
  } finally {
    $('officerLoginBtn').disabled = false;
  }
}

async function onGuest() {
  const auth = await getAuth();
  storage.saveSession({ role: 'guest' });
  showAuthSuccess('s6.successGuest');
  paintAuthState();
}

async function onSignout() {
  const session = storage.getSession();
  const auth = await getAuth();
  if (session?.token) await auth.logout(session.token);
  storage.clearSession();
  meCache = null;
  otpSent = false;
  otpField.hidden = true;
  demoOtpNote.hidden = true;
  sendOtpBtn.textContent = t('s6.sendCode');
  authSuccess.hidden = true;
  authSuccessActions.hidden = true;
  paintAuthState();
}

/* ---------- S6.5 profile completion (ACCOUNT CONTRACT §3.8) ---------- */

function profilePayload(displayName, draft) {
  return {
    display_name: displayName,
    language_code: getLang(),
    state_name: draft.stateName ?? null,
    district_name: draft.districtName ?? null,
    village_name: draft.village ?? null,
    area_acres: draft.areaAcres ?? null,
    soil_type: draft.soilType ?? null,
    irrigation_type: draft.irrigation ?? null,
    crop: draft.crop ?? null,
    variety: draft.variety ?? null,
    sown_on: draft.sownOn ?? null,
    growth_stage: draft.growthStage ?? null,
    expected_harvest: draft.expectedHarvest ?? null,
  };
}

async function recoverAccount() {
  /* Returning farmer: pull the saved profile; if the farm was never
     attached (e.g. signed out mid-setup), attach the local draft. */
  const auth = await getAuth();
  const session = storage.getSession();
  if (!session?.token) return;
  try {
    const me = await auth.getMe(session.token);
    meCache = me;
    if (me.display_name) {
      storage.saveSession({ ...session, name: me.display_name });
    }
    if (!me.farm) {
      const draft = storage.getDraftProfile();
      if (draft && locationComplete(draft) && landComplete(draft) && cropComplete(draft)) {
        meCache = await auth.saveProfile(
          profilePayload(me.display_name ?? '', draft), session.token);
        storage.saveDraftProfile({ attached: true });
      }
    }
  } catch { /* offline/demo — the local draft still drives home */ }
}

async function onSubmitProfile(event) {
  event.preventDefault();
  const errNode = $('profileError');
  hideError(errNode);

  const name = $('displayNameInput').value.trim();
  if (!name) { showErrorText(errNode, 'err.auth.name'); return; }

  const session = storage.getSession();
  if (!session?.token) { router.go('auth'); return; }

  $('profileSaveBtn').disabled = true;
  try {
    const auth = await getAuth();
    const draft = storage.getDraftProfile() ?? {};
    meCache = await auth.saveProfile(profilePayload(name, draft), session.token);
    storage.saveSession({ ...session, name });
    storage.saveDraftProfile({ attached: true });
    router.go('home');
  } catch (e) {
    /* dead session → sign back in; anything else shows inline */
    if (['TOKEN_EXPIRED', 'TOKEN_INVALID', 'NO_TOKEN'].includes(e.code)) {
      storage.clearSession();
      meCache = null;
      router.go('auth');
      return;
    }
    showErrorText(errNode, authErrorKey(e.code));
  } finally {
    $('profileSaveBtn').disabled = false;
  }
}

/* ---------- S7 farmer home ---------- */

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function localeDay(dayIndex) {
  const locale = getLanguageByCode(getLang())?.locale ?? 'en-IN';
  /* 2026-08-03 was a Monday — index 0 = Monday, matching simWeather. */
  return new Date(2026, 7, 3 + dayIndex)
    .toLocaleDateString(locale, { weekday: 'short' });
}

function formatCompassDirection(deg) {
  if (typeof deg !== 'number' || isNaN(deg)) return 'Calm';
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  const idx = Math.round(deg / 22.5) % 16;
  return directions[idx];
}

function renderCropPhenology(draft) {
  const mount = $('cropPhenologyMount');
  if (!mount) return null;

  const crop = draft?.crop || 'wheat';
  const sown = draft?.sownOn || draft?.sownOnISO || new Date().toISOString().slice(0, 10);
  const pheno = calculateCropPhenology(crop, sown);

  const STAGES_META = [
    { key: 'sowing', name: 'Sowing' },
    { key: 'vegetative', name: 'Vegetative' },
    { key: 'flowering', name: 'Flowering' },
    { key: 'grain_fill', name: 'Grain Fill' },
    { key: 'maturity', name: 'Maturity' },
    { key: 'harvest_ready', name: 'Harvest' }
  ];

  const daysRemaining = Math.max(0, pheno.totalDuration - pheno.daysElapsed);

  mount.innerHTML = `
    <div class="phenology-card">
      <div class="phenology-header">
        <div class="phenology-title-wrap">
          <span class="phenology-eyebrow">
            ${icons.sprout(16)} Growth Tracker
          </span>
          <h2 class="phenology-crop-name">${escapeHtml(pheno.cropName)} &mdash; ${escapeHtml(pheno.stageName)}</h2>
          <p class="phenology-sub">Day ${pheno.daysElapsed} of ${pheno.totalDuration} &middot; Expected Harvest: ${pheno.expectedHarvestDate}</p>
        </div>
        <span class="phenology-badge">${pheno.progressPct}% Season Progress</span>
      </div>

      <div class="phenology-bar-container">
        <div class="phenology-bar-track">
          <div class="phenology-bar-fill" style="width: ${pheno.progressPct}%;"></div>
        </div>
        <div class="phenology-stepper">
          ${STAGES_META.map((s, idx) => {
            const isCompleted = idx < pheno.stageIndex;
            const isActive = idx === pheno.stageIndex;
            const cls = isActive ? 'phenology-step--active' : isCompleted ? 'phenology-step--completed' : '';
            return `
              <div class="phenology-step ${cls}">
                <div class="phenology-step__dot"></div>
                <span class="phenology-step__name">${escapeHtml(s.name)}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="phenology-meta-grid">
        <div class="phenology-meta-item">
          <span class="phenology-meta-label">Crop Factor (Kc)</span>
          <span class="phenology-meta-val">${pheno.kc.toFixed(2)}</span>
        </div>
        <div class="phenology-meta-item">
          <span class="phenology-meta-label">Thermal Units (GDD)</span>
          <span class="phenology-meta-val">${pheno.gddAccrued} &deg;C-days</span>
        </div>
        <div class="phenology-meta-item">
          <span class="phenology-meta-label">Stage Duration</span>
          <span class="phenology-meta-val">${pheno.daysInStage} / ${pheno.stageDuration} days</span>
        </div>
        <div class="phenology-meta-item">
          <span class="phenology-meta-label">Days to Harvest</span>
          <span class="phenology-meta-val">${daysRemaining} days</span>
        </div>
      </div>
    </div>
  `;

  return pheno;
}

function renderAgronomyTelemetry(weather, draft, pheno) {
  const mount = $('agronomyTelemetryMount');
  if (!mount) return;

  const current = weather.current || {};
  const temp = typeof current.temperature_2m === 'number' ? current.temperature_2m
    : (typeof current.temperature === 'number' ? current.temperature : 28.0);
  const feelsLike = typeof current.apparent_temperature === 'number' ? current.apparent_temperature
    : (typeof current.apparentTemperature === 'number' ? current.apparentTemperature : temp);
  const rh = typeof current.relative_humidity_2m === 'number' ? current.relative_humidity_2m
    : (typeof current.humidity === 'number' ? current.humidity : 60);
  const windSpd = typeof current.wind_speed_10m === 'number' ? current.wind_speed_10m
    : (typeof current.windSpeed === 'number' ? current.windSpeed : 8.0);
  const windDir = typeof current.wind_direction_10m === 'number' ? current.wind_direction_10m
    : (typeof current.windDirection === 'number' ? current.windDirection : 0);
  const uv = typeof current.uv_index === 'number' ? current.uv_index
    : (typeof current.uvIndex === 'number' ? current.uvIndex : 5.0);
  const pressure = typeof current.surface_pressure === 'number' ? current.surface_pressure
    : (typeof current.surfacePressure === 'number' ? current.surfacePressure : 1012.0);
  const cloud = typeof current.cloud_cover === 'number' ? current.cloud_cover
    : (typeof current.cloudCover === 'number' ? current.cloudCover : 20);

  // Soil Hydrology
  let vwc = 28.0;
  if (typeof weather.soil?.currentMoistureVwc === 'number') {
    vwc = weather.soil.currentMoistureVwc;
  } else if (typeof weather.soilMoisture === 'string' || typeof weather.soilMoisture === 'number') {
    const parsed = parseFloat(weather.soilMoisture);
    if (!isNaN(parsed)) {
      vwc = parsed <= 1.0 ? parsed * 100 : parsed;
    }
  }
  const hydration = classifySoilHydration(vwc);

  // Reference ET0 and Water Demand
  const et0 = weather.daily?.et0 ?? weather.dailyEt0?.[0] ?? 4.2;
  const stageIdx = pheno?.stageIndex ?? 1;
  const area = parseFloat(draft?.areaAcres) || 1.0;
  const waterDemand = calculateCropWaterDemand(et0, draft?.crop || 'wheat', stageIdx, area);

  const uvLevel = uv < 3 ? 'Low' : uv < 6 ? 'Moderate' : uv < 8 ? 'High' : 'Very High';

  mount.innerHTML = `
    <div class="telemetry-header">
      <span class="telemetry-eyebrow">
        ${icons.gauge(16)} Live Weather
      </span>
    </div>
    <div class="telemetry-grid">
      <!-- 1. Temperature -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Temperature</span>
          <span class="telemetry-card__icon">${icons.thermometer(18)}</span>
        </div>
        <div class="telemetry-card__val">${temp.toFixed(1)} &deg;C</div>
        <div class="telemetry-card__sub">Max ${weather.tempMaxC ?? 32} &deg;C &middot; Min ${weather.daily?.tempMin ?? 22} &deg;C</div>
      </div>

      <!-- 2. Apparent Temperature -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Feels Like</span>
          <span class="telemetry-card__icon">${icons.thermometer(18)}</span>
        </div>
        <div class="telemetry-card__val">${feelsLike.toFixed(1)} &deg;C</div>
        <div class="telemetry-card__sub">Thermal Comfort Index</div>
      </div>

      <!-- 3. Soil Moisture (5-Tier Hydration) -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Soil Moisture</span>
          <span class="telemetry-card__icon">${icons.droplet(18)}</span>
        </div>
        <div class="telemetry-card__val">${vwc.toFixed(1)}% VWC</div>
        <div class="telemetry-card__sub">
          <span class="tier-badge tier-badge--${hydration.tier}">${hydration.tier.toUpperCase()}</span>
        </div>
      </div>

      <!-- 4. ET0 & Crop Water Demand -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Evapotranspiration</span>
          <span class="telemetry-card__icon">${icons.droplet(18)}</span>
        </div>
        <div class="telemetry-card__val">${et0.toFixed(1)} mm/day</div>
        <div class="telemetry-card__sub">${Math.round(waterDemand.litersPerAcre).toLocaleString('en-IN')} L/Acre Demand</div>
      </div>

      <!-- 5. Humidity -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Humidity</span>
          <span class="telemetry-card__icon">${icons.droplet(18)}</span>
        </div>
        <div class="telemetry-card__val">${Math.round(rh)}%</div>
        <div class="telemetry-card__sub">Atmospheric Moisture</div>
      </div>

      <!-- 6. Wind Speed & Direction -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Wind Speed</span>
          <span class="telemetry-card__icon">${icons.wind(18)}</span>
        </div>
        <div class="telemetry-card__val">${windSpd.toFixed(1)} km/h</div>
        <div class="telemetry-card__sub">${formatCompassDirection(windDir)} (${Math.round(windDir)}&deg;)</div>
      </div>

      <!-- 7. UV Index -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">UV Index</span>
          <span class="telemetry-card__icon">${icons.sun(18)}</span>
        </div>
        <div class="telemetry-card__val">${uv.toFixed(1)}</div>
        <div class="telemetry-card__sub">${uvLevel} Solar Load</div>
      </div>

      <!-- 8. Surface Pressure -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Surface Pressure</span>
          <span class="telemetry-card__icon">${icons.gauge(18)}</span>
        </div>
        <div class="telemetry-card__val">${Math.round(pressure)} hPa</div>
        <div class="telemetry-card__sub">Barometric Stability</div>
      </div>

      <!-- 9. Cloud Cover -->
      <div class="telemetry-card">
        <div class="telemetry-card__head">
          <span class="telemetry-card__label">Cloud Cover</span>
          <span class="telemetry-card__icon">${icons.cloud(18)}</span>
        </div>
        <div class="telemetry-card__val">${Math.round(cloud)}%</div>
        <div class="telemetry-card__sub">Solar Radiation Flux</div>
      </div>
    </div>
  `;
}

function renderSprayWindow(weather) {
  const mount = $('sprayWindowMount');
  if (!mount) return;

  const hourlyOrDaily = weather.forecast7d || weather.forecast || [];
  const spray = evaluateSprayWindow(weather.current, hourlyOrDaily);

  const statusLabel = spray.status === 'optimal' ? 'Optimal Window'
    : spray.status === 'caution' ? 'Caution Window' : 'Unsafe to Spray';

  const defaultSlots = spray.status === 'optimal'
    ? [{ start: '06:00 AM', end: '09:30 AM', period: 'Morning Calm' }, { start: '05:00 PM', end: '07:00 PM', period: 'Dusk' }]
    : spray.status === 'caution'
      ? [{ start: '06:00 AM', end: '08:00 AM', period: 'Early Window Only' }]
      : [];

  const slots = (spray.recommendedSlots && spray.recommendedSlots.length) ? spray.recommendedSlots : defaultSlots;

  mount.innerHTML = `
    <div class="spray-card">
      <div class="spray-header">
        <div class="phenology-title-wrap">
          <span class="phenology-eyebrow">
            ${icons.sprayer(16)} Safe to Spray
          </span>
          <h2 class="phenology-crop-name">Spray Conditions</h2>
        </div>
        <span class="spray-status-badge spray-status-badge--${spray.status}">
          ${icons.sprayStatusIcon(spray.status, 14)} ${statusLabel}
        </span>
      </div>

      <div class="spray-reason-box">
        <span style="flex-shrink:0; margin-top:2px;">${icons.info(16)}</span>
        <span>${escapeHtml(spray.reasonText || spray.reason)}</span>
      </div>

      <div class="spray-metrics-grid">
        <div class="spray-metric">
          <span class="spray-metric__label">Delta T (&Delta;T)</span>
          <span class="spray-metric__val">${spray.deltaT ?? '--'} &deg;C</span>
        </div>
        <div class="spray-metric">
          <span class="spray-metric__label">Wind Speed</span>
          <span class="spray-metric__val">${spray.params?.windSpeedKmH ?? '--'} km/h</span>
        </div>
        <div class="spray-metric">
          <span class="spray-metric__label">Rain Risk</span>
          <span class="spray-metric__val">${spray.params?.tomorrowRainMm ? spray.params.tomorrowRainMm + ' mm forecast' : '0.0 mm'}</span>
        </div>
        <div class="spray-metric">
          <span class="spray-metric__label">Temperature &amp; RH</span>
          <span class="spray-metric__val">${spray.params?.tempC ?? '--'} &deg;C &middot; ${spray.params?.rhPct ?? '--'}%</span>
        </div>
      </div>

      <div class="spray-slots-wrap">
        <span class="spray-slots-label">Recommended Application Slots</span>
        <div class="spray-slots-list">
          ${slots.length ? slots.map(s => `
            <span class="spray-slot-pill">
              ${icons.clock(13)} ${s.start} - ${s.end} (${s.period})
            </span>
          `).join('') : `
            <span class="spray-slot-pill" style="border-color:hsl(var(--danger)/.3); color:hsl(var(--danger));">
              ${icons.xCircle(13)} Application Suspended Due to Constraints
            </span>
          `}
        </div>
      </div>
    </div>
  `;
}

function renderTomorrowActionPlan(draft, weather, pheno) {
  const mount = $('tomorrowActionPlanMount');
  if (!mount) return;

  const tomorrowWeather = (weather.forecast7d && weather.forecast7d[1])
    ? weather.forecast7d[1]
    : ((weather.forecast && weather.forecast[1]) ? weather.forecast[1] : {});

  const plan = buildTomorrowActionPlan(draft, tomorrowWeather, pheno, weather.soil);

  mount.innerHTML = `
    <div class="action-plan-card">
      <div class="phenology-header">
        <div class="phenology-title-wrap">
          <span class="phenology-eyebrow">
            ${icons.activity(16)} Tomorrow's Action Plan
          </span>
          <h2 class="phenology-crop-name">Daily Field Operations Directive</h2>
        </div>
      </div>

      <div class="action-plan-synopsis-banner">
        <span class="action-plan-synopsis-title">Meteorological Synopsis</span>
        <span class="action-plan-synopsis-text">${escapeHtml(plan.synopsis)}</span>
      </div>

      <div class="action-plan-grid">
        <div class="action-plan-directive-box">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="phenology-meta-label">Irrigation Directive</span>
            <span class="action-directive-badge action-directive-badge--${plan.irrigationDirective.action.toLowerCase()}">
              ${plan.irrigationDirective.action}
            </span>
          </div>
          <div class="action-directive-quant">
            ${Math.round(plan.irrigationDirective.quantityLitersPerAcre).toLocaleString('en-IN')} Liters / Acre
          </div>
          <div class="action-directive-rationale">
            ${escapeHtml(plan.irrigationDirective.rationale)}
          </div>
        </div>

        <div class="action-checklist-wrap">
          <span class="action-checklist-title">Operational Checklist</span>
          <ul class="action-checklist">
            ${plan.checklist.map(item => `
              <li class="checklist-item">
                <span class="checklist-item__icon">${icons.check(14)}</span>
                <span>${escapeHtml(item)}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `;
}

async function renderHome() {
  const draft = storage.getDraftProfile() ?? {};
  const session = storage.getSession();

  /* server profile (S6.5) wins; local draft fills the gaps */
  const eff = {
    ...draft,
    village: meCache?.farm?.village_name ?? meCache?.profile?.village_name ?? draft.village,
    districtName: meCache?.profile?.district_name ?? draft.districtName,
    stateName: meCache?.profile?.state_name ?? draft.stateName,
    crop: meCache?.crop_cycle?.crop ?? draft.crop,
    growthStage: meCache?.crop_cycle?.growth_stage ?? draft.growthStage,
  };
  const repo = await getAuth();
  let weather, advisories;
  try {
    ({ weather, advisories } = await repo.getFarmerHome(eff));
  } catch (e) {
    console.warn('[home] getFarmerHome failed, using fallback:', e);
    weather = { forecast7d: [], tempMaxC: 0, humidityPct: 0, devPct: 0, current: {}, dailyEt0: [] };
    advisories = [{ severity: 'info', titleKey: 'adv.allClear.title', bodyKey: 'adv.allClear.body', whyKey: 'adv.allClear.why', params: {} }];
  }
  homeAdvisories = advisories;

  /* ACCOUNT §3.5: name when known, masked phone otherwise — never the raw number */
  const masked = session?.masked ?? `••• ${(session?.phone ?? '').slice(-3)}`;
  const name = session?.role === 'officer' ? (session.name ?? session.id)
    : session?.role === 'farmer' ? (session.name ?? masked)
      : 'Guest';
  const isMasked = name.includes('•');
  $('homeAvatar').textContent = isMasked
    ? (name.match(/\d{3}$/)?.[0] ?? '•••')
    : (name || '?').trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  $('homeTitle').textContent = t('home.hello', { name: name || '' });
  $('homeFarmLine').textContent = [eff.village, eff.districtName, eff.stateName]
    .filter(Boolean).join(' · ');

  const guest = session?.role === 'guest';

  $('guestNote').hidden = !guest;
  if (guest) $('guestNote').textContent = t('home.guestNote');

  /* --- 1. TODAY'S ADVISORY --- (rendered below via advisoryList) */

  /* --- 2. TOMORROW'S ADVISORY & ACTION PLAN --- */
  const pheno = renderCropPhenology(eff);
  renderTomorrowActionPlan(eff, weather, pheno);

  /* --- 3. LIVE WEATHER DETAILS --- */
  renderAgronomyTelemetry(weather, eff, pheno);

  /* --- 4. GROWTH TRACKER --- (pheno already computed above) */

  /* --- 5. SAFE TO SPRAY --- */
  renderSprayWindow(weather);

  /* advisory cards — severity = rail + icon + word, never colour alone */
  $('advisoryList').innerHTML = advisories.map((a, i) => {
    const iconFn = SEVERITY_ICON[a.severity] || icons.info;
    return `
    <article class="advisory" data-severity="${a.severity}" data-index="${i}" role="button" tabindex="0">
      <span class="advisory__rail" aria-hidden="true"></span>
      <div class="advisory__body">
        <span class="advisory__tag">
          ${iconFn(13)}
          ${escapeHtml(t(`severity.${a.severity}`))}
        </span>
        <h3 class="advisory__title">${escapeHtml(t(a.titleKey, renderParams(a.params)))}</h3>
        <p class="advisory__text">${escapeHtml(t(a.bodyKey, renderParams(a.params)))}</p>
        <p class="advisory__why">${escapeHtml(t(a.whyKey, renderParams(a.params)))}</p>
      </div>
    </article>`;
  }).join('');

  /* make each advisory card tappable → detail view */
  $('advisoryList').querySelectorAll('.advisory').forEach((card) => {
    card.addEventListener('click', () => {
      selectedAdvisoryIndex = Number(card.dataset.index);
      router.go('advisory');
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectedAdvisoryIndex = Number(card.dataset.index);
        router.go('advisory');
      }
    });
  });

  paintListenButton(false);
  $('ackBtn').innerHTML = acked
    ? `${icons.check(18)}<span>${escapeHtml(t('home.acked'))}</span>`
    : `${icons.check(18)}<span>${escapeHtml(t('home.ack'))}</span>`;
  $('ackBtn').disabled = acked;

  /* weather strip */
  $('weatherTitle').textContent = t('weather.next7');
  $('weatherStrip').innerHTML = weather.forecast7d.map((day) => `
    <div class="wtile">
      <div class="wtile__day">${escapeHtml(localeDay(day.dayIndex))}</div>
      <div class="wtile__icon" style="color:hsl(var(--sky))">${icons.weatherIcon(day.condition, 26)}</div>
      <div class="wtile__rain">${day.rainMm} mm</div>
      <div class="wtile__temp">${day.tmax}° / ${day.tmin}°</div>
    </div>`).join('');

  const dev = $('weatherDeviation');
  const key = weather.devPct <= -10 ? 'weather.deficit'
    : weather.devPct >= 10 ? 'weather.surplus' : 'weather.normal';
  dev.className = 'deviation' + (key === 'weather.normal' ? ' deviation--ok' : '');
  dev.innerHTML = `${key === 'weather.normal' ? icons.info(17) : icons.alert(17)}
    <span>${escapeHtml(t(key, {
      district: draft.districtName ?? '',
      pct: Math.abs(weather.devPct),
    }))}</span>`;
}

/* engines emit dayIndex; the controller renders locale day names */
function renderParams(params) {
  if (!params || params.dayIndex === undefined) return params;
  return { ...params, day: localeDay(params.dayIndex) };
}

function paintListenButton(speaking) {
  const btn = $('listenBtn');
  btn.dataset.speaking = String(speaking);
  btn.innerHTML = speaking
    ? `${icons.stopIcon(18)}<span>${escapeHtml(t('home.stop'))}</span>`
    : `${icons.speaker(18)}<span>${escapeHtml(t('home.listen'))}</span>`;
}

function onListen() {
  if (voice.isSpeaking()) {
    voice.stop();
    paintListenButton(false);
    return;
  }

  const locale = getLanguageByCode(getLang())?.locale ?? 'en-IN';
  const parts = homeAdvisories.flatMap((a) => {
    const p = renderParams(a.params);
    return [t(a.titleKey, p), t(a.bodyKey, p)];
  });

  const result = voice.speak(parts, locale, {
    onStart: () => paintListenButton(true),
    onEnd: () => paintListenButton(false),
  });

  const note = $('homeVoiceNote');
  if (!result.ok) {
    note.textContent = t('home.voiceUnavailable');
  } else {
    note.textContent = '';
  }
}

function onAcknowledge() {
  acked = true;
  $('ackBtn').innerHTML = `${icons.check(18)}<span>${escapeHtml(t('home.acked'))}</span>`;
  $('ackBtn').disabled = true;
}

/* ---------- S8 advisory detail (pathway.md P5) ---------- */

function renderAdvisoryDetail() {
  const advisories = homeAdvisories;
  const a = advisories[selectedAdvisoryIndex];
  if (!a) { router.go('home'); return; }

  const p = renderParams(a.params);
  const isAcked = storage.getAckedAdvisories().has(a.titleKey);

  $('advisoryDetailSeverity').innerHTML = `${(SEVERITY_ICON[a.severity] || icons.info)(16)} ${escapeHtml(t(`severity.${a.severity}`))}`;
  $('advisoryDetailSeverity').dataset.severity = a.severity;
  $('advisoryDetailTitle').textContent = t(a.titleKey, p);
  $('advisoryDetailBody').textContent = t(a.bodyKey, p);
  $('advisoryDetailWhy').textContent = t(a.whyKey, p);

  const ackBtn = $('advisoryDetailAck');
  if (isAcked) {
    ackBtn.innerHTML = `${icons.check(16)}<span>${escapeHtml(t('home.acked'))}</span>`;
    ackBtn.disabled = true;
  } else {
    ackBtn.innerHTML = `${icons.check(16)}<span>${escapeHtml(t('home.ack'))}</span>`;
    ackBtn.disabled = false;
  }
  ackBtn.onclick = () => {
    storage.ackAdvisory(a.titleKey);
    ackBtn.innerHTML = `${icons.check(16)}<span>${escapeHtml(t('home.acked'))}</span>`;
    ackBtn.disabled = true;
  };
}

/* ---------- Sarvam live translation of geographic names ---------- */

let geoToken = 0;

function currentLabels() {
  const state = selectedState();
  const district = selectedDistrict();
  return [
    ...TREE.map((s) => s.name),
    ...(state ? state.districts.map((d) => d.name) : []),
    ...(district ? (district.villages ?? []) : []),
  ];
}

async function translateGeo() {
  const locale = SARVAM_LOCALES[getLang()];
  if (!sarvamEnabled() || !locale || locale === 'en-IN') return;

  const token = ++geoToken;
  const map = await translateNames(currentLabels(), locale);
  if (token !== geoToken || !Object.keys(map).length) return;

  const tr = (label) => map[label] ?? label;
  stateSelect.setOptions(TREE.map((s) => ({ value: s.code, label: tr(s.name) })));
  stateSelect.setValue(stateSelect.getValue());

  const state = selectedState();
  if (state) {
    districtSelect.setOptions(state.districts.map((d) => ({ value: d.code, label: tr(d.name) })));
    districtSelect.setValue(districtSelect.getValue());

    const district = selectedDistrict();
    if (district) {
      villageSelect.setOptions([
        ...(district.villages ?? []).map((v) => ({ value: v, label: tr(v) })),
        { value: OTHER, label: t('loc.other') },
      ]);
      villageSelect.setValue(villageSelect.getValue());
    }
  }
}

/* ---------- S9 Mandi comparison (pathway.md P6) ---------- */

async function renderMandi(overrideQty) {
  const draft = storage.getDraftProfile() ?? {};
  const eff = {
    ...draft,
    districtCode: meCache?.profile?.district_code ?? draft.districtCode ?? 'nashik',
    districtName: meCache?.profile?.district_name ?? draft.districtName ?? 'Nashik',
    crop: meCache?.crop_cycle?.crop ?? draft.crop ?? 'cotton',
  };

  const cropName = t(`crop.${eff.crop}`);
  $('mandiCropDisplay').textContent = cropName;

  if (overrideQty !== undefined) {
    mandiQty = overrideQty;
  } else if (!mandiQty) {
    mandiQty = Math.max(5, Math.round((Number(draft.areaAcres) || 3) * 6));
  }
  $('mandiQtyInput').value = mandiQty;

  const repo = await getAuth();
  const comparison = await repo.compareMandis(eff, mandiQty);
  const { rows, bestNet, inversion } = comparison;

  /* Inversion callout */
  const invBox = $('mandiInversion');
  if (inversion) {
    invBox.hidden = false;
    invBox.textContent = t('mandi.inversion', {
      priceLeader: inversion.priceLeader,
      netLeader: inversion.netLeader,
      gap: inversion.gap.toLocaleString('en-IN'),
    });
  } else {
    invBox.hidden = true;
  }

  /* Mandi list */
  $('mandiList').innerHTML = `
    <div class="mandi-table-wrapper">
      <table class="mandi-table">
        <thead>
          <tr>
            <th>APMC Mandi Yard & Location</th>
            <th>Today's Modal Rate</th>
            <th>Rate per Kg</th>
            <th>Daily Range (Min-Max)</th>
            <th>Day-over-Day Trend</th>
            <th>Govt MSP Status</th>
            <th>Arrival & Variety</th>
            <th>Take-Home Net</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(r => {
            const isBest = r.isBestNet;
            const trendIcon = r.trend7dPct > 0 ? '-' : r.trend7dPct < 0 ? '-' : '"?';
            const trendColor = r.trend7dPct > 0 ? 'hsl(120 40% 30%)' : r.trend7dPct < 0 ? 'hsl(0 60% 40%)' : 'hsl(var(--muted-foreground))';
            const trendBg = r.trend7dPct > 0 ? 'hsl(120 40% 95%)' : r.trend7dPct < 0 ? 'hsl(0 60% 95%)' : '#f8f9fa';
            
            const diffMsp = r.price - r.msp;
            const mspColor = diffMsp >= 0 ? 'hsl(120 40% 30%)' : 'hsl(0 60% 40%)';
            const mspBg = diffMsp >= 0 ? 'hsl(120 40% 95%)' : 'hsl(0 60% 95%)';
            const mspText = diffMsp >= 0 ? `+₹${diffMsp} (Above MSP)` : `-₹${Math.abs(diffMsp)} (Below MSP)`;
            
            return `
              <tr class="${isBest ? 'best-net-row' : ''}">
                <td>
                  <div style="font-weight:700; color:hsl(var(--foreground)); font-size:13px;">${escapeHtml(r.name)}</div>
                  <div style="font-size:11px; color:hsl(var(--muted-foreground)); margin-top:2px;">
                    ${isBest ? `<span style="color:hsl(var(--primary)); font-weight:600;">${icons.check(12)} Best Net (${r.distanceKm}km)</span>` : `${r.distanceKm} km away ^' ${r.operatingDays}`}
                  </div>
                </td>
                <td style="font-weight:800; font-size:14px;">₹${r.price.toLocaleString('en-IN')}/Qtl</td>
                <td style="font-weight:600; color:hsl(var(--muted-foreground));">₹${(r.price/100).toFixed(1)}/kg</td>
                <td style="color:hsl(var(--muted-foreground));">₹${r.min} - ₹${r.max}</td>
                <td>
                  <span style="display:inline-flex; align-items:center; gap:4px; padding:2px 6px; border-radius:4px; background:${trendBg}; color:${trendColor}; font-weight:700; font-size:11px;">
                    ${trendIcon} ${r.trend7dPct > 0 ? '+' : ''}${r.trend7dPct}%
                  </span>
                </td>
                <td>
                  <span style="display:inline-flex; align-items:center; padding:2px 6px; border-radius:4px; background:${mspBg}; color:${mspColor}; font-weight:700; font-size:11px;">
                    ${mspText}
                  </span>
                  <div style="font-size:10px; color:hsl(var(--muted-foreground)); margin-top:2px;">Govt MSP: ₹${r.msp}</div>
                </td>
                <td style="font-size:12px;">
                  <div style="font-weight:600;">${r.arrivalDate}</div>
                  <div style="color:hsl(var(--muted-foreground)); font-size:11px;">${r.variety}</div>
                </td>
                <td>
                  <div style="font-weight:800; font-size:14px; color:hsl(var(--primary));">₹${r.net.toLocaleString('en-IN')}</div>
                  <div style="font-size:10px; color:hsl(var(--muted-foreground));">Total Net (${r.distanceKm}km)</div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function onMandiQtyChange() {
  const val = parseFloat($('mandiQtyInput').value);
  if (Number.isFinite(val) && val > 0) {
    renderMandi(val);
  }
}

/* ---------- S10 Need help / Officer contact (pathway.md P7) ---------- */

function renderHelp() {
  const officer = repository.getOfficerContact();
  const draft = storage.getDraftProfile() ?? {};
  const district = meCache?.profile?.district_name ?? draft.districtName ?? officer.district;

  $('officerName').textContent = officer.name;
  $('officerJurisdiction').textContent = `${district} · Maharashtra`;
  $('officerCallBtn').href = `tel:${officer.phone}`;

  // Set min date to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  visitDateInput.min = tomorrow.toISOString().slice(0, 10);
  if (!visitDateInput.value) {
    visitDateInput.value = tomorrow.toISOString().slice(0, 10);
  }
}

function onToggleVisitForm() {
  visitForm.hidden = !visitForm.hidden;
  visitSuccess.hidden = true;
  visitError.hidden = true;
  if (!visitForm.hidden) {
    visitDateInput.focus();
  }
}

function onVisitCancel() {
  visitForm.hidden = true;
  visitSuccess.hidden = true;
  visitError.hidden = true;
}

function onVisitSubmit(e) {
  e.preventDefault();
  const dateVal = visitDateInput.value;
  if (!dateVal) {
    visitError.textContent = t('err.required', { field: t('help.visitDateLabel') });
    visitError.hidden = false;
    return;
  }
  visitError.hidden = true;

  const officer = repository.getOfficerContact();
  const draft = storage.getDraftProfile() ?? {};
  const session = storage.getSession();

  storage.saveVisitRequest({
    preferredDate: dateVal,
    reason: visitReasonInput.value.trim() || null,
    officerId: officer.staff_id,
    farmerPhone: session?.phone ?? draft.phone ?? null,
  });

  visitSuccess.textContent = t('help.visitSuccess', { name: officer.name });
  visitSuccess.hidden = false;
  visitReasonInput.value = '';
}

/* ---------- Module 5: My Loan ---------- */

function renderLoan() {
  const data = storage.getLoanData();
  if (data) {
    $('loanAmountInput').value = data.amount || '';
    $('loanTenureInput').value = data.tenureMonths || '';
    $('loanRateInput').value = data.rate || '';
    
    if (data.amount > 0 && data.tenureMonths > 0 && data.rate > 0) {
      const result = generateSchedule(data.amount, data.rate, data.tenureMonths);
      $('valLoanEmi').textContent = `₹${Math.round(result.emi).toLocaleString('en-IN')}`;
      $('valLoanTotalInterest').textContent = `₹${Math.round(result.totalInterest).toLocaleString('en-IN')}`;
      $('valLoanTotalPayment').textContent = `₹${Math.round(result.totalPayment).toLocaleString('en-IN')}`;
      $('loanResultBox').hidden = false;
    } else {
      $('loanResultBox').hidden = true;
    }
  } else {
    // defaults
    $('loanAmountInput').value = '50000';
    $('loanTenureInput').value = '12';
    $('loanRateInput').value = '7.0';
    $('loanResultBox').hidden = true;
  }
}

function onLoanSubmit(e) {
  e.preventDefault();
  const amt = parseFloat($('loanAmountInput').value);
  const ten = parseInt($('loanTenureInput').value, 10);
  const rate = parseFloat($('loanRateInput').value);

  if (amt > 0 && ten > 0 && rate > 0) {
    storage.saveLoanData({ amount: amt, tenureMonths: ten, rate: rate });
    renderLoan();
  }
}

/* ---------- S11 Profile Overview (pathway.md P8) ---------- */

function renderProfile() {
  const session = storage.getSession();
  const draft = storage.getDraftProfile() ?? {};

  const name = session?.name || draft.name || meCache?.display_name || null;
  const setupSec = $('profileSetupSection');
  const overviewSec = $('profileOverviewSection');

  if (!name) {
    /* Mode 1: First-time display name capture */
    setupSec.hidden = false;
    overviewSec.hidden = true;
    $('displayNameInput').focus();
    return;
  }

  /* Mode 2: Full My Farm & Profile overview */
  setupSec.hidden = true;
  overviewSec.hidden = false;

  const eff = {
    ...draft,
    village: meCache?.farm?.village_name ?? meCache?.profile?.village_name ?? draft.village ?? '—',
    districtName: meCache?.profile?.district_name ?? draft.districtName ?? '—',
    stateName: meCache?.profile?.state_name ?? draft.stateName ?? '—',
    areaAcres: meCache?.farm?.area_acres ?? draft.areaAcres ?? '—',
    soilType: meCache?.farm?.soil_type ?? draft.soilType ?? 'black',
    irrigation: meCache?.farm?.irrigation_type ?? draft.irrigation ?? 'rainfed',
    crop: meCache?.crop_cycle?.crop ?? draft.crop ?? 'cotton',
    variety: meCache?.crop_cycle?.variety ?? draft.variety ?? 'Standard',
    growthStage: meCache?.crop_cycle?.growth_stage ?? draft.growthStage ?? 'vegetative',
  };

  const masked = session?.masked ?? `••• ${(session?.phone ?? draft.phone ?? '1234567890').slice(-3)}`;
  $('profileNameDisplay').textContent = name;
  $('profilePhoneDisplay').textContent = `${t('profile.phoneLabel')}: ${masked}`;

  const isMasked = name.includes('•');
  $('profileAvatar').textContent = isMasked
    ? (name.match(/\d{3}$/)?.[0] ?? '•••')
    : (name || '?').trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();

  $('profileLocVal').textContent = `${eff.village} · ${eff.districtName} · ${eff.stateName}`;
  $('profileLandVal').textContent = `${eff.areaAcres} acres · ${t('soil.' + eff.soilType)} · ${t('irrig.' + eff.irrigation)}`;
  $('profileCropVal').textContent = `${t('crop.' + eff.crop)} (${eff.variety}) · ${t('stage.' + eff.growthStage)}`;
  $('profileLangVal').textContent = getLanguageByCode(getLang())?.nativeName ?? 'English';
}

/* ---------- O1–O6 Officer Triage & Caseload Dashboard (pathway.md P9–P11) ---------- */

let officerCaseloadFilter = 'ALL';
let officerSearchQuery = '';

function renderOfficer() {
  const session = storage.getSession();
  const district = session?.district || 'Nashik';

  $('officerDashTitle').textContent = t('officer.dashTitle', { name: session?.name || 'Officer' });
  $('officerJurisdictionLine').textContent = t('officer.jurisdictionLine', { district });

  let { list, counts } = repository.getOfficerCaseload(district);
  const me = storage.getDraftProfile();
  if (me && me.phone) {
    const exists = list.find(c => c.phone === me.phone);
    if (!exists) {
      list.unshift({
        id: 'F-REAL',
        name: me.name || 'Local Farmer',
        village: me.district || district,
        district: me.district || district,
        acres: me.land?.area || 2.0,
        crop: me.crop?.type || 'Crop',
        stage: 'Current',
        score: 85,
        band: 'HIGH',
        phone: me.phone,
        drivers: [
          { icon: 'alert', label: 'High Distress Trigger' }
        ]
      });
      counts.HIGH = (counts.HIGH || 0) + 1;
      counts.TOTAL += 1;
    }
  }

  $('statCriticalCount').textContent = counts.CRITICAL;
  $('statHighCount').textContent = counts.HIGH;
  $('statMediumCount').textContent = counts.MEDIUM;
  $('statTotalCount').textContent = counts.TOTAL;

  $('statCriticalLabel').textContent = t('officer.bandCritical');
  $('statHighLabel').textContent = t('officer.bandHigh');
  $('statMediumLabel').textContent = t('officer.bandMedium');
  $('statTotalLabel').textContent = t('officer.bandTotal');
  $('officerCaseloadHeading').textContent = t('officer.caseloadHeading');
  $('officerSearchInput').placeholder = t('officer.searchPh');

  const filtered = list.filter((item) => {
    if (officerCaseloadFilter !== 'ALL' && item.band !== officerCaseloadFilter) return false;
    if (officerSearchQuery) {
      const q = officerSearchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchVillage = item.village.toLowerCase().includes(q);
      const matchCrop = item.crop.toLowerCase().includes(q);
      if (!matchName && !matchVillage && !matchCrop) return false;
    }
    return true;
  });

  const listMount = $('officerCaseloadList');
  if (!filtered.length) {
    listMount.innerHTML = `<p class="field-note" style="text-align:center; padding:20px;">No matching cases in this filter.</p>`;
    return;
  }

  const actions = storage.getOfficerActions();

  listMount.innerHTML = filtered.map((c) => {
    const bandClass = `caseload-band--${c.band.toLowerCase()}`;
    const cardClass = `caseload-card--${c.band.toLowerCase()}`;
    const farmerActions = actions[c.id] ?? [];
    const lastAction = farmerActions.length ? farmerActions[farmerActions.length - 1] : null;

    const DRIVER_ICONS = {
      rain: icons.droplet(13),
      trend_down: icons.trendDown(13),
      alert: icons.alert(13),
      credit: icons.creditCard(13),
      sprout: icons.sprout(13),
      check: icons.check(13),
      water: icons.droplet(13)
    };

    return `
      <article class="caseload-card ${cardClass}" data-farmer-id="${c.id}">
        <div class="caseload-card__head">
          <div>
            <h3 class="caseload-farmer-name">${escapeHtml(c.name)}</h3>
            <p class="caseload-farmer-sub">${escapeHtml(c.village)} · ${c.acres} acres · ${escapeHtml(c.crop)} (${escapeHtml(c.stage)})</p>
          </div>
          <span class="caseload-band ${bandClass}">
            Distress: ${c.score}/100 · ${c.band}
          </span>
        </div>

        <div class="caseload-drivers">
          ${c.drivers.map((d) => `<span class="caseload-tag">${DRIVER_ICONS[d.icon] || icons.info(13)} ${escapeHtml(d.label)}</span>`).join('')}
        </div>

        ${farmerActions.length ? `
          <div class="caseload-actions-log">
            ${farmerActions.slice(-2).map((a) => `
              <div class="caseload-action-entry">
                <span class="caseload-action-type">${escapeHtml(t('officer.action.' + a.type))}</span>
                ${a.notes ? `<span class="caseload-action-notes">${escapeHtml(a.notes)}</span>` : ''}
                <span class="caseload-action-time">${new Date(a.at).toLocaleDateString()}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:4px; padding-top:8px; border-top:1px dashed hsl(var(--border));">
          <a href="tel:${c.phone}" class="btn btn--primary btn--sm" style="background-color:hsl(var(--primary)); text-decoration:none; padding:4px 8px; border-radius:4px; display:inline-flex; align-items:center; gap:4px;">${icons.phone(13)} <span>Call</span></a>
          <span style="font-size:12px; color:hsl(var(--muted-foreground));">
            ${lastAction?.type === 'resolved'
              ? `<span style="background:hsl(120 40% 92%); color:hsl(120 40% 30%); padding:2px 8px; border-radius:4px; font-weight:600; display:inline-flex; align-items:center; gap:4px;">${icons.check(13)} <span>${escapeHtml(t('officer.action.resolved'))}</span></span>`
              : lastAction ? `${t('officer.actionLabel')}: ${escapeHtml(t('officer.action.' + lastAction.type))}` : t('officer.noAction')}
          </span>
          <div style="display:flex; gap:8px;">
            <a class="btn btn--outline btn--sm" href="tel:${c.phone}" style="display:inline-flex; align-items:center; gap:4px;">${icons.phone(13)} <span>Call</span></a>
            <button class="btn btn--primary btn--sm log-action-btn" type="button">${t('officer.logAction')}</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  /* shared action log form — hidden by default, shown below the clicked card */
  const existingForm = $('officerActionForm');
  if (existingForm) existingForm.remove();

  listMount.querySelectorAll('.log-action-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.caseload-card');
      const farmerId = card.dataset.farmerId;
      const farmerName = card.querySelector('.caseload-farmer-name').textContent;

      /* close any other open form */
      listMount.querySelectorAll('.caseload-card--expanded').forEach((c) => c.classList.remove('caseload-card--expanded'));
      const oldForm = $('officerActionForm');
      if (oldForm) oldForm.remove();

      card.classList.add('caseload-card--expanded');

      const form = document.createElement('form');
      form.id = 'officerActionForm';
      form.className = 'officer-action-form';
      form.novalidate = true;
      form.innerHTML = `
        <div class="section-head">
          <span class="eyebrow">${escapeHtml(t('officer.actionTitle', { name: farmerName }))}</span>
        </div>
        <div class="field">
          <label for="officerActionType">${escapeHtml(t('officer.actionTypeLabel'))}</label>
          <select class="input" id="officerActionType" required>
            <option value="">${escapeHtml(t('ph.select'))}</option>
            <option value="call_made">${escapeHtml(t('officer.action.call_made'))}</option>
            <option value="visit_done">${escapeHtml(t('officer.action.visit_done'))}</option>
            <option value="referral">${escapeHtml(t('officer.action.referral'))}</option>
            <option value="advisory_given">${escapeHtml(t('officer.action.advisory_given'))}</option>
            <option value="follow_up">${escapeHtml(t('officer.action.follow_up'))}</option>
            <option value="resolved">${escapeHtml(t('officer.action.resolved'))}</option>
            <option value="review_later">${escapeHtml(t('officer.action.review_later'))}</option>
          </select>
        </div>
        <div class="field">
          <label for="officerActionNotes">${escapeHtml(t('officer.actionNotesLabel'))}</label>
          <input class="input" id="officerActionNotes" type="text" placeholder="${escapeHtml(t('officer.actionNotesPh'))}" autocomplete="off">
        </div>
        <div class="btn-row">
          <button class="btn btn--ghost" type="button" id="officerActionCancel">${escapeHtml(t('help.visitCancel'))}</button>
          <button class="btn btn--primary" type="submit">${escapeHtml(t('officer.actionSubmit'))}</button>
        </div>
      `;
      card.appendChild(form);

      form.querySelector('#officerActionCancel').addEventListener('click', () => {
        card.classList.remove('caseload-card--expanded');
        form.remove();
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const type = form.querySelector('#officerActionType').value;
        if (!type) return;
        const notes = form.querySelector('#officerActionNotes').value.trim();
        storage.logOfficerAction(farmerId, type, notes);
        renderOfficer();
      });
    });
  });
}

/* ---------- view switching ---------- */

function showView(name) {
  VIEWS.forEach((v) => { $(`view${v[0].toUpperCase()}${v.slice(1)}`).hidden = v !== name; });
  const active = $(`view${name[0].toUpperCase()}${name.slice(1)}`);
  if (active) {
    active.classList.remove('view-enter');
    void active.offsetWidth; /* restart the animation */
    active.classList.add('view-enter');
  }

  const headerOfficerBtn = document.getElementById('headerOfficerBtn');
  if (headerOfficerBtn) {
    // Hide if on dashboard views (home, mandi, profile, help, officer, loan, auth)
    // Only show on onboarding views (welcome, location, land, crop)
    const isDashboard = ['home', 'mandi', 'profile', 'help', 'officer', 'loan', 'auth'].includes(name);
    headerOfficerBtn.style.display = isDashboard ? 'none' : '';
  }

  /* Bottom Navigation visibility and active state */
  const nav = $('farmerNav');
  if (nav) {
    const isFarmerScreen = ['home', 'mandi', 'loan', 'help', 'profile'].includes(name);
    nav.hidden = !isFarmerScreen;
    if (isFarmerScreen) {
      nav.querySelectorAll('.farmer-nav__btn').forEach((btn) => {
        if (btn.dataset.route === name) {
          btn.setAttribute('aria-current', 'page');
        } else {
          btn.removeAttribute('aria-current');
        }
      });
    }
  }

  window.scrollTo({ top: 0 });
}

function locationComplete(draft) {
  return Boolean(draft?.stateCode && draft?.districtCode && draft?.village);
}

function landComplete(draft) {
  return Boolean(draft?.areaAcres && draft?.soilType && draft?.irrigation);
}

function cropComplete(draft) {
  return Boolean(draft?.crop && draft?.variety && draft?.sownOn && draft?.growthStage);
}

/* ---------- boot ---------- */

function wire() {
  openPickerBtn.addEventListener('click', () => {
    voiceNote.textContent = '';
    gateAdvances = false;
    languageGate.hidden = false;
    languageGrid.querySelector('.language-tile__choice')?.focus();
  });

  $('startSetup').addEventListener('click', () => router.go('location'));

  $('stateMount').append(stateSelect.el);
  $('districtMount').append(districtSelect.el);
  $('villageMount').append(villageSelect.el);
  villageFree.addEventListener('input', onFreeVillageInput);

  $('soilMount').append(soilSelect.el);
  $('irrigationMount').append(irrigationSelect.el);
  landArea.addEventListener('input', saveLand);

  $('cropMount').append(cropSelect.el);
  $('varietyMount').append(varietySelect.el);
  varietyFree.addEventListener('input', onFreeVarietyInput);
  sownDate.addEventListener('change', onSownChange);
  sownDate.max = new Date().toISOString().slice(0, 10);

  $('locationForm').addEventListener('submit', onSubmitLocation);
  $('locBack').addEventListener('click', () => router.go('welcome'));
  $('landForm').addEventListener('submit', onSubmitLand);
  $('landBack').addEventListener('click', () => router.go('location'));
  $('cropForm').addEventListener('submit', onSubmitCrop);
  $('cropBack').addEventListener('click', () => router.go('land'));
  $('reviewBack').addEventListener('click', () => router.go('crop'));
  $('reviewSave').addEventListener('click', onSaveReview);

  /* S6-F1 account intent */
  $('intentBack').addEventListener('click', () => router.go('review'));
  $('intentContinue').addEventListener('click', () => router.go('auth'));
  $('intentChange').addEventListener('click', () => router.go('review'));
  $('intentGuest').addEventListener('click', onGuest);
  $('consentCheck').addEventListener('change', onConsentChange);

  tabFarmer.addEventListener('click', () => setAuthTab('farmer'));
  tabOfficer.addEventListener('click', () => setAuthTab('officer'));
  panelFarmer.addEventListener('submit', onFarmerSubmit);
  resendBtn.addEventListener('click', onResend);
  panelOfficer.addEventListener('submit', onOfficerSubmit);
  guestBtn.addEventListener('click', onGuest);
  signoutBtn.addEventListener('click', onSignout);
  authContinueBtn.addEventListener('click', () => {
    const session = storage.getSession();
    if (session?.role === 'officer') {
      router.go('officer');
    } else {
      router.go('home');
    }
  });
  $('profileForm').addEventListener('submit', onSubmitProfile);
  $('listenBtn').addEventListener('click', onListen);
  $('ackBtn').addEventListener('click', onAcknowledge);
  $('advisoryDetailBack').addEventListener('click', () => router.go('home'));

  /* Module 5 My Loan wiring */
  $('loanForm').addEventListener('submit', onLoanSubmit);

  /* S9 Mandi and S10 Help wiring */
  $('mandiQtyInput').addEventListener('input', onMandiQtyChange);
  officerVisitToggleBtn.addEventListener('click', onToggleVisitForm);
  visitForm.addEventListener('submit', onVisitSubmit);
  $('visitCancelBtn').addEventListener('click', onVisitCancel);

  /* S11 Profile Edit & Signout wiring */
  $('btnEditLoc').addEventListener('click', () => router.go('location'));
  $('btnEditLand').addEventListener('click', () => router.go('land'));
  $('btnEditCrop').addEventListener('click', () => router.go('crop'));
  $('btnEditLang').addEventListener('click', () => openPickerBtn.click());
  $('profileSignoutBtn').addEventListener('click', onSignout);

  /* Sarvam API key setup */
  $('sarvamKeyStatus').textContent = SARVAM_API_KEY ? 'Key configured' : 'Not configured';
  $('sarvamKeyInput').value = SARVAM_API_KEY ? '••••••••' : '';
  $('sarvamKeySave').addEventListener('click', () => {
    const val = $('sarvamKeyInput').value.trim();
    if (val && val !== '••••••••') {
      setSarvamKey(val);
      $('sarvamKeyStatus').textContent = 'Key saved — reload to activate';
      $('sarvamKeyInput').value = '••••••••';
    }
  });


  const headerOfficerBtn = document.getElementById('headerOfficerBtn');
  if (headerOfficerBtn) {
    headerOfficerBtn.addEventListener('click', () => {
      router.go('auth');
      setAuthTab('officer');
    });
  }

  /* O1–O6 Officer Dashboard wiring */
  $('officerSignoutBtn').addEventListener('click', onSignout);
  $('officerSearchInput').addEventListener('input', (e) => {
    officerSearchQuery = e.target.value.trim();
    renderOfficer();
  });
  $('officerFilterChips').querySelectorAll('.filter-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      officerCaseloadFilter = chip.dataset.band;
      $('officerFilterChips').querySelectorAll('.filter-chip').forEach((c) =>
        c.classList.toggle('filter-chip--active', c === chip)
      );
      renderOfficer();
    });
  });
  $('viewOfficer').querySelectorAll('.stat-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const filter = tile.dataset.filter;
      if (filter) {
        officerCaseloadFilter = filter;
        $('officerFilterChips').querySelectorAll('.filter-chip').forEach((c) =>
          c.classList.toggle('filter-chip--active', c.dataset.band === filter)
        );
        renderOfficer();
      }
    });
  });

  $('farmerNav').querySelectorAll('.farmer-nav__btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const route = btn.dataset.route;
      if (route) router.go(route);
    });
  });

  window.addEventListener('beforeunload', () => voice.stop());
}

function boot() {
  const saved = storage.getLanguage();
  const validSaved = saved && getLanguageByCode(saved);
  if (validSaved) setLang(saved);

  renderLanguageTiles();
  wire();
  applyCopy();
  refreshLand();
  refreshCrop();

  router.register('welcome', () => {
    $('startSetup').hidden = !validSaved;
    showView('welcome');
  });

  router.register('location', () => {
    if (!storage.getLanguage()) { router.go('welcome'); return; }
    showView('location');
  });

  router.register('land', () => {
    const draft = storage.getDraftProfile();
    if (!storage.getLanguage() || !locationComplete(draft)) {
      router.go('location');
      return;
    }
    showView('land');
  });

  router.register('crop', () => {
    const draft = storage.getDraftProfile();
    if (!storage.getLanguage() || !landComplete(draft)) {
      router.go('land');
      return;
    }
    showView('crop');
  });

  router.register('review', () => {
    const draft = storage.getDraftProfile();
    if (!storage.getLanguage() || !cropComplete(draft)) {
      router.go('crop');
      return;
    }
    buildReview();
    showView('review');
  });

  router.register('intent', () => {
    const draft = storage.getDraftProfile();
    if (!storage.getLanguage() || !cropComplete(draft) || !draft?.completed) {
      router.go('review');
      return;
    }
    renderIntent();
    showView('intent');
  });

  router.register('auth', () => {
    if (!storage.getLanguage()) { router.go('welcome'); return; }
    paintAuthState();
    showView('auth');
  });

  router.register('profile', () => {
    const session = storage.getSession();
    if (!storage.getLanguage() || session?.role !== 'farmer' || !session?.token) {
      router.go('auth');
      return;
    }
    renderProfile();
    showView('profile');
  });

  router.register('home', async () => {
    if (!storage.getLanguage() || !storage.getSession()) {
      router.go('auth');
      return;
    }
    showView('home');
    await renderHome();
  });

  router.register('advisory', () => {
    if (!storage.getLanguage() || !storage.getSession()) {
      router.go('auth');
      return;
    }
    renderAdvisoryDetail();
    showView('advisory');
  });

  router.register('mandi', async () => {
    if (!storage.getLanguage() || !storage.getSession()) {
      router.go('auth');
      return;
    }
    showView('mandi');
    await renderMandi();
  });

  router.register('loan', () => {
    if (!storage.getLanguage() || !storage.getSession()) {
      router.go('auth');
      return;
    }
    applyCopy();
    renderLoan();
    showView('loan');
  });

  router.register('help', () => {
    if (!storage.getLanguage() || !storage.getSession()) {
      router.go('auth');
      return;
    }
    renderHelp();
    showView('help');
  });

  router.register('officer', () => {
    const session = storage.getSession();
    if (!storage.getLanguage() || session?.role !== 'officer') {
      router.go('auth');
      return;
    }
    renderOfficer();
    showView('officer');
  });

  router.start('welcome');

  /* First visit → gate covers the page until a language exists.
     Returning visitor resumes at their furthest incomplete step. */
  if (!validSaved) {
    gateAdvances = true;
    languageGate.hidden = false;
    return;
  }

  const draft = storage.getDraftProfile();
  if (!draft) return;
  if (!locationComplete(draft)) router.go('location');
  else if (!landComplete(draft)) router.go('land');
  else if (!cropComplete(draft)) router.go('crop');
  else if (!draft.completed) router.go('review');
  else if (!storage.getSession()) {
    /* First save → intent screen; a farmer who already accepted the
       consent (returning/expired session) goes straight to login
       (ACCOUNT CONTRACT §4.3 — never repeat the wizard). */
    router.go(draft.consent?.accepted ? 'auth' : 'intent');
  }
  else if (storage.getSession().role === 'officer') router.go('officer');
  else if (storage.getSession().role === 'farmer'
           && !storage.getSession().name && !draft.attached) router.go('profile');
  else router.go('home');
}

boot();
