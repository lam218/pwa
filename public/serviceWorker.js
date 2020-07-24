// Use a cacheName for cache versioning
var cacheName = 'v1:static';
// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function (e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll([
            './',
            '/js/app.js',
            './favicon.ico',
            '/manifest.json',
            '/js/chunk-vendors.js',
            '/img/logo.82b9c7a5.png',
            'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css',
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/webfonts/fa-solid-900.woff2'
            ]).then(function () {
                self.skipWaiting();
            });
        })
    );
});

// when the browser fetches a URL…
self.addEventListener('fetch', function (event) {

    // … either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});