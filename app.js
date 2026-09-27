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

/* ---------- content ------------------------------------------
   Ikki til bitta joyda. Yangi matn qoʻshsangiz, ikkalasiga ham
   qoʻshing — `setLang` faqat shu obyektdan oʻqiydi.
   Two languages, one place. Add copy to both — `setLang` reads
   nothing but this object.
   ------------------------------------------------------------ */

const LANGS = ['uz', 'en'];

const I18N = {

/* ═══════════════════════════ OʻZBEKCHA ═══════════════════════ */
uz: {
  htmlLang: 'uz',
  docTitle: 'Mahmud Ulashev — Dasturchi va mahsulot dizayneri',
  docDesc:  'Mahmud Ulashev dizayn, kod va serverni birlashtirib ishlaydigan raqamli mahsulotlar yaratadi. 4 yil tajriba.',

  ui: {
    count:       (n) => `${n} ta`,
    promptPh:    (n) => `raqam yozing: 1–${n}`,
    no:          '№',
    hint:        'ochish uchun bosing',
    openFoot:    'ochish uchun <b>↵</b> yoki <b>markaziy tugma</b> <b class="arr">▸</b>',
    openFootTap: 'ochish uchun <b>markaziy tugma</b>ni bosing <b class="arr">▸</b>',
    navFoot:     '<span style="opacity:.7">← → oldingi / keyingi</span>',
    opening:     'ochilmoqda…',
    openLink:    'Loyihani ochish →',
    backFoot:    'qaytish uchun <b>esc</b> yoki <b>back</b>',
    prev:        'oldingi',
    next:        'keyingi',
    roleLabel:   'rol',
    offTitle:    'YOQISH UCHUN <kbd>P</kbd>',
    offTitleTap: 'YOQISH UCHUN EKRANGA BOSING',
    offSub:      'YOKI EKRANGA BOSING',
    changelog:   'OʻZGARISHLAR',
    keyboard:    'KLAVIATURA',
    langTitle:   'TIL',
    power:       'QUVVAT',
    back:        'ORQAGA',
    aria: {
      sound: 'Tovush', power: 'Quvvat', back: 'Orqaga', open: 'Ochish',
      wheel: 'Gʻildirak — kanalni oʻzgartirish',
      work: 'Ishlar', write: 'Yozish', about: 'Men haqimda', contact: 'Aloqa',
      lang: 'Sayt tili', langUz: 'Oʻzbekcha', langEn: 'Inglizcha'
    }
  },

  legends: {
    off:    [['P', 'YOQISH'], ['M', 'TOVUSH']],
    menu:   [['↑ ↓', 'TANLASH'], ['← →', 'BOʻLIMLAR'], ['↵', 'OCHISH'], ['⌥ ← ↑ → ↓', 'KANAL'], ['P', 'OʻCHIRISH'], ['M', 'TOVUSH']],
    detail: [['← →', 'OLDINGI / KEYINGI'], ['↑ ↓', 'SURISH'], ['⌥ ← ↑ → ↓', 'KANAL'], ['ESC', 'ORQAGA'], ['P', 'OʻCHIRISH'], ['M', 'TOVUSH']],
    page:   [['↑ ↓', 'SURISH'], ['⌥ ← ↑ → ↓', 'KANAL'], ['ESC', 'ORQAGA'], ['P', 'OʻCHIRISH'], ['M', 'TOVUSH']]
  },

  data: {
    work: {
      label: 'ishlar',
      items: [
        { t: 'Take-IELTS', y: '2026', f: '◉', cat: 'TAʼLIM · PLATFORMA',
          role: 'Toʼliq mahsulot: interfeys, test logikasi, AI baholash',
          body: 'Reading, Listening va Writing haqiqiy imtihon formatida: bir xil vaqt, savol turlari va ball jadvali. Writing inshosini AI IELTSʼning toʼrtta rasmiy mezoni boʼyicha baholaydi.',
          note: 'Natija: har urinish saqlanadi, band score dinamikasi grafikda.',
          tags: '#React #Vite #Supabase #AI',
          link: 'https://take-ielts.vercel.app' },

        { t: 'Satify', y: '2026', f: '◉', cat: 'TAʼLIM · PLATFORMA',
          role: 'Toʼliq mahsulot: imtihon interfeysi, himoya, server tomonda baholash',
          body: 'Digital SAT haqiqiy imtihon interfeysida: modullar, vaqt, kalkulyator, highlighter va javoblarni belgilash. Imtihon toʼliq ekranda himoyalangan, toʼgʼri javoblar brauzerga umuman yetib bormaydi.',
          note: 'Natija: 400–1600 shkalada ball, boʼlimlar tahlili va har savol boʼyicha izoh.',
          tags: '#Next.js #TypeScript #Supabase #Postgres',
          link: 'https://satify-uz.vercel.app' },

        { t: 'Atlas', y: '2026', f: '◉', cat: 'DASTURCHI ASBOBI · DESKTOP',
          role: 'Swift dvigatel, macOS va Windows klientlari',
          body: 'Muharrir fayllarni koʼrsatadi, kod esa graf boʼlib ishlaydi — Atlas oʼsha grafni chizadi: bogʼliqliklar xaritasi, oʼqish marshruti va topilmalar. Bitta Swift dvigateli ikkala platformada.',
          note: 'Natija: ikki platforma kodni bir xil oʼqiydi, farq chiqsa CI yiqiladi.',
          tags: '#Swift #SwiftUI #Avalonia',
          link: 'https://atlas-codemap.vercel.app' },

        { t: 'PrepPlanner', y: '2026', f: '◉', cat: 'TAʼLIM · DESKTOP',
          role: 'Native macOS ilova: rejalashtiruvchi, odatlar, analitika',
          body: 'IELTS va SAT tayyorgarligi uchun kunni bloklarga boʼlib rejalash, aslida nima qilinganini belgilash, har xatoni yozib borish va raqamlar oʼzgarishini kuzatish. Hamma narsa Macʼda qoladi: akkaunt ham, server ham yoʼq.',
          note: 'Natija: raw ball bandga oʼzi aylanadi, ball qoidalari unit testlar bilan himoyalangan.',
          tags: '#Swift #SwiftUI #SwiftData #SwiftCharts',
          link: 'https://prepplanner.vercel.app' },

        { t: 'XIV', y: '2026', f: '◉', cat: 'E-COMMERCE · DOʼKON',
          role: 'Figma dizayn tizimidan toʼliq frontend',
          body: 'Moda doʼkoni: filtrlar bilan katalog, galereya hamda rang va oʼlcham tanlovi bor mahsulot sahifasi, savat va jonli qidiruv. 393px gacha moslashadi.',
          note: 'Natija: Figma dizayn tizimi ishlaydigan doʼkonga aylandi.',
          tags: '#Next.js #React #TypeScript #Tailwind',
          link: 'https://cloth-store-gules.vercel.app' },

        { t: 'Orpheus', y: '2026', f: '◉', cat: 'FIGMAʼDAN KODGA',
          role: 'Piksel aniqligida qayta qurish, ikki mavzu',
          body: 'Dizayner portfoliosi Figma manbasidan bir-bir koʼchirildi. Shrift oʼlchami, harflar orasi va boʼlimlar ritmi koʼzga chamalab emas, dizaynning oʼzidan olingan. Ikki mavzu.',
          note: 'Natija: qurilgan sahifa 1728px artboardʼdan bir necha piksel farq qiladi.',
          tags: '#Next.js #TypeScript #Tailwind #Motion',
          link: 'https://orpheus-dusky.vercel.app' }
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
  },

  pages: {
    about: {
      path: '/men', tag: '',
      html: `
      <div class="d-title">Mahmud Ulashev</div>
      <div class="d-meta">DASTURCHI · 4 YIL</div>
      <div class="d-para">Dizayn, interfeys, server va ular orasidagi koʻrinmas ish. Siz bitta odam bilan gaplashasiz — butun natijaga bitta odam javob beradi.</div>
      <div class="d-para">Gʻoya sizdan — ishlaydigan mahsulot mendan.</div>
      <div class="d-sub">RAQAMLARDA</div>
      <div class="d-role"><b>4</b>yil tajriba · 2022-yildan beri</div>
      <div class="d-role"><b>6</b>ochiq loyiha</div>
      <div class="d-role"><b>3</b>IELTS boʻlimi take-ielts’da</div>
      <div class="d-role"><b>2</b>platforma atlas’da</div>
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
      <div class="d-actions">
        <a class="d-open" href="https://t.me/mahmud_ulashev" target="_blank" rel="noopener">Telegram →</a>
        <a class="d-open" href="mailto:mahmud@ulashev.uz">Email →</a>
      </div>`
    },
    contact: {
      path: '/aloqa', tag: '',
      html: `
      <div class="d-title">Aloqa</div>
      <div class="d-meta">TELEGRAMDA TEZROQ JAVOB</div>
      <div class="d-para">Telegramda qisqacha yozing: nima kerak, hozir qayerdasiz va qachongacha kerak.</div>
      <div class="d-role"><b>telegram</b><a class="d-a" href="https://t.me/mahmud_ulashev" target="_blank" rel="noopener">@mahmud_ulashev</a></div>
      <div class="d-role"><b>telefon</b><a class="d-a" href="tel:+998770343444">+998 77 034 34 44</a></div>
      <div class="d-role"><b>pochta</b><a class="d-a" href="mailto:mahmud@ulashev.uz">mahmud@ulashev.uz</a></div>
      <div class="d-role"><b>github</b><a class="d-a" href="https://github.com/mahmudulashev" target="_blank" rel="noopener">mahmudulashev</a></div>
      <div class="d-role"><b>sayt</b>ulashev.uz</div>`
    }
  },

  changelog: [
    { d: '2026', lines: ['· satify ishga tushdi'] },
    { d: '2026', lines: ['· prepplanner macOS uchun chiqdi'] },
    { d: '2026', lines: ['· atlas macOS va Windows uchun chiqdi'] },
    { d: '2026', lines: ['· take-ielts writing AI baholash'] },
    { d: '2026', lines: ['· xiv va orpheus ishga tushdi'] }
  ]
},

/* ═══════════════════════════ ENGLISH ═════════════════════════ */
en: {
  htmlLang: 'en',
  docTitle: 'Mahmud Ulashev — Developer and product designer',
  docDesc:  'Mahmud Ulashev builds digital products where design, code and the server are one job. Four years of experience.',

  ui: {
    count:       (n) => `${n} item${n === 1 ? '' : 's'}`,
    promptPh:    (n) => `type a number: 1–${n}`,
    no:          'No.',
    hint:        'press to open',
    openFoot:    'press <b>↵</b> or the <b>centre button</b> to open <b class="arr">▸</b>',
    openFootTap: 'tap the <b>centre button</b> to open <b class="arr">▸</b>',
    navFoot:     '<span style="opacity:.7">← → previous / next</span>',
    opening:     'opening…',
    openLink:    'Open the project →',
    backFoot:    'press <b>esc</b> or <b>back</b> to return',
    prev:        'previous',
    next:        'next',
    roleLabel:   'role',
    offTitle:    'PRESS <kbd>P</kbd> TO SWITCH ON',
    offTitleTap: 'TAP THE SCREEN TO SWITCH ON',
    offSub:      'OR TAP THE SCREEN',
    changelog:   'CHANGELOG',
    keyboard:    'KEYBOARD',
    langTitle:   'LANGUAGE',
    power:       'POWER',
    back:        'BACK',
    aria: {
      sound: 'Sound', power: 'Power', back: 'Back', open: 'Open',
      wheel: 'Wheel — change channel',
      work: 'Work', write: 'Write', about: 'About', contact: 'Contact',
      lang: 'Site language', langUz: 'Uzbek', langEn: 'English'
    }
  },

  legends: {
    off:    [['P', 'POWER'], ['M', 'SOUND']],
    menu:   [['↑ ↓', 'SELECT'], ['← →', 'SECTIONS'], ['↵', 'OPEN'], ['⌥ ← ↑ → ↓', 'CHANNEL'], ['P', 'POWER OFF'], ['M', 'SOUND']],
    detail: [['← →', 'PREVIOUS / NEXT'], ['↑ ↓', 'SCROLL'], ['⌥ ← ↑ → ↓', 'CHANNEL'], ['ESC', 'BACK'], ['P', 'POWER OFF'], ['M', 'SOUND']],
    page:   [['↑ ↓', 'SCROLL'], ['⌥ ← ↑ → ↓', 'CHANNEL'], ['ESC', 'BACK'], ['P', 'POWER OFF'], ['M', 'SOUND']]
  },

  data: {
    work: {
      label: 'work',
      items: [
        { t: 'Take-IELTS', y: '2026', f: '◉', cat: 'EDUCATION · PLATFORM',
          role: 'Whole product: interface, test logic, AI marking',
          body: 'Reading, Listening and Writing in the real exam format: the same timing, the same question types, the same band table. Writing essays are marked by AI against the four official IELTS criteria.',
          note: 'Result: every attempt is stored and band score progress is charted.',
          tags: '#React #Vite #Supabase #AI',
          link: 'https://take-ielts.vercel.app' },

        { t: 'Satify', y: '2026', f: '◉', cat: 'EDUCATION · PLATFORM',
          role: 'Whole product: exam interface, lockdown, server-side scoring',
          body: 'The digital SAT in an interface modelled on the real exam: modules, timers, calculator, highlighter and mark for review. The exam runs locked in full screen, and answer keys never reach the browser.',
          note: 'Result: scaled 400–1600 scores, a domain breakdown and an explanation for every question.',
          tags: '#Next.js #TypeScript #Supabase #Postgres',
          link: 'https://satify-uz.vercel.app' },

        { t: 'Atlas', y: '2026', f: '◉', cat: 'DEVELOPER TOOL · DESKTOP',
          role: 'Swift engine, macOS and Windows clients',
          body: 'Your editor shows files, but code runs as a graph — Atlas draws that graph: a dependency map, a reading route and findings. One Swift engine behind both platforms.',
          note: 'Result: both platforms read a codebase identically, and CI fails if they diverge.',
          tags: '#Swift #SwiftUI #Avalonia',
          link: 'https://atlas-codemap.vercel.app' },

        { t: 'PrepPlanner', y: '2026', f: '◉', cat: 'EDUCATION · DESKTOP',
          role: 'Native macOS app: planner, habits, analytics',
          body: 'IELTS and SAT preparation on one timeline: plan the day in blocks, mark what you actually did, log every mistake and watch the numbers move. Everything stays on your Mac — no accounts, no backend.',
          note: 'Result: raw scores turn into bands automatically, and the scoring rules are covered by unit tests.',
          tags: '#Swift #SwiftUI #SwiftData #SwiftCharts',
          link: 'https://prepplanner.vercel.app' },

        { t: 'XIV', y: '2026', f: '◉', cat: 'E-COMMERCE · STOREFRONT',
          role: 'Whole frontend from a Figma design system',
          body: 'A fashion storefront: a filtered catalogue, a product page with gallery and colour and size pickers, a shopping bag and live search. Responsive down to 393px.',
          note: 'Result: a Figma design system became a working storefront.',
          tags: '#Next.js #React #TypeScript #Tailwind',
          link: 'https://cloth-store-gules.vercel.app' },

        { t: 'Orpheus', y: '2026', f: '◉', cat: 'FIGMA TO CODE',
          role: 'Pixel-faithful rebuild, two themes',
          body: 'A designer portfolio rebuilt one to one from its Figma source. Type sizes, letter-spacing and section rhythm come from the design itself, not from eye-balling it. Two themes.',
          note: 'Result: the built page lands within a couple of pixels of the 1728px artboard.',
          tags: '#Next.js #TypeScript #Tailwind #Motion',
          link: 'https://orpheus-dusky.vercel.app' }
      ]
    },

    services: {
      label: 'services',
      items: [
        { t: 'A new site or app', y: '6–10 weeks', cat: 'FROM SCRATCH',
          role: 'Design · Site · Admin panel · Payments',
          body: 'We start from nothing: the design, the site, an admin panel, payments and the back end that keeps it all running.',
          note: 'Result: from an idea to a product in use.',
          tags: '#Frontend #Backend #Deploy' },

        { t: 'Automating the work', y: '2–6 weeks', cat: 'SYSTEMATISING',
          role: 'Orders · Queues · Reports',
          body: 'Orders, queues and reports move out of notebooks and spreadsheets into a system that runs itself.',
          note: 'Result: the team works less by hand and more through the system.',
          tags: '#Automation #Dashboard' },

        { t: 'Rescuing an existing project', y: 'audit first', cat: 'RECOVERY',
          role: 'Audit · Refactor · Completion',
          body: 'If the previous developer walked away, I read the code, repair the foundation and carry the work through to the finish.',
          note: 'Result: an abandoned project moves again.',
          tags: '#Audit #Refactor' }
      ]
    },

    process: {
      label: 'process',
      items: [
        { t: 'We talk first', y: 'free', cat: 'STEP 1',
          role: 'Half an hour · Questions and answers',
          body: 'You tell me what you need and I ask the questions. Half an hour later the price and the timeline are clear.',
          tags: '#Questions #Direction #Plan' },

        { t: 'A first working version', y: '2 weeks', cat: 'STEP 2',
          role: 'The part that matters, first',
          body: 'You do not wait for the whole project. You see the most important part early, ask for changes, and the direction becomes clear.',
          tags: '#Design #Code #System' },

        { t: 'Handover and training', y: 'handover', cat: 'STEP 3',
          role: 'The code is yours · A month of support',
          body: 'The code is yours. I show your staff how to run it and support you free of charge for a month.',
          tags: '#Deploy #Handover #Support' }
      ]
    }
  },

  pages: {
    about: {
      path: '/about', tag: '',
      html: `
      <div class="d-title">Mahmud Ulashev</div>
      <div class="d-meta">DEVELOPER · 4 YEARS</div>
      <div class="d-para">Design, interface, server and the invisible work in between. You talk to one person — and one person answers for the whole result.</div>
      <div class="d-para">The idea is yours — the working product is mine.</div>
      <div class="d-sub">IN NUMBERS</div>
      <div class="d-role"><b>4</b>years of experience · since 2022</div>
      <div class="d-role"><b>6</b>open-source projects</div>
      <div class="d-role"><b>3</b>IELTS sections in take-ielts</div>
      <div class="d-role"><b>2</b>platforms in atlas</div>
      <div class="d-sub">RIGHT NOW</div>
      <div class="d-role"><b>status</b>Room for a new project</div>
      <div class="d-role"><b>reply</b>Within a day</div>
      <div class="d-role"><b>languages</b>UZ · RU · EN</div>`
    },
    write: {
      path: '/write', tag: '',
      html: `
      <div class="d-title">Have a project?</div>
      <div class="d-meta">A REPLY WITHIN A DAY</div>
      <div class="d-para">Write even if you do not know how big it is. I will ask the right questions and work out the first step that ships.</div>
      <div class="d-sub">IN SHORT, TELL ME</div>
      <ul class="d-list">
        <li><span>what you need</span></li>
        <li><span>where you are now</span></li>
        <li><span>by when</span></li>
      </ul>
      <div class="d-actions">
        <a class="d-open" href="https://t.me/mahmud_ulashev" target="_blank" rel="noopener">Telegram →</a>
        <a class="d-open" href="mailto:mahmud@ulashev.uz">Email →</a>
      </div>`
    },
    contact: {
      path: '/contact', tag: '',
      html: `
      <div class="d-title">Contact</div>
      <div class="d-meta">TELEGRAM IS FASTEST</div>
      <div class="d-para">Write briefly on Telegram: what you need, where you are now and by when.</div>
      <div class="d-role"><b>telegram</b><a class="d-a" href="https://t.me/mahmud_ulashev" target="_blank" rel="noopener">@mahmud_ulashev</a></div>
      <div class="d-role"><b>phone</b><a class="d-a" href="tel:+998770343444">+998 77 034 34 44</a></div>
      <div class="d-role"><b>email</b><a class="d-a" href="mailto:mahmud@ulashev.uz">mahmud@ulashev.uz</a></div>
      <div class="d-role"><b>github</b><a class="d-a" href="https://github.com/mahmudulashev" target="_blank" rel="noopener">mahmudulashev</a></div>
      <div class="d-role"><b>site</b>ulashev.uz</div>`
    }
  },

  changelog: [
    { d: '2026', lines: ['· satify went live'] },
    { d: '2026', lines: ['· prepplanner released for macOS'] },
    { d: '2026', lines: ['· atlas released for macOS and Windows'] },
    { d: '2026', lines: ['· take-ielts writing marked by AI'] },
    { d: '2026', lines: ['· xiv and orpheus went live'] }
  ]
}

};

/* faol til — tanlov saqlanadi / active language, choice is remembered */
let LANG = 'uz';
const T  = () => I18N[LANG];
const DATA     = () => T().data;
const PAGES    = () => T().pages;
const LEGENDS  = () => T().legends;
const UI       = () => T().ui;

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

function renderChangelog() {
  el.changelog.innerHTML = `<div class="cl-title">${UI().changelog}</div>` + T().changelog.map(c =>
    `<div class="cl-date">${c.d}</div>` + c.lines.map(l => `<div class="cl-item">${l}</div>`).join('')
  ).join('');
}

function legend(kind) {
  el.legend.innerHTML = LEGENDS()[kind].map(([k, v]) =>
    `<li><span class="k">${k}</span><span>${v}</span></li>`).join('');
}

function renderTabs() {
  el.tabs.innerHTML = TABS.map(k =>
    `<button class="tab" data-tab="${k}">${DATA()[k].label}</button>`).join('');
}

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
  const d = DATA()[S.tab];
  el.menuPath.textContent = '/' + d.label.replace(' ', '-');
  el.menuCount.textContent = UI().count(d.items.length);
  el.cmd.placeholder = UI().promptPh(d.items.length);
  document.querySelectorAll('.tab').forEach(b =>
    b.classList.toggle('is-on', b.dataset.tab === S.tab));
  el.list.innerHTML = d.items.map((it, i) => `
    <button class="row${i === S.sel ? ' is-sel' : ''}" data-i="${i}">
      <span class="row-n">${String(i + 1).padStart(2, '0')}</span>
      <span class="row-t">${it.t}</span>
      ${it.f ? `<span class="row-f">${it.f}</span>` : ''}
      <span class="row-y">${it.y}</span>
    </button>`).join('');
}

function openDetail(i) {
  SFX.open();
  const items = DATA()[S.tab].items;
  S.item = ((i % items.length) + items.length) % items.length;
  const it = items[S.item];
  el.crumb.innerHTML =
    `<span class="seg">${DATA()[S.tab].label}</span><span class="sep">/</span><span class="seg">${it.t.toLowerCase()}</span>`;
  el.detNo.textContent = `${UI().no} ${S.item + 1}`;
  el.dbody.innerHTML = `
    <div class="d-title">${it.t}</div>
    <div class="d-meta"><span class="yr">${it.y}</span> · ${it.cat}</div>
    <div class="d-role"><b>${UI().roleLabel}</b>${it.role}</div>
    <div class="d-para">${it.body}</div>
    ${it.note ? `<div class="d-note">${it.note}</div>` : ''}
    <div class="d-tags">${it.tags}</div>
    ${it.link ? `<a class="d-open" href="${it.link}" target="_blank" rel="noopener">${UI().openLink}</a>` : ''}`;
  el.dbody.scrollTop = 0;
  el.pgPos.textContent = `${S.item + 1} / ${items.length}`;
  setFootFor(it);
  setView('detail');
}

function openPage(name) {
  SFX.open();
  const p = PAGES()[name];
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
  let ctx = null, master = null, muted = false;
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
    if (!on || muted || !ensure()) return;
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
    if (!on || muted || !ensure()) return;
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
    /* til almashganda ekran qayta chiziladi — ovoz chalinmasin */
    mute(v) { muted = !!v; },
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
  const it = DATA()[S.tab].items[S.item];
  if (it && it.link) {
    SFX.open();
    el.dfoot.textContent = UI().opening;
    window.open(it.link, '_blank', 'noopener,noreferrer');
    setTimeout(() => setFootFor(it), 900);
  } else {
    pulseFoot();
  }
}

/* the footer only promises an action when there is a link behind it */
function setFootFor(it) {
  el.dfoot.innerHTML = (it && it.link)
    ? (isTouch ? UI().openFootTap : UI().openFoot)
    : UI().navFoot;
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
  const n = DATA()[S.tab].items.length;
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
  const items = DATA()[S.tab].items;
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
  /* til tugmasidagi Enter/Bo'sh joy tugmaning o'ziga tegishli — ushlab qolmaymiz */
  if (e.target.closest && e.target.closest('.lang')) return;
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

/* sensorli qurilmada klaviatura yoʻq — matn tugma emas, bosishni koʻrsatsin */
if (isTouch) el.html.dataset.touch = 'on';

const speaker = $('#speaker');
if (speaker) speaker.addEventListener('click', (e) => { e.stopPropagation(); SFX.toggle(); });
addEventListener('keydown', (e) => {
  if ((e.key === 'm' || e.key === 'M') && e.target.tagName !== 'INPUT') SFX.toggle();
});

/* ---------- til almashtirish / language switching ------------- */

const setText = (sel, v) => { const n = $(sel); if (n) n.textContent = v; };
const setHtml = (sel, v) => { const n = $(sel); if (n) n.innerHTML = v; };
const setAria = (sel, v) => { const n = $(sel); if (n) n.setAttribute('aria-label', v); };

/* qurilma ichidagi va sayt chekkasidagi qoʻzgʻalmas yozuvlar */
function applyStatic() {
  const u = UI(), a = u.aria;

  el.html.lang = T().htmlLang;
  document.title = T().docTitle;
  const md = document.querySelector('meta[name="description"]');
  if (md) md.setAttribute('content', T().docDesc);

  setHtml('.off-title', isTouch ? u.offTitleTap : u.offTitle);
  setText('.off-sub', u.offSub);
  setText('#keyboardTitle', u.keyboard);
  setText('#langTitle', u.langTitle);
  setText('.hint', u.hint);
  setHtml('#pgFoot', u.backFoot);
  setHtml('#pgPrev', `<span class="arr">◂</span> ${u.prev}`);
  setHtml('#pgNext', `${u.next} <span class="arr">▸</span>`);
  setText('.power .lbl', u.power);
  setText('.backbtn .lbl', u.back);

  setAria('#speaker', a.sound); setAria('#power', a.power);
  setAria('#backbtn', a.back);  setAria('#knob', a.open);
  setAria('#wheel', a.wheel);   setAria('#dWork', a.work);
  setAria('#dWrite', a.write);  setAria('#dAbout', a.about);
  setAria('#dContact', a.contact);
  setAria('#langsel', a.lang);
  setAria('[data-lang="uz"]', a.langUz);
  setAria('[data-lang="en"]', a.langEn);

  /* skrin-riderga bitta til yetadi — qidiruv robotlari ikkalasini ham koʻradi */
  LANGS.forEach(l => { const n = $('#sr-' + l); if (n) n.hidden = l !== LANG; });
  document.querySelectorAll('.lang').forEach(b =>
    b.classList.toggle('is-on', b.dataset.lang === LANG));
}

/* til almashganda ekran qayta chiziladi — ovoz chalinmasin */
const silently = (fn) => { SFX.mute(true); try { fn(); } finally { SFX.mute(false); } };

function setLang(lang, save = true) {
  if (!I18N[lang] || lang === LANG) { if (I18N[lang]) applyStatic(); return; }
  LANG = lang;
  if (save) store.set('console-lang', lang);

  applyStatic();
  renderChangelog();
  renderTabs();
  renderMenu();
  legend(S.on ? S.view : 'off');

  /* ochiq turgan ekranni ham darhol yangilaymiz */
  if (S.on) {
    if (S.view === 'detail') silently(() => openDetail(S.item));
    else if (S.view === 'page') silently(() => openPage(S.channel));
  }
}

document.querySelectorAll('.lang').forEach(b => {
  b.addEventListener('click', (e) => {
    e.stopPropagation();
    if (b.dataset.lang !== LANG) { SFX.tick(); setLang(b.dataset.lang); }
  });
});

/* Birinchi tashrifda tilni brauzerdan topamiz. Aniq tanlov har doim
   ustun: bir marta tugmani bosgan odam har safar oʻsha tilni koʻradi.
   `navigator.languages` roʻyxatining hammasi tekshiriladi — koʻp
   oʻzbekistonlik foydalanuvchida birlamchi til ingliz yoki rus boʻlsa
   ham, roʻyxatda `uz` turadi. Qolgan hamma holatda — ingliz tili. */
function detectLang() {
  const saved = store.get('console-lang');
  if (LANGS.includes(saved)) return saved;
  const tags = (navigator.languages && navigator.languages.length)
    ? navigator.languages
    : [navigator.language || ''];
  return tags.some(t => /^uz\b/i.test(t)) ? 'uz' : 'en';
}

/* ---------- init --------------------------------------------- */
LANG = detectLang();
applyStatic();
renderChangelog();
renderTabs();
legend('off');
renderMenu();
markChannel();
setView('off');
