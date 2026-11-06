/* Oto account page: the place the links in Oto's emails open.
 *
 * Supabase confirms the email (or checks a password-reset link) before it sends the person here, and puts a
 * short-lived session in the part of the address after "#", which browsers never send to any server.
 * This page reads it once, removes it from the address bar and history, and keeps it only in memory:
 *   - sign-up / email change: nothing else to do, so the session is ended at once;
 *   - password reset: the new password is sent straight to Supabase over HTTPS, then the session is ended.
 */
'use strict';

(function () {
  // Never work inside someone else's page (a frame could trick the person into typing a password).
  if (window.top !== window.self) return;

  const API = 'https://xsahhqwlghqfkrlqjylj.supabase.co/auth/v1';
  const KEY = 'sb_publishable_6TT75s459KOUfiD9_jSzjA_rCIhsQPO'; // public by design: it identifies the project

  const fragment = new URLSearchParams(window.location.hash.replace(/^#/, ''));
  const query = new URLSearchParams(window.location.search);
  if (window.location.hash || window.location.search) {
    window.history.replaceState(null, '', window.location.pathname);
  }
  const param = (name) => fragment.get(name) || query.get(name) || '';

  let token = fragment.get('access_token') || '';
  const type = param('type');
  const errorCode = param('error_code');
  const errorText = (param('error') + ' ' + errorCode + ' ' + param('error_description')).trim();

  let text = window.otoApplyLanguage(window.otoLanguage());
  let state = 'checking';
  let errorKey = '';

  function show(name) {
    state = name;
    for (const el of document.querySelectorAll('[data-state]')) el.hidden = el.dataset.state !== name;
    const heading = document.querySelector('[data-state="' + name + '"] h1');
    if (heading) heading.focus({ preventScroll: true });
  }

  function claims(jwt) {
    try {
      const part = jwt.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      const json = decodeURIComponent(Array.from(atob(part), (c) => '%' + c.charCodeAt(0).toString(16).padStart(2, '0')).join(''));
      return JSON.parse(json);
    } catch (e) {
      return null;
    }
  }

  /** Ends the session this link created (only this one: the person's app stays signed in). */
  function endSession(jwt) {
    if (!jwt) return Promise.resolve();
    return fetch(API + '/logout?scope=local', {
      method: 'POST',
      headers: { apikey: KEY, Authorization: 'Bearer ' + jwt },
      credentials: 'omit',
      referrerPolicy: 'no-referrer',
      keepalive: true
    }).catch(() => {});
  }

  function setError(key) {
    errorKey = key;
    document.getElementById('error').textContent = key ? text[key] : '';
  }

  window.otoLanguageButtons((lang) => {
    text = window.otoApplyLanguage(lang);
    if (errorKey) setError(errorKey);
    updateReveal();
  });

  // What the link says ------------------------------------------------------------------------
  const shape = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
  const payload = token && shape.test(token) ? claims(token) : null;

  if (errorText) {
    token = '';
    show(/expired|invalid|otp/i.test(errorText) ? 'expired' : 'error');
  } else if (!token) {
    show('empty');
  } else if (!payload) {
    token = '';
    show('error');
  } else if (typeof payload.exp === 'number' && payload.exp * 1000 < Date.now()) {
    token = '';
    show('expired');
  } else if (type === 'recovery') {
    show('password');
    if (typeof payload.email === 'string' && payload.email) {
      const who = document.getElementById('who');
      who.textContent = text.passwordFor.replace('{email}', payload.email);
      who.dataset.email = payload.email;
      who.hidden = false;
      document.getElementById('username').value = payload.email;
    }
  } else {
    endSession(token);
    token = '';
    show(type === 'email_change' ? 'emailChanged' : 'confirmed');
  }

  // New password ------------------------------------------------------------------------------
  const form = document.getElementById('password-form');
  const first = document.getElementById('password');
  const second = document.getElementById('repeat');
  const reveal = document.getElementById('reveal');
  const save = document.getElementById('save');
  let busy = false;

  function updateReveal() {
    const shown = first.type === 'text';
    reveal.textContent = shown ? text.hide : text.show;
    reveal.setAttribute('aria-pressed', String(shown));
    const who = document.getElementById('who');
    if (who && who.dataset.email) who.textContent = text.passwordFor.replace('{email}', who.dataset.email);
  }

  reveal.addEventListener('click', () => {
    const type = first.type === 'password' ? 'text' : 'password';
    first.type = type;
    second.type = type;
    updateReveal();
  });

  const strong = (p) => p.length >= 8 && /\p{L}/u.test(p) && /\p{Nd}/u.test(p);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (busy || state !== 'password') return;
    const password = first.value;
    if (!strong(password)) { setError('errWeak'); first.focus(); return; }
    if (password !== second.value) { setError('errMismatch'); second.focus(); return; }
    if (!token) { show('expired'); return; }

    busy = true;
    setError('');
    save.disabled = true;
    save.textContent = text.saving;
    try {
      const response = await fetch(API + '/user', {
        method: 'PUT',
        headers: { apikey: KEY, Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
        credentials: 'omit',
        referrerPolicy: 'no-referrer'
      });
      if (response.ok) {
        first.value = '';
        second.value = '';
        const used = token;
        token = '';
        await endSession(used);
        show('saved');
        return;
      }
      const answer = await response.json().catch(() => ({}));
      const code = String(answer.error_code || answer.code || '');
      if (code === 'same_password') setError('errSame');
      else if (code === 'weak_password') setError('errWeak');
      else if (response.status === 401 || response.status === 403 || code === 'session_not_found' || code === 'bad_jwt') {
        token = '';
        show('expired');
      } else setError('errOther');
    } catch (e) {
      setError('errNetwork');
    } finally {
      busy = false;
      save.disabled = false;
      save.textContent = text.save;
    }
  });

  updateReveal();
})();
