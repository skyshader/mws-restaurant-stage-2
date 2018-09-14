/**
 * Perform caching and other stuff to add offline capabilities
 */

const APP_CACHE = 'application-cache-v1';

const appFiles = [
  '/',
  '/css/styles.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/sw.js',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(APP_CACHE)
      .then(function(cache) {
        console.log('Opened cache', APP_CACHE);
        return cache.addAll(appFiles);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(APP_CACHE).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
