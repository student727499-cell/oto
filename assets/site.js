/* Oto website: language, the lyrics-style headline, and the published release details. */
'use strict';

(function () {
  // A link from an Oto email that landed on the home page belongs to the account page; the "#" part
  // (which holds the link's key) stays in the browser.
  if (/(^#|&)(access_token|error_code|error)=/.test(window.location.hash)) {
    window.location.replace('auth/' + window.location.hash);
    return;
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let text = window.otoApplyLanguage(window.otoLanguage());
  let release = null;

  // The headline lines, written twice so the loop can jump back without a visible seam.
  const lyrics = document.querySelector('.lyrics');
  const list = lyrics ? lyrics.querySelector('ol') : null;
  const originals = list ? Array.from(list.children) : [];
  for (const li of originals) {
    const copy = li.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    list.appendChild(copy);
  }
  const lines = list ? Array.from(list.children) : [];
  let current = 0;
  let timer = null;

  function place(index, animate) {
    if (!list || !lines.length) return;
    lyrics.classList.toggle('still', !animate);
    lines.forEach((li, k) => { li.dataset.d = String(Math.min(3, Math.abs(k - index))); });
    const line = lines[index];
    const offset = line.offsetTop + line.offsetHeight / 2 - lyrics.clientHeight * 0.42;
    list.style.transform = 'translateY(' + (-offset) + 'px)';
  }

  function step() {
    current += 1;
    place(current, true);
    if (current === originals.length) {
      // The copy of the first line is showing: move to the real first line without animation.
      window.setTimeout(() => {
        current = 0;
        place(current, false);
        void list.offsetHeight;
        lyrics.classList.remove('still');
      }, 900);
    }
  }

  function startLyrics() {
    window.clearInterval(timer);
    timer = null;
    if (!list) return;
    if (reduceMotion.matches) {
      lines.forEach((li) => { delete li.dataset.d; });
      list.style.transform = '';
      return;
    }
    place(current, false);
    timer = window.setInterval(step, 2600);
  }

  // Release details: version, date, checksums.
  function formatDate(iso) {
    const parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || '');
    if (!parts) return '';
    return text.dateFormat
      .replace('{d}', String(Number(parts[3])))
      .replace('{m}', text.months[Number(parts[2]) - 1])
      .replace('{y}', parts[1]);
  }

  function showRelease() {
    const version = document.getElementById('version');
    if (!release || !version) return;
    version.textContent = text.version.replace('{v}', release.version).replace('{date}', formatDate(release.date));
    for (const [key, id] of [['mac', 'sum-mac'], ['ios', 'sum-ios']]) {
      const el = document.getElementById(id);
      if (el && release[key] && /^[0-9a-f]{64}$/.test(release[key].sha256)) el.textContent = release[key].sha256;
    }
    const sums = document.getElementById('verify');
    if (sums) sums.hidden = false;
  }

  function redraw(lang) {
    text = window.otoApplyLanguage(lang);
    showRelease();
    startLyrics();
  }

  window.otoLanguageButtons(redraw);
  if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', startLyrics);
  window.addEventListener('resize', () => place(current, false));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { window.clearInterval(timer); timer = null; } else { startLyrics(); }
  });

  fetch('assets/release.json', { cache: 'no-cache', credentials: 'omit' })
    .then((r) => (r.ok ? r.json() : null))
    .then((data) => { release = data && data.version ? data : null; showRelease(); })
    .catch(() => {});

  startLyrics();
})();
