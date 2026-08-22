/* ============================================================
   Portfolio handheld — interaction engine
   All copy lives in DATA below; edit it freely.
   ============================================================ */

/* ---------- icons (16x16 stroke, masked to currentColor) ---- */
const ICO = {
  write:   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="#000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 10.2a1.3 1.3 0 0 1-1.3 1.3H5.6l-3.1 2.7V3.9a1.3 1.3 0 0 1 1.3-1.3h8.4a1.3 1.3 0 0 1 1.3 1.3z"/></svg>',
  work:    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="#000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="12" height="8.5" rx="1.6"/><path d="M5.5 5V3.8A1.3 1.3 0 0 1 6.8 2.5h2.4a1.3 1.3 0 0 1 1.3 1.3V5"/><path d="M2 8.6h12"/></svg>',
  about:   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="#000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="5" r="2.5"/><path d="M3 13.5v-.8a3.6 3.6 0 0 1 3.6-3.6h2.8a3.6 3.6 0 0 1 3.6 3.6v.8"/></svg>',
  contact: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="#000" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3.5" width="12" height="9" rx="1.6"/><path d="m2.5 4.5 5.5 4.5 5.5-4.5"/></svg>'
};
const setIcon = (el, name) =>
  el.style.setProperty('--icon', `url("data:image/svg+xml,${encodeURIComponent(ICO[name])}")`);

/* ---------- content (placeholder — swap for your own) -------- */

const DATA = {
  work: {
    label: 'ishlar',
    items: [
      { t: 'Take-IELTS', y: '2026', f: '◉', cat: 'TAʼLIM',
        role: 'Frontend, test logikasi, OAuth va natijalar',
        body: 'Kompyuterda topshiriladigan IELTS: 3 ta reading passage, 4 ta listening part, audio tezligi, haqiqiy imtihon taymeri va test tugashi bilan chiqadigan band score. Har bir modulda 40 ta savol.',
        note: 'Natija: haqiqiy imtihon formatida ishlaydigan platforma.',
        tags: '#React #TypeScript #Supabase',
        link: 'https://take-ielts.vercel.app' },

      { t: 'Quizo.uz', y: '2026', f: '◉', cat: 'SAAS · IMTIHON PLATFORMASI',
        role: 'Admin panel, test builder, API va natija oqimi',
        body: 'Trening, sertifikat va baholash bitta panelda. Tashkilot savol turlari, vaqt chegarasi, qoidalar va maxsus havolani oʻzi belgilaydi. Natijalar real vaqtda tushadi — Excel qidirishga hojat qolmaydi. 10 dan ortiq savol turi.',
        note: 'Natija: tashkilot imtihonni oʻzi yigʻadi va nazorat qiladi.',
        tags: '#React #TypeScript #REST_API',
        link: 'https://quizo.uz' },

      { t: 'Uz-Film', y: '2026', f: '◉', cat: 'HAMJAMIYAT · KINO',
        role: 'Katalog, profil, baholash, Supabase va TMDB integratsiyasi',
        body: 'Oʻzbek kinosi uchun bitta joy. 500 dan ortiq film, baholar, sharhlar, roʻyxatlar va profillar. Yangi chiqqanlar, koʻp koʻrilganlar va yana koʻrishga arziydigan filmlar bir joyda.',
        note: 'Natija: oʻzbek kinosi uchun ishlaydigan hamjamiyat katalogi.',
        tags: '#Next.js #Supabase #TMDB_API',
        link: 'https://uz-film.vercel.app' }
    ]
  },

  services: {
    label: 'xizmatlar',
    items: [
      { t: 'Yangi sayt yoki ilova', y: '6–10 hafta', cat: 'NOLDAN',
        role: 'Dizayn · Sayt · Admin panel · Toʻlov',
        body: 'Noldan boshlaymiz: dizayn, sayt, admin panel, toʻlov va ishlashni davom ettiradigan ichki qism.',
        note: 'Natija: gʻoyadan ishga tushgan mahsulotgacha.',
        tags: '#Frontend #Backend #Deploy' },

      { t: 'Ishni avtomatlashtirish', y: '2–6 hafta', cat: 'TIZIMLASHTIRISH',
        role: 'Buyurtma · Navbat · Hisobot',
        body: 'Buyurtma, navbat va hisobot daftar hamda Excel’dan chiqib, oʻzi ishlaydigan tizimga oʻtadi.',
        note: 'Natija: jamoa kamroq qoʻlda, koʻproq tizim bilan ishlaydi.',
        tags: '#Avtomatlashtirish #Panel' },

      { t: 'Bor loyihani tuzatish', y: 'avval audit', cat: 'TIKLASH',
        role: 'Audit · Refactor · Yakunlash',
        body: 'Oldingi dasturchi tashlab ketgan boʻlsa, kodni koʻrib chiqaman, poydevorini tuzataman va ishni oxirigacha olib boraman.',
        note: 'Natija: tashlab ketilgan loyiha yana harakatga keladi.',
        tags: '#Audit #Refactor' }
    ]
  },

  process: {
    label: 'jarayon',
    items: [
      { t: 'Bir gaplashamiz', y: 'bepul', cat: '1-QADAM',
        role: 'Yarim soat · Savol va javob',
        body: 'Nima kerakligini aytasiz, men savol beraman. Yarim soatdan keyin narx va muddat aniq boʻladi.',
        tags: '#Savol #Yoʻnalish #Reja' },

      { t: 'Birinchi ishlaydigan versiya', y: '2 hafta', cat: '2-QADAM',
        role: 'Eng kerakli qism birinchi',
        body: 'Butun loyihani kutmaysiz. Eng kerakli qismni erta koʻrasiz, oʻzgartirish aytasiz va yoʻnalish aniq boʻladi.',
        tags: '#Dizayn #Kod #Tizim' },

      { t: 'Topshiraman, oʻrgataman', y: 'topshirish', cat: '3-QADAM',
        role: 'Kod sizniki · 1 oy qoʻllab-quvvatlash',
        body: 'Kod sizniki. Xodimlaringizga ishlatishni koʻrsataman va bir oy bepul qoʻllab turaman.',
        tags: '#Deploy #Topshirish #Yordam' }
    ]
  }
};

const PAGES = {
  about: {
    path: '/men', tag: '',
    html: `
      <div class="d-title">Mahmud Ulashev</div>
      <div class="d-meta">DASTURCHI · 4 YIL</div>
      <div class="d-para">Dizayn, interfeys, server va ular orasidagi koʻrinmas ish. Siz bitta odam bilan gaplashasiz — butun natijaga bitta odam javob beradi.</div>
      <div class="d-para">Gʻoya sizdan — ishlaydigan mahsulot mendan.</div>
      <div class="d-sub">RAQAMLARDA</div>
      <div class="d-role"><b>4</b>yil tajriba · 2022-yildan beri</div>
      <div class="d-role"><b>3</b>ishlab turgan mahsulot</div>
      <div class="d-role"><b>500+</b>film uz-film bazasida</div>
      <div class="d-role"><b>10+</b>savol turi quizo.uz’da</div>
      <div class="d-sub">HOZIR</div>
      <div class="d-role"><b>holat</b>Yangi loyiha uchun joy bor</div>
      <div class="d-role"><b>javob</b>1 kun ichida</div>
      <div class="d-role"><b>tillar</b>UZ · RU · EN</div>`
  },
  write: {
    path: '/yozish', tag: '',
    html: `
      <div class="d-title">Loyihangiz bormi?</div>
      <div class="d-meta">1 KUN ICHIDA JAVOB</div>
      <div class="d-para">Hajmini bilmasangiz ham yozing. Men kerakli savollarni berib, birinchi ishlaydigan qadamni aniqlab beraman.</div>
      <div class="d-sub">QISQACHA YOZING</div>
      <ul class="d-list">
        <li><span>nima kerak</span></li>
        <li><span>hozir qayerdasiz</span></li>
        <li><span>qachongacha kerak</span></li>
      </ul>
      <a class="d-open" href="https://t.me/mahmud_ulashev" target="_blank" rel="noopener">Telegramda yozing →</a>`
  },
  contact: {
    path: '/aloqa', tag: '',
    html: `
      <div class="d-title">Aloqa</div>
      <div class="d-meta">TELEGRAMDA TEZROQ JAVOB</div>
      <div class="d-para">Telegramda qisqacha yozing: nima kerak, hozir qayerdasiz va qachongacha kerak.</div>
      <div class="d-role"><b>telegram</b><a class="d-a" href="https://t.me/mahmud_ulashev" target="_blank" rel="noopener">@mahmud_ulashev</a></div>
      <div class="d-role"><b>telefon</b><a class="d-a" href="tel:+998770343444">+998 77 034 34 44</a></div>
      <div class="d-role"><b>pochta</b><a class="d-a" href="mailto:maxmud_ulashev@ilma.uz">maxmud_ulashev@ilma.uz</a></div>
      <div class="d-role"><b>github</b><a class="d-a" href="https://github.com/mahmud-ulashev" target="_blank" rel="noopener">mahmud-ulashev</a></div>
      <div class="d-role"><b>sayt</b>ulashev.uz</div>`
  }
};

const CHANGELOG = [
  { d: '2026', lines: ['· quizo.uz test builder yangilandi'] },
  { d: '2026', lines: ['· take-ielts band score qoʻshildi'] },
  { d: '2026', lines: ['· uz-film 500+ filmga yetdi'] }
];

const LEGENDS = {
  off:    [['P', 'YOQISH'], ['M', 'TOVUSH']],
  menu:   [['↑ ↓', 'TANLASH'], ['← →', 'BOʻLIMLAR'], ['↵', 'OCHISH'], ['⌥ ← ↑ → ↓', 'KANAL'], ['P', 'OʻCHIRISH'], ['M', 'TOVUSH']],
  detail: [['← →', 'OLDINGI / KEYINGI'], ['↑ ↓', 'SURISH'], ['⌥ ← ↑ → ↓', 'KANAL'], ['ESC', 'ORQAGA'], ['P', 'OʻCHIRISH'], ['M', 'TOVUSH']],
  page:   [['↑ ↓', 'SURISH'], ['⌥ ← ↑ → ↓', 'KANAL'], ['ESC', 'ORQAGA'], ['P', 'OʻCHIRISH'], ['M', 'TOVUSH']]
};

/* ---------- state & dom ------------------------------------- */

const TABS = ['work', 'services', 'process'];
const S = { on: false, tab: 'work', sel: 0, view: 'off', channel: 'work', item: 0 };

const $ = (s) => document.querySelector(s);
const el = {
  html: document.documentElement, crt: $('#crt'),
  tabs: $('#tabs'), list: $('#list'), cmd: $('#cmd'),
  menuPath: $('#menuPath'), menuCount: $('#menuCount'),
  crumb: $('#crumb'), detNo: $('#detNo'), dbody: $('#dbody'),
  dfoot: $('#dfoot'), pgPos: $('#pgPos'),
  pgPath: $('#pgPath'), pgTag: $('#pgTag'), pageBody: $('#pageBody'),
  pgFoot: $('#pgFoot'),
  legend: $('#keylegend'), changelog: $('#changelog'),
  scaler: $('#scaler'),
  power: $('#power'), back: $('#backbtn'), knob: $('#knob'), wheel: $('#wheel')
};
const dirs = { work: $('#dWork'), write: $('#dWrite'), about: $('#dAbout'), contact: $('#dContact') };
for (const [k, n] of Object.entries(dirs)) setIcon(n, k);

/* ---------- scaling: keep the device at 370px, shrink to fit - */

const mqMobile = matchMedia('(max-width: 640px) and (min-height: 521px)');
const isTouch = matchMedia('(hover: none)').matches;

function fit() {
  if (mqMobile.matches) { el.scaler.style.setProperty('--s', 1); return; }
  const s = Math.min(1, (innerWidth - 40) / 370, (innerHeight - 46) / (648 + 44));
  el.scaler.style.setProperty('--s', s.toFixed(4));
}
let fitQueued = false;
addEventListener('resize', () => {
  if (fitQueued) return;
  fitQueued = true;
  requestAnimationFrame(() => { fitQueued = false; fit(); });
}, { passive: true });
fit();

/* ---------- furniture ---------------------------------------- */

el.changelog.innerHTML = '<div class="cl-title">OʻZGARISHLAR</div>' + CHANGELOG.map(c =>
  `<div class="cl-date">${c.d}</div>` + c.lines.map(l => `<div class="cl-item">${l}</div>`).join('')
).join('');

function legend(kind) {
  el.legend.innerHTML = LEGENDS[kind].map(([k, v]) =>
    `<li><span class="k">${k}</span><span>${v}</span></li>`).join('');
}

el.tabs.innerHTML = TABS.map(k =>
  `<button class="tab" data-tab="${k}">${DATA[k].label}</button>`).join('');

/* ---------- views -------------------------------------------- */

function setView(v) {
  S.view = v;
  document.querySelectorAll('.view').forEach(n =>
    n.classList.toggle('is-active', n.dataset.view === v));
  legend(S.on ? v : 'off');
  if (v === 'menu' && !isTouch) setTimeout(() => el.cmd.focus({ preventScroll: true }), 20);
  else el.cmd.blur();
}

function markChannel() {
  for (const [k, n] of Object.entries(dirs)) n.classList.toggle('is-on', S.on && S.channel === k);
}

function renderMenu() {
  const d = DATA[S.tab];
  el.menuPath.textContent = '/' + d.label.replace(' ', '-');
  el.menuCount.textContent = `${d.items.length} ta`;
  el.cmd.placeholder = `raqam yozing: 1–${d.items.length}`;
  document.querySelectorAll('.tab').forEach(b =>
    b.classList.toggle('is-on', b.dataset.tab === S.tab));
  el.list.innerHTML = d.items.map((it, i) => `
    <button class="row" data-i="${i}">
      <span class="row-n">${String(i + 1).padStart(2, '0')}</span>
      <span class="row-t">${it.t}</span>
      ${it.f ? `<span class="row-f">${it.f}</span>` : ''}
      <span class="row-y">${it.y}</span>
    </button>`).join('');
}

function openDetail(i) {
  SFX.open();
  const items = DATA[S.tab].items;
  S.item = ((i % items.length) + items.length) % items.length;
  const it = items[S.item];
  el.crumb.innerHTML =
    `<span class="seg">${DATA[S.tab].label}</span><span class="sep">/</span><span class="seg">${it.t.toLowerCase()}</span>`;
  el.detNo.textContent = `№ ${S.item + 1}`;
  el.dbody.innerHTML = `
    <div class="d-title">${it.t}</div>
    <div class="d-meta"><span class="yr">${it.y}</span> · ${it.cat}</div>
    <div class="d-role"><b>rol</b>${it.role}</div>
    <div class="d-para">${it.body}</div>
    ${it.note ? `<div class="d-note">${it.note}</div>` : ''}
    <div class="d-tags">${it.tags}</div>
    ${it.link ? `<a class="d-open" href="${it.link}" target="_blank" rel="noopener">Loyihani ochish →</a>` : ''}`;
  el.dbody.scrollTop = 0;
  el.pgPos.textContent = `${S.item + 1} / ${items.length}`;
  setFootFor(it);
  setView('detail');
}

function openPage(name) {
  SFX.open();
  const p = PAGES[name];
  el.pgPath.textContent = p.path;
  el.pgTag.textContent = p.tag;
  el.pageBody.innerHTML = p.html;
  el.pageBody.scrollTop = 0;
  setView('page');
}

function openChannel(name) {
  S.channel = name;
  markChannel();
  if (name === 'work') { renderMenu(); setView('menu'); }
  else openPage(name);
}

function goBack() {
  if (!S.on) return;
  SFX.back();
  if (S.view !== 'menu') openChannel('work');
}

/* localStorage, safely — private mode and blocked storage both throw */
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} }
};

/* ---------- tovush ------------------------------------------
   Hammasi Web Audio bilan sintez qilinadi — hech qanday audio
   fayl yoʻq. Kontekst birinchi bosishda ochiladi, chunki
   brauzerlar undan oldin ovozni bloklaydi.                 ---- */

const SFX = (() => {
  let ctx = null, master = null;
  let on = store.get('console-sfx') !== '0';

  const ensure = () => {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return ctx; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.22;
    master.connect(ctx.destination);
    return ctx;
  };

  const tone = ({ f = 800, to = null, type = 'square', dur = 0.05, gain = 1, at = 0 }) => {
    if (!on || !ensure()) return;
    const t0 = ctx.currentTime + at;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(f, t0);
    if (to) osc.frequency.exponentialRampToValueAtTime(Math.max(20, to), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.006);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(master);
    osc.start(t0); osc.stop(t0 + dur + 0.02);
  };

  const noise = ({ dur = 0.03, gain = 0.5, hp = 1200, at = 0 }) => {
    if (!on || !ensure()) return;
    const t0 = ctx.currentTime + at;
    const n = Math.max(1, Math.floor(ctx.sampleRate * dur));
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const src = ctx.createBufferSource(); src.buffer = buf;
    const f = ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = hp;
    const g = ctx.createGain(); g.gain.value = gain;
    src.connect(f).connect(g).connect(master);
    src.start(t0);
  };

  return {
    get on() { return on; },
    toggle() {
      on = !on;
      store.set('console-sfx', on ? '1' : '0');
      document.documentElement.dataset.sfx = on ? 'on' : 'off';
      if (on) { ensure(); tone({ f: 660, to: 990, dur: 0.07, gain: 0.5 }); }
      return on;
    },
    prime() { ensure(); },
    tick()  { tone({ f: 1500, type: 'square',   dur: 0.022, gain: 0.16 }); noise({ dur: 0.014, gain: 0.10, hp: 3000 }); },
    click() { tone({ f: 320,  type: 'triangle', dur: 0.045, gain: 0.30 }); noise({ dur: 0.026, gain: 0.24, hp: 1800 }); },
    open()  { tone({ f: 620,  to: 940, type: 'square', dur: 0.075, gain: 0.26 }); },
    back()  { tone({ f: 720,  to: 420, type: 'square', dur: 0.075, gain: 0.22 }); },
    powerOn() {
      noise({ dur: 0.05, gain: 0.35, hp: 700 });
      tone({ f: 150, to: 780, type: 'sawtooth', dur: 0.22, gain: 0.30 });
      tone({ f: 1250, type: 'sine', dur: 0.5, gain: 0.05, at: 0.12 });
    },
    powerOff() {
      tone({ f: 700, to: 90, type: 'sawtooth', dur: 0.26, gain: 0.28 });
      noise({ dur: 0.05, gain: 0.2, hp: 500, at: 0.02 });
    },
  };
})();

document.documentElement.dataset.sfx = SFX.on ? 'on' : 'off';

/* ---------- power -------------------------------------------- */

function powerOn() {
  if (S.on) return;
  S.on = true;
  SFX.prime(); SFX.powerOn();
  el.html.dataset.power = 'on';
  el.crt.classList.add('flash');
  setTimeout(() => el.crt.classList.remove('flash'), 320);
  openChannel(S.channel);
}
function powerOff() {
  if (!S.on) return;
  S.on = false;
  SFX.powerOff();
  el.html.dataset.power = 'off';
  S.channel = 'work'; S.tab = 'work'; S.sel = 0;
  markChannel();
  setView('off');
}
const togglePower = () => (S.on ? powerOff() : powerOn());

/* ---------- interactions ------------------------------------- */

el.power.addEventListener('click', togglePower);

/* while off, a tap anywhere on the screen or the shell wakes it */
document.querySelector('.screen').addEventListener('click', () => { if (!S.on) powerOn(); });
document.querySelector('.bezel').addEventListener('click', () => { if (!S.on) powerOn(); });
el.back.addEventListener('click', () => { if (!S.on) powerOn(); });
el.back.addEventListener('click', goBack);

el.knob.addEventListener('click', () => {
  SFX.click();
  if (!S.on) { powerOn(); return; }
  if (S.view === 'menu') openDetail(S.sel);
  else if (S.view === 'detail') openCurrentLink();
});

/* markaziy tugma / ↵ — ochiq loyihaning saytini ochadi */
function openCurrentLink() {
  const it = DATA[S.tab].items[S.item];
  if (it && it.link) {
    SFX.open();
    el.dfoot.textContent = 'ochilmoqda\u2026';
    window.open(it.link, '_blank', 'noopener,noreferrer');
    setTimeout(() => setFootFor(it), 900);
  } else {
    pulseFoot();
  }
}

/* the footer only promises an action when there is a link behind it */
function setFootFor(it) {
  el.dfoot.innerHTML = (it && it.link)
    ? 'ochish uchun <b>\u21b5</b> yoki <b>markaziy tugma</b> <b class="arr">\u25b8</b>'
    : '<span style="opacity:.7">\u2190 \u2192 oldingi / keyingi</span>';
}

function pulseFoot() {
  el.dfoot.style.transition = 'none';
  el.dfoot.style.color = 'var(--or-scr)';
  setTimeout(() => { el.dfoot.style.transition = 'color .5s'; el.dfoot.style.color = ''; }, 60);
}

el.tabs.addEventListener('click', (e) => {
  const b = e.target.closest('.tab'); if (!b) return;
  S.tab = b.dataset.tab; S.sel = 0;
  S.channel = 'work'; markChannel();
  renderMenu(); setView('menu');
});

el.list.addEventListener('click', (e) => {
  const r = e.target.closest('.row'); if (!r) return;
  openDetail(+r.dataset.i);
});

for (const [k, n] of Object.entries(dirs))
  n.addEventListener('click', () => { if (!S.on) powerOn(); else openChannel(k); });

$('#pgPrev').addEventListener('click', () => openDetail(S.item - 1));
$('#pgNext').addEventListener('click', () => openDetail(S.item + 1));

el.cmd.addEventListener('keydown', (e) => {
  e.stopPropagation();
  if (e.altKey) { altChannel(e); return; }
  const n = DATA[S.tab].items.length;
  if (e.key === 'Enter') {
    const v = parseInt(el.cmd.value.trim(), 10);
    el.cmd.value = '';
    if (!isNaN(v) && v >= 1 && v <= n) openDetail(v - 1);
    else if (isNaN(v)) openDetail(S.sel);
    e.preventDefault();
  } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    moveSel(e.key === 'ArrowUp' ? -1 : 1); e.preventDefault();
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    if (!el.cmd.value) { switchTab(e.key === 'ArrowLeft' ? -1 : 1); e.preventDefault(); }
  } else if (e.key === 'Escape') { el.cmd.blur(); }
  else if (e.key === 'p' || e.key === 'P') {
    if (!el.cmd.value) { togglePower(); e.preventDefault(); }
  }
});

function moveSel(d) {
  SFX.tick();
  const items = DATA[S.tab].items;
  S.sel = (S.sel + d + items.length) % items.length;
  document.querySelectorAll('.row').forEach(r =>
    r.classList.toggle('is-sel', +r.dataset.i === S.sel));
  const n = el.list.querySelector('.row.is-sel');
  if (n) n.scrollIntoView({ block: 'nearest' });
}
function switchTab(d) {
  SFX.tick();
  S.tab = TABS[(TABS.indexOf(S.tab) + d + TABS.length) % TABS.length];
  S.sel = 0; renderMenu();
}
function altChannel(e) {
  const map = { ArrowUp: 'work', ArrowLeft: 'write', ArrowRight: 'about', ArrowDown: 'contact' };
  if (map[e.key]) { openChannel(map[e.key]); e.preventDefault(); }
}

document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  if (e.key === 'p' || e.key === 'P') { togglePower(); e.preventDefault(); return; }
  if (!S.on) {
    if (e.key === 'Enter' || e.key === ' ') { powerOn(); e.preventDefault(); }
    return;
  }
  if (e.altKey) { altChannel(e); return; }

  if (S.view === 'menu') {
    if (e.key === 'ArrowUp')    { moveSel(-1); e.preventDefault(); }
    if (e.key === 'ArrowDown')  { moveSel(1);  e.preventDefault(); }
    if (e.key === 'ArrowLeft')  { switchTab(-1); e.preventDefault(); }
    if (e.key === 'ArrowRight') { switchTab(1);  e.preventDefault(); }
    if (e.key === 'Enter')      { openDetail(S.sel); e.preventDefault(); }
  } else if (S.view === 'detail') {
    if (e.key === 'ArrowLeft')  { openDetail(S.item - 1); e.preventDefault(); }
    if (e.key === 'ArrowRight') { openDetail(S.item + 1); e.preventDefault(); }
    if (e.key === 'ArrowUp')    { el.dbody.scrollBy({ top: -40 }); e.preventDefault(); }
    if (e.key === 'ArrowDown')  { el.dbody.scrollBy({ top: 40 });  e.preventDefault(); }
    if (e.key === 'Enter')      { openCurrentLink(); e.preventDefault(); }
  } else if (S.view === 'page') {
    if (e.key === 'ArrowUp')    { $('#pageBody').scrollBy({ top: -40 }); e.preventDefault(); }
    if (e.key === 'ArrowDown')  { $('#pageBody').scrollBy({ top: 40 });  e.preventDefault(); }
  }
  if (e.key === 'Escape' || e.key === 'Backspace') { goBack(); e.preventDefault(); }
});

/* wheel drag = turn the channel dial */
(function wheelDrag() {
  let dragging = false, a0 = 0, acc = 0;
  const ORDER = ['work', 'write', 'about', 'contact'];
  const angle = (ev) => {
    const r = el.wheel.getBoundingClientRect();
    return Math.atan2(ev.clientY - (r.top + r.height / 2), ev.clientX - (r.left + r.width / 2));
  };
  el.wheel.addEventListener('pointerdown', (ev) => {
    if (!S.on) return;
    dragging = true; acc = 0; a0 = angle(ev);
    el.wheel.setPointerCapture(ev.pointerId);
  });
  el.wheel.addEventListener('pointermove', (ev) => {
    if (!dragging) return;
    const a = angle(ev);
    let d = a - a0; a0 = a;
    if (d > Math.PI) d -= 2 * Math.PI;
    if (d < -Math.PI) d += 2 * Math.PI;
    acc += d;
    const step = Math.PI / 2;
    while (acc > step)  { acc -= step; turn(1); }
    while (acc < -step) { acc += step; turn(-1); }
  });
  const turn = (d) => {
    const i = ORDER.indexOf(S.channel);
    openChannel(ORDER[(i + d + ORDER.length) % ORDER.length]);
  };
  addEventListener('pointerup', () => { dragging = false; });
})();

/* 3d tilt — active only while the cursor is over the device.
   Ported from sv-animations Tilt Card (MIT): tiltLimit, hover scale,
   perspective 1200, cursor spotlight.
   The rAF loop parks itself once the spring settles, so an idle page
   costs nothing. */
(function tilt() {
  if (isTouch) return;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const dev = document.getElementById('device');
  const TILT_LIMIT = 10;
  const SCALE = 1.02;
  const EDGE = 8;      // hysteresis so tilting near the rim cannot oscillate
  const EPS = 0.005;   // settle threshold

  let tx = 0, ty = 0, ts = 1;
  let cx = 0, cy = 0, cs = 1;
  let inside = false, raf = null;

  const frame = () => {
    cx += (tx - cx) * 0.09;
    cy += (ty - cy) * 0.09;
    cs += (ts - cs) * 0.09;
    dev.style.setProperty('--rx', cx.toFixed(3) + 'deg');
    dev.style.setProperty('--ry', cy.toFixed(3) + 'deg');
    dev.style.setProperty('--tscale', cs.toFixed(4));

    if (Math.abs(tx - cx) < EPS && Math.abs(ty - cy) < EPS && Math.abs(ts - cs) < EPS) {
      dev.style.setProperty('--rx', tx.toFixed(3) + 'deg');
      dev.style.setProperty('--ry', ty.toFixed(3) + 'deg');
      dev.style.setProperty('--tscale', ts.toFixed(4));
      dev.style.willChange = '';     // release the compositor layer when idle
      raf = null;
      return;
    }
    raf = requestAnimationFrame(frame);
  };
  const kick = () => {
    if (raf !== null) return;
    dev.style.willChange = 'transform';
    raf = requestAnimationFrame(frame);
  };

  const rest = () => { inside = false; tx = 0; ty = 0; ts = 1; dev.style.setProperty('--spot-o', '0'); kick(); };

  addEventListener('pointermove', (ev) => {
    const r = dev.getBoundingClientRect();
    const m = inside ? EDGE : 0;
    const hit = ev.clientX >= r.left - m && ev.clientX <= r.right + m &&
                ev.clientY >= r.top  - m && ev.clientY <= r.bottom + m;
    if (!hit) { if (inside) rest(); return; }

    inside = true;
    const nx = (ev.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const ny = (ev.clientY - (r.top + r.height / 2)) / (r.height / 2);
    ty = Math.max(-1, Math.min(1, nx)) * TILT_LIMIT;
    tx = Math.max(-1, Math.min(1, -ny)) * TILT_LIMIT;
    ts = SCALE;
    dev.style.setProperty('--spot-x', ((ev.clientX - r.left) / r.width * 100).toFixed(1) + '%');
    dev.style.setProperty('--spot-y', ((ev.clientY - r.top) / r.height * 100).toFixed(1) + '%');
    dev.style.setProperty('--spot-o', '1');
    kick();
  }, { passive: true });

  dev.addEventListener('pointerleave', rest, { passive: true });
  document.addEventListener('mouseleave', rest, { passive: true });
  addEventListener('blur', rest, { passive: true });
})();

/* touch copy in the detail footer */
if (isTouch) {
  el.dfoot.innerHTML = 'tap the <b>centre button</b> to open <b class="arr">\u25b8</b>';
}

const speaker = $('#speaker');
if (speaker) speaker.addEventListener('click', (e) => { e.stopPropagation(); SFX.toggle(); });
addEventListener('keydown', (e) => {
  if ((e.key === 'm' || e.key === 'M') && e.target.tagName !== 'INPUT') SFX.toggle();
});

/* ---------- init --------------------------------------------- */
legend('off');
renderMenu();
markChannel();
setView('off');
