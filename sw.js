/**
 * Perform caching and other stuff to add offline capabilities
 */

const APP_CACHE = 'application-cache-v1';

const appFiles = [
	'/',
	'/index.html',
	'/restaurant.html',
	'/js/vendors.js',
	'/js/index.js',
	'/js/restaurant.js',
	'/css/styles.css',
	'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
	'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js'
];

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(APP_CACHE)
			.then(function (cache) {
				return cache.addAll(appFiles);
			})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.open(APP_CACHE).then(function (cache) {
			return cache.match(event.request).then(function (response) {
				return response || fetch(event.request).then(function (response) {
					cache.put(event.request, response.clone());
					return response;
				});
			});
		})
	);
});
