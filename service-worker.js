const CACHE_NAME = "portfolio-pwa-v1";
const ASSETS = [
  "/portfolio1/",
  "/portfolio1/index.html",
  "/portfolio1/manifest.json",
  "/portfolio1/service-worker.js",
  "/portfolio1/resume.pdf",
  "/portfolio1/icons/icon-192.png",
  "/portfolio1/icons/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
