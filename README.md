# Oto

Oto — Mac va iPhone uchun musiqa ilovasining sayti: **https://student727499-cell.github.io/oto/**

- `index.html` — ilova haqida va yuklab olish. Fayllar `download/` papkasida, SHA‑256 yigʻindilari `download/SHA256SUMS.txt`’da.
- `auth/` — Oto xatlaridagi havolalar ochadigan sahifa: emailni tasdiqlash va yangi parol qoʻyish.
  Havoladagi vaqtinchalik kalit faqat brauzerda (manzilning `#` qismida) qoladi, darhol manzildan oʻchiriladi
  va ish tugashi bilan bekor qilinadi. Sahifa faqat Supabase bilan bogʻlanadi (Content-Security-Policy).
- Sayt hech qanday tashqi skript, shrift, analitika yoki cookie ishlatmaydi.

Zaiflik topsangiz: music727399@gmail.com

---

The website of Oto, a music app for Mac and iPhone. `auth/` is where the links in Oto's emails land
(email confirmation and password reset); app downloads are in `download/` with their SHA-256 sums.
