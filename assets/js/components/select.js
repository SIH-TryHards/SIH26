/* ============================================================
   components/select.js — shadcn/ui-style Select, ported to
   vanilla ES modules (pathway.md PART 3 §2 forbids React and
   Tailwind, so we rebuild the component's look and behaviour:
   trigger + popover listbox, chevron rotation, pop animation,
   focus ring, optional type-to-search header, full keyboard
   support, ARIA roles).
   ============================================================ */

const CHEVRON = `<svg class="select__chevron" width="16" height="16" viewBox="0 0 24 24"
  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
  stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;

const CHECK = `<span class="select__check" aria-hidden="true">✓</span>`;

export function createSelect({
  placeholder = '',
  options = [],
  value = '',
  disabled = false,
  searchable = false,
  searchPlaceholder = '',
  labelledBy = null,
  onChange = null,
}) {
  const root = document.createElement('div');
  root.className = 'select';

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'select-trigger';
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');
  if (labelledBy) trigger.setAttribute('aria-labelledby', labelledBy);
  if (disabled) trigger.disabled = true;

  const valueLabel = document.createElement('span');
  valueLabel.className = 'select__value';
  trigger.append(valueLabel);
  trigger.insertAdjacentHTML('beforeend', CHEVRON);

  const popover = document.createElement('div');
  popover.className = 'select-popover';
  popover.hidden = true;

  const search = document.createElement('input');
  search.type = 'text';
  search.className = 'select-search';
  search.placeholder = searchPlaceholder;

  if (searchable) popover.append(search);

  const empty = document.createElement('div');
  empty.className = 'select-empty';
  empty.hidden = true;

  let currentOptions = [];
  let currentValue = '';
  let currentPlaceholder = placeholder;
  let emptyLabel = 'No matches';
  let activeIndex = -1;

  /* ---------- rendering ---------- */

  function labelFor(v) {
    return currentOptions.find((o) => o.value === v)?.label ?? '';
  }

  function paintTrigger() {
    const label = labelFor(currentValue);
    valueLabel.textContent = label || currentPlaceholder;
    trigger.classList.toggle('is-placeholder', !label);
  }

  function buildList() {
    popover.querySelectorAll('.select-option').forEach((n) => n.remove());
    activeIndex = -1;

    currentOptions.forEach((opt) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = 'select-option';
      item.setAttribute('role', 'option');
      item.setAttribute('aria-selected', String(opt.value === currentValue));
      item.dataset.value = opt.value;
      item.innerHTML = `<span class="select-option__label"></span>${CHECK}`;
      item.querySelector('.select-option__label').textContent = opt.label;
      item.addEventListener('click', () => choose(opt.value));
      item.addEventListener('mouseenter', () => {
        const idx = visibleItems().indexOf(item);
        if (idx >= 0) { activeIndex = idx; paintActive(); }
      });
      popover.append(item);
    });
  }

  function paintActive() {
    const items = visibleItems();
    items.forEach((el, i) => el.classList.toggle('is-active', i === activeIndex));
    const el = items[activeIndex];
    if (!el) return;
    /* manual scroll — scrollIntoView jumps the whole page on mobile */
    if (el.offsetTop < popover.scrollTop) popover.scrollTop = el.offsetTop - 6;
    else if (el.offsetTop + el.offsetHeight > popover.scrollTop + popover.clientHeight) {
      popover.scrollTop = el.offsetTop + el.offsetHeight - popover.clientHeight + 6;
    }
  }

  function visibleItems() {
    return [...popover.querySelectorAll('.select-option:not([hidden])')];
  }

  /* ---------- open / close ---------- */

  function open() {
    if (trigger.disabled) return;
    popover.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    if (searchable) {
      search.value = '';
      filter('');
      search.focus();
    }
    const items = visibleItems();
    activeIndex = items.findIndex((el) => el.getAttribute('aria-selected') === 'true');
    paintActive();
  }

  function close() {
    popover.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus({ preventScroll: true });
  }

  function choose(v) {
    const changed = v !== currentValue;
    currentValue = v;
    paintTrigger();
    buildList();
    close();
    if (changed) onChange?.(v);
  }

  /* ---------- public API ---------- */

  function setOptions(next) {
    currentOptions = next;
    if (currentValue && !currentOptions.some((o) => o.value === currentValue)) {
      currentValue = '';
    }
    buildList();
    paintTrigger();
  }

  function setValue(v) {
    currentValue = currentOptions.some((o) => o.value === v) ? v : '';
    paintTrigger();
    buildList();
  }

  function setPlaceholder(p) {
    currentPlaceholder = p;
    paintTrigger();
  }

  function setEmptyLabel(label) {
    emptyLabel = label;
  }

  function setSearchPlaceholder(p) {
    search.placeholder = p;
  }

  function setDisabled(b) {
    trigger.disabled = b;
    if (b) close();
  }

  /* ---------- events ---------- */

  trigger.addEventListener('click', () => (popover.hidden ? open() : close()));

  trigger.addEventListener('keydown', (e) => {
    if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
      e.preventDefault();
      open();
    }
  });

  function move(delta) {
    const items = visibleItems();
    if (!items.length) return;
    activeIndex = (activeIndex + delta + items.length) % items.length;
    paintActive();
  }

  popover.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key === 'ArrowDown') { e.preventDefault(); move(1); return; }
    if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); return; }
    if (e.key === 'Home') { e.preventDefault(); activeIndex = 0; paintActive(); return; }
    if (e.key === 'End') { e.preventDefault(); activeIndex = visibleItems().length - 1; paintActive(); return; }
    if (e.key === 'Enter') {
      /* An option button with focus handles Enter natively via click. */
      if (e.target.closest?.('.select-option')) return;
      e.preventDefault();
      const item = visibleItems()[activeIndex];
      if (item) choose(item.dataset.value);
    }
  });

  /* type-ahead when there is no search box */
  if (!searchable) {
    let buffer = '';
    let timer = null;
    popover.addEventListener('keydown', (e) => {
      if (e.key.length !== 1 || e.ctrlKey || e.metaKey) return;
      buffer += e.key.toLowerCase();
      clearTimeout(timer);
      timer = setTimeout(() => { buffer = ''; }, 400);
      const items = visibleItems();
      const hit = items.findIndex((el) =>
        el.textContent.trim().toLowerCase().startsWith(buffer));
      if (hit >= 0) { activeIndex = hit; paintActive(); }
    });
  }

  function filter(query) {
    const q = query.trim().toLowerCase();
    let shown = 0;
    popover.querySelectorAll('.select-option').forEach((el) => {
      const show = !q || el.textContent.trim().toLowerCase().includes(q);
      el.hidden = !show;
      if (show) shown += 1;
    });
    empty.textContent = emptyLabel;
    empty.hidden = shown > 0;
    activeIndex = shown ? 0 : -1;
    paintActive();
  }

  if (searchable) {
    search.addEventListener('input', () => filter(search.value));
    search.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
    });
  }

  document.addEventListener('click', (e) => {
    if (!popover.hidden && !root.contains(e.target)) close();
  });

  /* ---------- init ---------- */
  root.append(trigger, popover);
  if (searchable) popover.append(empty);
  currentOptions = options;
  currentValue = value;
  buildList();
  paintTrigger();

  return {
    el: root,
    getValue: () => currentValue,
    setOptions,
    setValue,
    setPlaceholder,
    setEmptyLabel,
    setSearchPlaceholder,
    setDisabled,
  };
}
