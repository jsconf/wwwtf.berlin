this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('v1').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/js/script.js',
        '/about/index.html',
        '/add-your-event/index.html',
        '/attendee-guide/index.html',
        '/fonts/GT-Walsheim-Medium.woff',
        '/fonts/GT-Walsheim-Regular.woff'
      ]);
    })
  );
});

this.addEventListener('fetch', function (event) {
  event.respondWith(caches.match(event.request).catch(function () {
    return fetch(event.request);
  }).then(function (response) {
    caches.open('v1').then(function (cache) {
      cache.put(event.request, response);
    });
    return response.clone();
  }));
});
