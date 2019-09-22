var CACHE_NAME = "0.0.7";
const FILES_TO_CACHE = [
    './index.html',
    './manifest.json',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache)=> {
        console.log('[ServiceWorker] Pre-caching offline page');
        return cache.addAll(FILES_TO_CACHE);
    })
  );
});
self.addEventListener('activate', function(event) {  
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
              if (key !== CACHE_NAME) {
                console.log('[ServiceWorker] Removing old cache', key);
                return caches.delete(key);
              }
            }));
          })
      
    );
  });
  self.addEventListener('fetch', function(evt) {
    evt.respondWith(
        caches.match(evt.request).then(res=>{
          if(res)return res;
          return fetch(evt.request);
        })
    );
  });