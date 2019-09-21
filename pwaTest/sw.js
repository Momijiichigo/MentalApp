var CACHE_NAME = "0.0.1";


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {      
        return cache.addAll();      
    })
  );
});
self.addEventListener('activate', function(event) {  
    event.waitUntil(
      
      caches.keys().then(function(cache) {
        cache.map(function(name) {
          if(CACHE_NAME !== name) caches.delete(name);
        })
      })
      
    );
  });
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      
      caches.match(event.request).then(function(res) {
          if(res) return res;
        
          return fetch(event.request);
      })
      
    );
  });