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

/* ---------- Supabase (REST directly — no SDK, page stays dependency-free)
   Fill these in and the guestbook goes live; leave blank and it falls back
   to this browser's localStorage so the page still works offline.       ---- */
const SUPABASE = {
  url: 'https://rfvaiiqbspsivbastyrj.supabase.co',
  key: 'sb_publishable__caHvbnYFQ-_VVKH1oM4ig_FkySFiS3'
};
const sbLive = () => Boolean(SUPABASE.url && SUPABASE.key);
const sbHeaders = (extra) => Object.assign(
  { apikey: SUPABASE.key, Authorization: `Bearer ${SUPABASE.key}` }, extra || {});

async function sbList() {
  const q = '/rest/v1/stamps?select=nickname,message,seal,ink,size,x,y,created_at' +
            '&approved=is.true&order=created_at.desc&limit=50';
  const r = await fetch(SUPABASE.url + q, { headers: sbHeaders() });
  if (!r.ok) throw new Error('list ' + r.status);
  return r.json();
}
async function sbInsert(row) {
  const r = await fetch(SUPABASE.url + '/rest/v1/stamps', {
    method: 'POST',
    headers: sbHeaders({ 'Content-Type': 'application/json', Prefer: 'return=minimal' }),
    body: JSON.stringify(row)
  });
  if (!r.ok) throw new Error('insert ' + r.status);
}

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
      <div class="d-meta">DASTURCHI · 4 YIL · TOSHKENT</div>
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
  off:    [['P', 'YOQISH']],
  menu:   [['↑ ↓', 'TANLASH'], ['← →', 'BOʻLIMLAR'], ['↵', 'OCHISH'], ['⌥ ← ↑ → ↓', 'KANAL'], ['P', 'OʻCHIRISH']],
  detail: [['← →', 'OLDINGI / KEYINGI'], ['↑ ↓', 'AYLANTIRISH'], ['⌥ ← ↑ → ↓', 'KANAL'], ['ESC', 'ORQAGA'], ['P', 'OʻCHIRISH']],
  page:   [['↑ ↓', 'AYLANTIRISH'], ['⌥ ← ↑ → ↓', 'KANAL'], ['ESC', 'ORQAGA'], ['P', 'OʻCHIRISH']]
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
  guest: $('#guestbookLine'), scaler: $('#scaler'),
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

/* guestbook countdown (persisted when storage allows) */
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} }
};
let guestLeft = (() => {
  const raw = store.get('console-guest-t');
  const n = raw === null ? 60 : parseInt(raw, 10);
  return isNaN(n) || n < 0 || n > 60 ? 60 : n;
})();
(function guestbook() {
  const tick = () => {
    if (guestLeft <= 0) {
      store.set('console-guest-t', 0);
      unlockGuestbook();
      return;
    }
    el.guest.textContent = `ochiladi: ${Math.floor(guestLeft / 60)}:${String(guestLeft % 60).padStart(2, '0')}`;
    guestLeft--; store.set('console-guest-t', guestLeft);
    setTimeout(tick, 1000);
  };
  /* deferred one turn: unlockGuestbook() touches gbEl, which is declared
     further down this file and would still be in its temporal dead zone. */
  setTimeout(tick, 0);
})();
const guestOpen = () => guestLeft <= 0;

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
  el.cmd.placeholder = `1–${d.items.length} raqamini yozing`;
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
  setView('detail');
}

function openPage(name) {
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
  if (S.view !== 'menu') openChannel('work');
}

/* ---------- shared helpers ------------------------------------ */

const USER = { nick: null };
USER.nick = store.get('console-nick') || null;

const esc = (t) => String(t).replace(/[&<>"]/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const localStamps = () => { try { return JSON.parse(store.get('console-stamps') || '[]'); } catch { return []; } };
const saveLocal = (all) => store.set('console-stamps', JSON.stringify(all.slice(0, 50)));

/* ---------- guestbook: the stamp wall -------------------------
   Flow mirrors the original: open the panel, type a name, choose a
   seal design / ink / size, then place the stamp on the wall.
   The seal artwork below is drawn here, in code.               ---- */

const INKS = [
  { id: 'coal',  c: '#2b2e33' },
  { id: 'slate', c: '#55606b' },
  { id: 'teal',  c: '#2f6b6e' },
  { id: 'gold',  c: '#9a7526' },
  { id: 'chalk', c: '#f6f8fa' }
];
const inkOf = (id) => (INKS.find(i => i.id === id) || INKS[1]).c;

const SIZES = { s: 72, m: 91 };

/* six frames, each drawn from primitives */
const FRAMES = {
  a: (k) => `<circle cx="60" cy="60" r="47" ${k(1.3)}/><circle cx="60" cy="60" r="41" ${k(0.8)}/>` +
            Array.from({ length: 24 }, (_, i) => {
              const a = (i / 24) * Math.PI * 2;
              return `<line x1="${(60+Math.cos(a)*41).toFixed(1)}" y1="${(60+Math.sin(a)*41).toFixed(1)}"
                            x2="${(60+Math.cos(a)*37).toFixed(1)}" y2="${(60+Math.sin(a)*37).toFixed(1)}" ${k(0.7)}/>`;
            }).join(''),
  b: (k) => `<rect x="14" y="14" width="92" height="92" ${k(1.3)}/><rect x="21" y="21" width="78" height="78" ${k(0.8)}/>` +
            [[14,14],[106,14],[14,106],[106,106]].map(([x,y]) =>
              `<circle cx="${x}" cy="${y}" r="2.4" ${k(1)}/>`).join(''),
  c: (k) => `<rect x="13" y="26" width="94" height="68" rx="9" ${k(1.3)}/>` +
            `<rect x="19" y="32" width="82" height="56" rx="6" ${k(0.7)}/>`,
  d: (k) => {
        const oct = (r) => Array.from({ length: 8 }, (_, i) => {
          const a = Math.PI / 8 + (i / 8) * Math.PI * 2;
          return `${(60+Math.cos(a)*r).toFixed(1)},${(60+Math.sin(a)*r).toFixed(1)}`;
        }).join(' ');
        return `<polygon points="${oct(47)}" ${k(1.3)}/><polygon points="${oct(40)}" ${k(0.8)}/>`;
      },
  e: (k) => `<rect x="15" y="15" width="90" height="90" rx="4" ${k(1.2)}/>` +
            `<circle cx="60" cy="60" r="39" ${k(1)}/>` +
            [[26,26],[94,26],[26,94],[94,94]].map(([x,y]) => `<circle cx="${x}" cy="${y}" r="1.8" ${k(1)}/>`).join(''),
  f: (k) => `<circle cx="60" cy="60" r="40" ${k(1.1)}/>` +
            Array.from({ length: 20 }, (_, i) => {
              const a = (i / 20) * Math.PI * 2;
              return `<circle cx="${(60+Math.cos(a)*46).toFixed(1)}" cy="${(60+Math.sin(a)*46).toFixed(1)}" r="3.1" ${k(0.7)}/>`;
            }).join('')
};
const DESIGNS = Object.keys(FRAMES);

function sealSVG(design, inkId, name, when) {
  const ink = inkOf(inkId);
  const k = (w) => `fill="none" stroke="${ink}" stroke-width="${w}"`;
  const d = when ? new Date(when) : new Date();
  const p2 = (n) => String(n).padStart(2, '0');
  const date = `${p2(d.getDate())}.${p2(d.getMonth() + 1)}.${String(d.getFullYear()).slice(2)}`;
  const off  = -d.getTimezoneOffset() / 60;
  const time = `${p2(d.getHours())}:${p2(d.getMinutes())} GMT${off >= 0 ? '+' : ''}${off}`;
  const nm   = (name || 'NAME').slice(0, 12);
  const fs   = nm.length > 9 ? 10 : nm.length > 6 ? 12 : 14;

  return `<svg viewBox="0 0 120 120" role="img" aria-label="${esc(nm)}">
    ${FRAMES[design] ? FRAMES[design](k) : FRAMES.a(k)}
    <text x="60" y="58" text-anchor="middle" fill="${ink}"
      style="font-family:'Libre Baskerville',Georgia,serif;font-size:${fs}px">${esc(nm)}</text>
    <line x1="36" y1="65" x2="84" y2="65" stroke="${ink}" stroke-width="0.6"/>
    <text x="60" y="75" text-anchor="middle" fill="${ink}" style="font-family:var(--mono);font-size:5.6px">${date}</text>
    <text x="60" y="83" text-anchor="middle" fill="${ink}" style="font-family:var(--mono);font-size:5.6px">${time}</text>
  </svg>`;
}

const GB = { design: 'a', ink: 'slate', size: 'm', armed: false, marks: [], loaded: false };

const gbEl = {
  root: $('#gb'), btn: $('#gbBtn'), hint: $('#gbHint'), count: $('#gbCount'),
  wall: $('#wall'), inner: $('#wallInner'),
  panel: $('#gbPanel'), name: $('#gbpName'), rail: $('#gbpRail'),
  inks: $('#gbpInks'), sizes: $('#gbpSizes'), go: $('#gbpGo'),
  note: $('#gbpNote'), close: $('#gbpClose')
};

/* ---- panel ---- */
function paintRail() {
  gbEl.rail.innerHTML = DESIGNS.map(d => `
    <button class="tile" role="radio" data-design="${d}" aria-checked="${d === GB.design}"
            aria-label="Design ${d}">${sealSVG(d, GB.ink, gbEl.name.value.trim() || 'NAME')}</button>`).join('');
}
function paintInks() {
  gbEl.inks.innerHTML = INKS.map(i => `
    <button class="ink" role="radio" data-ink="${i.id}" aria-checked="${i.id === GB.ink}"
            aria-label="${i.id}"><span style="--c:${i.c}"></span></button>`).join('');
}

gbEl.rail.addEventListener('click', (e) => {
  const b = e.target.closest('.tile'); if (!b) return;
  GB.design = b.dataset.design; paintRail();
});
gbEl.inks.addEventListener('click', (e) => {
  const b = e.target.closest('.ink'); if (!b) return;
  GB.ink = b.dataset.ink; paintInks(); paintRail();
});
gbEl.sizes.addEventListener('click', (e) => {
  const b = e.target.closest('button'); if (!b) return;
  GB.size = b.dataset.size;
  gbEl.sizes.querySelectorAll('button').forEach(n => n.setAttribute('aria-checked', String(n === b)));
});
gbEl.name.addEventListener('input', () => {
  gbEl.name.value = gbEl.name.value.replace(/\s+/g, '');   // one word
  paintRail();
});
gbEl.name.addEventListener('keydown', (e) => {
  e.stopPropagation();
  if (e.key === 'Enter') gbEl.go.click();
  if (e.key === 'Escape') closePanel();
});

function openPanel() {
  gbEl.panel.hidden = false;
  gbEl.name.value = USER.nick || '';
  gbEl.note.textContent = '';
  paintRail(); paintInks();
  setTimeout(() => gbEl.name.focus({ preventScroll: true }), 30);
}
function closePanel() { gbEl.panel.hidden = true; disarm(); }

gbEl.close.addEventListener('click', closePanel);
gbEl.btn.addEventListener('click', () => (gbEl.panel.hidden ? openPanel() : closePanel()));

/* ---- arming & placing ---- */
gbEl.go.addEventListener('click', () => {
  const nm = gbEl.name.value.trim();
  if (!nm) { gbEl.name.focus(); gbEl.note.textContent = 'avval ism kiriting'; return; }
  USER.nick = nm.slice(0, 14);
  store.set('console-nick', USER.nick);
  GB.armed ? disarm() : arm();
});

function arm() {
  GB.armed = true;
  gbEl.go.dataset.armed = 'true';
  gbEl.go.textContent = 'Endi devorni bosing \u2190';
  gbEl.wall.classList.add('is-placing');
  gbEl.note.textContent = 'bekor qilish: esc';
}
function disarm() {
  GB.armed = false;
  gbEl.go.dataset.armed = 'false';
  gbEl.go.innerHTML = 'Muhrni bosing &rarr;';
  gbEl.wall.classList.remove('is-placing');
}
addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && GB.armed) { disarm(); gbEl.note.textContent = ''; e.stopPropagation(); }
}, true);

gbEl.wall.addEventListener('click', async (e) => {
  if (!GB.armed) return;
  const r = gbEl.wall.getBoundingClientRect();
  const row = {
    nickname: USER.nick,
    message: null,
    seal: GB.design, ink: GB.ink, size: GB.size,
    x: +(((e.clientX - r.left) / r.width) * 100).toFixed(2),
    y: +(((e.clientY - r.top) / r.height) * 100).toFixed(2)
  };
  disarm();
  renderMark({ ...row, created_at: new Date().toISOString() }, true);
  updateCount();

  if (sbLive()) {
    try { await sbInsert(row); gbEl.note.textContent = 'muhr bosildi \u2014 tasdiqlangach koʻrinadi'; }
    catch { keepLocal(row); gbEl.note.textContent = 'oflayn \u2014 shu qurilmada saqlandi'; }
  } else {
    keepLocal(row); gbEl.note.textContent = 'shu qurilmada saqlandi';
  }
  setTimeout(closePanel, 1400);
});

function keepLocal(row) {
  const all = localStamps();
  all.unshift({ ...row, created_at: new Date().toISOString() });
  saveLocal(all);
}

function renderMark(st, pending) {
  if (st.x == null || st.y == null) return;
  const n = document.createElement('div');
  n.className = 'mark' + (pending ? ' is-pending' : '');
  n.style.cssText = `left:${st.x}%;top:${st.y}%;--sz:${SIZES[st.size] || 91}px;` +
    `--rot:${(Math.random() * 16 - 8).toFixed(1)}deg;--op:${st.ink === 'chalk' ? 0.9 : 0.82}`;
  n.innerHTML = sealSVG(st.seal, st.ink, st.nickname, st.created_at);
  gbEl.inner.appendChild(n);
  GB.marks.push(st);
}

function updateCount() {
  const n = GB.marks.length;
  gbEl.count.textContent = n ? `devorda ${n} ta` : '';
}

async function loadWall() {
  if (GB.loaded) return;
  GB.loaded = true;
  let rows = [];
  if (sbLive()) { try { rows = await sbList(); } catch { rows = localStamps(); } }
  else { rows = localStamps(); }
  rows.filter(r => r.x != null).forEach(r => renderMark(r, false));
  updateCount();
}

function unlockGuestbook() {
  gbEl.root.dataset.state = 'open';
  el.guest.textContent = 'izingizni qoldiring';
  loadWall();
}

/* ---------- power -------------------------------------------- */

function powerOn() {
  if (S.on) return;
  S.on = true;
  el.html.dataset.power = 'on';
  el.crt.classList.add('flash');
  setTimeout(() => el.crt.classList.remove('flash'), 320);
  openChannel(S.channel);
}
function powerOff() {
  if (!S.on) return;
  S.on = false;
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
  if (!S.on) { powerOn(); return; }
  if (S.view === 'menu') openDetail(S.sel);
  else if (S.view === 'detail') pulseFoot();
});

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
  const items = DATA[S.tab].items;
  S.sel = (S.sel + d + items.length) % items.length;
  document.querySelectorAll('.row').forEach(r =>
    r.classList.toggle('is-sel', +r.dataset.i === S.sel));
  const n = el.list.querySelector('.row.is-sel');
  if (n) n.scrollIntoView({ block: 'nearest' });
}
function switchTab(d) {
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
    if (e.key === 'Enter')      { pulseFoot(); e.preventDefault(); }
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

/* ---------- init --------------------------------------------- */
legend('off');
renderMenu();
markChannel();
setView('off');
