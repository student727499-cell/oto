/* Oto website texts: Uzbek, Russian, English. Plain text only (applied with textContent). */
'use strict';

window.OTO_TEXT = {
  uz: {
    title: 'Oto — Mac va iPhone uchun musiqa ilovasi',
    description: 'Oto — oddiy va tez musiqa ilovasi: kutubxona, qoʻshiq matni, doʻstlar bilan ulashish. Mac va iPhone uchun bepul.',
    language: 'Til',
    lyric1: 'Musiqangiz bitta joyda.',
    lyric2: 'Mac va iPhone’da.',
    lyric3: 'Soʻzlari bilan birga.',
    lyric4: 'Doʻstlaringiz bilan.',
    lyric5: 'Reklamasiz.',
    lead: 'Oto — oddiy va tez musiqa ilovasi. Qoʻshiqlaringizni tartibda saqlaydi, yangilarini topib beradi va doʻstlaringiz bilan ulashadi. Bepul.',
    downloadMac: 'Mac uchun yuklab olish',
    downloadIphone: 'iPhone uchun yuklab olish',
    requirements: 'macOS 15 yoki yangisi. iPhone uchun iOS 18 yoki yangisi.',
    version: 'Versiya {v}, {date}.',
    featuresTitle: 'Nima qila oladi',
    f1t: 'Kutubxona',
    f1d: 'Qoʻshiqlar, albomlar, ijrochilar va pleylistlar. Fayllar oʻz kompyuteringizda turadi.',
    f2t: 'Musiqa topish',
    f2d: 'YouTube va Apple katalogidan qidiring, eshitib koʻring va bir bosishda saqlang.',
    f3t: 'Qoʻshiq matni',
    f3d: 'Soʻzlar qoʻshiq bilan birga yuradi. Qatorni bossangiz, qoʻshiq oʻsha joydan davom etadi.',
    f4t: 'Doʻstlar',
    f4d: 'Kim nimani eshitishini oʻzingiz tanlaysiz. Umumiy albomlar, xabarlar va layklar.',
    f5t: 'Oto AI',
    f5d: '“Sokin bir narsa qoʻy” deb yozing yoki atrofda chalinayotgan qoʻshiqni tanittiring.',
    f6t: 'Wi‑Fi orqali',
    f6d: 'Mac va iPhone bitta Wi‑Fi’da boʻlsa, qoʻshiqlar oʻzi koʻchadi.',
    installTitle: 'Oʻrnatish',
    mac1: 'Oto-mac.zip faylini yuklab oling va ustiga ikki marta bosing. Oto ilovasi paydo boʻladi.',
    mac2: 'Oto’ni Applications papkasiga torting.',
    mac3: 'Birinchi ochishda macOS Oto’ni tekshira olmasligini aytadi, chunki Oto App Store’dan emas. System Settings → Privacy & Security boʻlimining pastida Open Anyway’ni bosing.',
    ios1: 'Kompyuterga AltServer’ni oʻrnating va u orqali iPhone’ga AltStore’ni qoʻying. Bu bir martalik ish:',
    ios2: 'Oto.ipa faylini iPhone’da yuklab oling.',
    ios3: 'Faylni oching: Share → AltStore. AltStore uni Apple ID’ingiz bilan imzolab oʻrnatadi.',
    ios4: 'Birinchi ochishda Settings → Privacy & Security → Developer Mode’ni yoqing.',
    iosNote: 'Bepul Apple ID bilan ilova 7 kun ishlaydi, AltStore uni oʻzi yangilab turadi.',
    checksumTitle: 'Fayl toʻgʻriligini tekshirish',
    checksumText: 'Yuklab olingan fayl shu yerdagi bilan aynan bir xil ekanini SHA‑256 orqali tekshirish mumkin. Mac’da Terminal’da:',
    securityTitle: 'Xavfsizlik',
    s1: 'Parolingizni hech kim koʻrmaydi: u faqat shifrlangan izi (bcrypt) koʻrinishida saqlanadi.',
    s2: 'Har bir akkaunt email orqali tasdiqlanadi.',
    s3: 'Musiqangizni faqat siz ruxsat bergan odamlar eshitadi. Bu qoidani serverning oʻzi tekshiradi.',
    s4: 'Bu sayt kuzatuv, reklama va begona skriptlarsiz ishlaydi.',
    s5: 'Zaiflik topsangiz, shu manzilga yozing:',
    footer: 'Oto doʻstlar uchun qilingan.',
    footerSource: 'Sayt kodi GitHub’da',
    months: ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'],
    dateFormat: '{d}-{m} {y}',

    authTitle: 'Oto akkaunti',
    checking: 'Havola tekshirilmoqda…',
    noscript: 'Bu sahifa ishlashi uchun brauzerda JavaScript yoqilgan boʻlishi kerak.',
    confirmedTitle: 'Email tasdiqlandi',
    confirmedText: 'Endi Oto’ga qayting. Ilova ochiq boʻlsa, oʻzi kiradi. Ochiq boʻlmasa, email va parolingiz bilan kiring.',
    passwordTitle: 'Yangi parol',
    passwordText: 'Oto akkauntingiz uchun yangi parol oʻylab toping. Boshqa joylarda ishlatmaydigan parol boʻlgani maʼqul.',
    passwordFor: 'Akkaunt: {email}',
    newPassword: 'Yangi parol',
    repeatPassword: 'Yana bir marta',
    show: 'Koʻrsatish',
    hide: 'Yashirish',
    rule: 'Kamida 8 belgi, harf va raqam bilan.',
    save: 'Parolni saqlash',
    saving: 'Saqlanmoqda…',
    errMismatch: 'Ikkala parol bir xil emas.',
    errWeak: 'Parol kamida 8 belgi boʻlsin va unda harf ham, raqam ham boʻlsin.',
    errSame: 'Yangi parol eskisidan farq qilishi kerak.',
    errNetwork: 'Server bilan aloqa boʻlmadi. Internetni tekshirib, qayta bosing.',
    errOther: 'Parol saqlanmadi. Oto’da yangi havola soʻrang.',
    savedTitle: 'Parol saqlandi',
    savedText: 'Endi Oto’da emailingiz va yangi parolingiz bilan kiring.',
    emailChangedTitle: 'Email oʻzgartirildi',
    emailChangedText: 'Oto’ga yangi email bilan kiring.',
    expiredTitle: 'Havola eskirgan',
    expiredText: 'Bu havola ishlatib boʻlingan yoki muddati oʻtgan. Oto’da yangisini soʻrang: roʻyxatdan oʻtishda “Qayta yuborish”, parol uchun “Parolni unutdingizmi?”.',
    errorTitle: 'Havola ishlamadi',
    errorText: 'Oto’da yangi havola soʻrang va eng oxirgi kelgan xatdagi havolani oching.',
    emptyTitle: 'Bu sahifa Oto xatlari uchun',
    emptyText: 'Oto yuborgan xatdagi havolani bosing, u sizni shu yerga olib keladi.',
    home: 'Oto sayti'
  },

  ru: {
    title: 'Oto — музыкальное приложение для Mac и iPhone',
    description: 'Oto — простое и быстрое приложение для музыки: библиотека, тексты песен, музыка с друзьями. Бесплатно для Mac и iPhone.',
    language: 'Язык',
    lyric1: 'Вся ваша музыка в одном месте.',
    lyric2: 'На Mac и iPhone.',
    lyric3: 'Вместе с текстами.',
    lyric4: 'Вместе с друзьями.',
    lyric5: 'Без рекламы.',
    lead: 'Oto — простое и быстрое приложение для музыки. Держит ваши песни в порядке, находит новые и делится ими с друзьями. Бесплатно.',
    downloadMac: 'Скачать для Mac',
    downloadIphone: 'Скачать для iPhone',
    requirements: 'macOS 15 или новее. Для iPhone — iOS 18 или новее.',
    version: 'Версия {v}, {date}.',
    featuresTitle: 'Что умеет',
    f1t: 'Библиотека',
    f1d: 'Песни, альбомы, исполнители и плейлисты. Файлы хранятся на вашем компьютере.',
    f2t: 'Поиск музыки',
    f2d: 'Ищите на YouTube и в каталоге Apple, слушайте и сохраняйте в один клик.',
    f3t: 'Тексты песен',
    f3d: 'Слова идут вместе с песней. Нажмите на строку, и песня продолжится с этого места.',
    f4t: 'Друзья',
    f4d: 'Вы сами решаете, кто что слышит. Общие альбомы, сообщения и лайки.',
    f5t: 'Oto AI',
    f5d: 'Напишите «включи что-нибудь спокойное» или дайте Oto узнать песню, которая играет рядом.',
    f6t: 'Через Wi‑Fi',
    f6d: 'Если Mac и iPhone в одной сети Wi‑Fi, песни переносятся сами.',
    installTitle: 'Установка',
    mac1: 'Скачайте Oto-mac.zip и дважды нажмите на него. Появится приложение Oto.',
    mac2: 'Перетащите Oto в папку Applications («Программы»).',
    mac3: 'При первом запуске macOS скажет, что не может проверить Oto: приложения нет в App Store. Откройте System Settings → Privacy & Security и внизу нажмите Open Anyway.',
    ios1: 'Установите на компьютер AltServer и через него поставьте на iPhone AltStore. Это делается один раз:',
    ios2: 'Скачайте Oto.ipa на iPhone.',
    ios3: 'Откройте файл: Share → AltStore. AltStore подпишет его вашим Apple ID и установит.',
    ios4: 'При первом запуске включите Settings → Privacy & Security → Developer Mode.',
    iosNote: 'С бесплатным Apple ID приложение работает 7 дней, AltStore продлевает его сам.',
    checksumTitle: 'Проверка файлов',
    checksumText: 'Чтобы убедиться, что скачанный файл точно такой же, как здесь, сравните SHA‑256. На Mac в Терминале:',
    securityTitle: 'Безопасность',
    s1: 'Ваш пароль никто не видит: хранится только его зашифрованный след (bcrypt).',
    s2: 'Каждый аккаунт подтверждается по e-mail.',
    s3: 'Вашу музыку слышат только те, кому вы разрешили. Это правило проверяет сам сервер.',
    s4: 'Этот сайт работает без слежки, рекламы и чужих скриптов.',
    s5: 'Нашли уязвимость? Напишите сюда:',
    footer: 'Oto сделан для друзей.',
    footerSource: 'Код сайта на GitHub',
    months: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
    dateFormat: '{d} {m} {y}',

    authTitle: 'Аккаунт Oto',
    checking: 'Проверяем ссылку…',
    noscript: 'Чтобы эта страница работала, в браузере должен быть включен JavaScript.',
    confirmedTitle: 'E-mail подтвержден',
    confirmedText: 'Вернитесь в Oto. Если приложение открыто, оно войдет само. Если нет, войдите с вашим e-mail и паролем.',
    passwordTitle: 'Новый пароль',
    passwordText: 'Придумайте новый пароль для аккаунта Oto. Лучше такой, который вы не используете в других местах.',
    passwordFor: 'Аккаунт: {email}',
    newPassword: 'Новый пароль',
    repeatPassword: 'Еще раз',
    show: 'Показать',
    hide: 'Скрыть',
    rule: 'Не меньше 8 символов, с буквами и цифрами.',
    save: 'Сохранить пароль',
    saving: 'Сохраняем…',
    errMismatch: 'Пароли не совпадают.',
    errWeak: 'Пароль должен быть не короче 8 символов и содержать и буквы, и цифры.',
    errSame: 'Новый пароль должен отличаться от старого.',
    errNetwork: 'Нет связи с сервером. Проверьте интернет и нажмите еще раз.',
    errOther: 'Пароль не сохранен. Запросите в Oto новую ссылку.',
    savedTitle: 'Пароль сохранен',
    savedText: 'Теперь войдите в Oto с вашим e-mail и новым паролем.',
    emailChangedTitle: 'E-mail изменен',
    emailChangedText: 'Входите в Oto с новым e-mail.',
    expiredTitle: 'Ссылка устарела',
    expiredText: 'Эта ссылка уже использована или истекла. Запросите новую в Oto: при регистрации — «Отправить снова», для пароля — «Забыли пароль?».',
    errorTitle: 'Ссылка не сработала',
    errorText: 'Запросите в Oto новую ссылку и откройте самое последнее письмо.',
    emptyTitle: 'Эта страница для писем Oto',
    emptyText: 'Нажмите на ссылку в письме от Oto, и она приведет вас сюда.',
    home: 'Сайт Oto'
  },

  en: {
    title: 'Oto — a music app for Mac and iPhone',
    description: 'Oto is a simple, fast music app: your library, lyrics, music with friends. Free for Mac and iPhone.',
    language: 'Language',
    lyric1: 'All your music in one place.',
    lyric2: 'On Mac and iPhone.',
    lyric3: 'With the lyrics.',
    lyric4: 'With your friends.',
    lyric5: 'No ads.',
    lead: 'Oto is a simple, fast music app. It keeps your songs in order, finds new ones and shares them with your friends. Free.',
    downloadMac: 'Download for Mac',
    downloadIphone: 'Download for iPhone',
    requirements: 'macOS 15 or later. iPhone: iOS 18 or later.',
    version: 'Version {v}, {date}.',
    featuresTitle: 'What it does',
    f1t: 'Library',
    f1d: 'Songs, albums, artists and playlists. Your files stay on your own computer.',
    f2t: 'Find music',
    f2d: 'Search YouTube and the Apple catalogue, listen first, save in one click.',
    f3t: 'Lyrics',
    f3d: 'The words move with the song. Tap a line and the song jumps there.',
    f4t: 'Friends',
    f4d: 'You decide who hears what. Shared albums, messages and likes.',
    f5t: 'Oto AI',
    f5d: 'Type “play something calm”, or let Oto name the song playing nearby.',
    f6t: 'Over Wi‑Fi',
    f6d: 'When your Mac and iPhone are on the same Wi‑Fi, songs move across by themselves.',
    installTitle: 'Install',
    mac1: 'Download Oto-mac.zip and double-click it. The Oto app appears.',
    mac2: 'Drag Oto into your Applications folder.',
    mac3: 'The first time you open it, macOS says it can’t check Oto, because Oto isn’t from the App Store. Open System Settings → Privacy & Security and click Open Anyway at the bottom.',
    ios1: 'Install AltServer on your computer and use it to put AltStore on your iPhone. You only do this once:',
    ios2: 'Download Oto.ipa on your iPhone.',
    ios3: 'Open the file: Share → AltStore. AltStore signs it with your Apple ID and installs it.',
    ios4: 'The first time, turn on Settings → Privacy & Security → Developer Mode.',
    iosNote: 'With a free Apple ID the app runs for 7 days, and AltStore renews it for you.',
    checksumTitle: 'Check the files',
    checksumText: 'To make sure a download is exactly the one published here, compare its SHA‑256. On a Mac, in Terminal:',
    securityTitle: 'Security',
    s1: 'Nobody sees your password: only a scrambled trace of it (bcrypt) is stored.',
    s2: 'Every account is confirmed by email.',
    s3: 'Only people you allow can hear your music. The server itself checks this rule.',
    s4: 'This site runs without tracking, ads or third-party scripts.',
    s5: 'Found a vulnerability? Write to:',
    footer: 'Oto is made for friends.',
    footerSource: 'Site code on GitHub',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    dateFormat: '{d} {m} {y}',

    authTitle: 'Oto account',
    checking: 'Checking the link…',
    noscript: 'This page needs JavaScript turned on in your browser.',
    confirmedTitle: 'Email confirmed',
    confirmedText: 'Go back to Oto. If the app is open, it signs you in by itself. If not, sign in with your email and password.',
    passwordTitle: 'New password',
    passwordText: 'Choose a new password for your Oto account, ideally one you don’t use anywhere else.',
    passwordFor: 'Account: {email}',
    newPassword: 'New password',
    repeatPassword: 'Repeat it',
    show: 'Show',
    hide: 'Hide',
    rule: 'At least 8 characters, with letters and digits.',
    save: 'Save password',
    saving: 'Saving…',
    errMismatch: 'The two passwords don’t match.',
    errWeak: 'Use at least 8 characters, with both letters and digits.',
    errSame: 'The new password must be different from the old one.',
    errNetwork: 'Couldn’t reach the server. Check your internet and try again.',
    errOther: 'The password wasn’t saved. Ask Oto for a new link.',
    savedTitle: 'Password saved',
    savedText: 'Now sign in to Oto with your email and the new password.',
    emailChangedTitle: 'Email changed',
    emailChangedText: 'Sign in to Oto with your new email.',
    expiredTitle: 'This link has expired',
    expiredText: 'It was already used or is too old. Ask Oto for a new one: “Send Again” when signing up, “Forgot password?” for a password.',
    errorTitle: 'This link didn’t work',
    errorText: 'Ask Oto for a new link and open the newest email.',
    emptyTitle: 'This page is for Oto emails',
    emptyText: 'Click the link in an email from Oto and it brings you here.',
    home: 'Oto website'
  }
};

/** The language to show: the one picked before, else the browser's, else Uzbek. */
window.otoLanguage = function () {
  let saved = null;
  try { saved = localStorage.getItem('oto.lang'); } catch (e) { /* storage may be off */ }
  if (saved && window.OTO_TEXT[saved]) return saved;
  const wanted = (navigator.languages || [navigator.language || '']).map((l) => String(l).toLowerCase());
  for (const l of wanted) {
    if (l.startsWith('uz')) return 'uz';
    if (l.startsWith('ru') || l.startsWith('kk') || l.startsWith('ky') || l.startsWith('tg')) return 'ru';
    if (l.startsWith('en')) return 'en';
  }
  return 'uz';
};

/** Puts the texts of `lang` into every [data-i18n] element and attribute. */
window.otoApplyLanguage = function (lang) {
  const text = window.OTO_TEXT[lang] || window.OTO_TEXT.uz;
  document.documentElement.lang = lang;
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const value = text[el.dataset.i18n];
    if (typeof value === 'string') el.textContent = value;
  }
  for (const el of document.querySelectorAll('[data-i18n-label]')) {
    const value = text[el.dataset.i18nLabel];
    if (typeof value === 'string') el.setAttribute('aria-label', value);
  }
  const title = document.querySelector('[data-i18n-title]');
  if (title && text[title.dataset.i18nTitle]) document.title = text[title.dataset.i18nTitle];
  const description = document.querySelector('meta[name="description"]');
  if (description && text.description) description.setAttribute('content', text.description);
  for (const button of document.querySelectorAll('[data-lang]')) {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  }
  return text;
};

/** Language buttons: remember the choice and redraw. */
window.otoLanguageButtons = function (onChange) {
  for (const button of document.querySelectorAll('[data-lang]')) {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      try { localStorage.setItem('oto.lang', lang); } catch (e) { /* storage may be off */ }
      onChange(lang);
    });
  }
};
