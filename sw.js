var version = 'v1';

this.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(version).then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/js/script.js',
        '/about/',
        '/about/index.html',
        '/add-your-event/',
        '/add-your-event/index.html',
        '/attendee-guide/',
        '/attendee-guide/index.html',
        '/fonts/GT-Walsheim-Medium.woff',
        '/fonts/GT-Walsheim-Regular.woff'
      ]);
    })
  );
});

function fromCache(request) {
  return caches.open(version).then(function (cache) {
    return cache.match(request).then(function (matching) {
      return matching || Promise.reject('no-match');
    });
  });
}

function update(request) {
  return caches.open(version).then(function (cache) {
    return fetch(request).then(function (response) {
      return cache.put(request, response);
    });
  });
}

this.addEventListener('fetch', function (event) {
  event.respondWith(fromCache(event.request));
  event.waitUntil(update(event.request));
});

this.addEventListener('activate', function (event) {
  var cacheWhitelist = [version];

  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
