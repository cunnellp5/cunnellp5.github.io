const CACHE_NAME = 'static-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/static/images/glitches.png'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
  );
});

// Fetch event - serve from cache if available
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached response if found
        if (response) {
          return response;
        }
        // Otherwise fetch from network
        return fetch(event.request)
          .then((response) => {
            // Cache new responses for static assets
            if (event.request.url.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico)$/)) {
              const responseClone = response.clone();
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseClone);
                });
            }
            return response;
          });
      })
  );
});