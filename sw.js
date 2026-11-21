/* سرویس‌ورکر | Service Worker: برنامه را برای باز شدن سریع و بدون اینترنت نگه می‌دارد.
   ابتدا از اینترنت می‌گیرد (تا نسخهٔ تازه همیشه دیده شود)؛ اگر اینترنت نبود از نسخهٔ ذخیره‌شده. درخواست‌های سرور (Appwrite) و گیت‌هاب را دست نمی‌زند. */
const CACHE = 'tootfarangi-mobile-v1';
const FILES = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES).catch(() => {})).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(r).then(res => { if (res && res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); } return res; })
    .catch(() => caches.match(r).then(m => m || caches.match('./index.html'))));
});
