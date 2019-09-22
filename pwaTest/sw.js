var CACHE_NAME = "0.0.1";
const FILES_TO_CACHE = [
    './pwaTest.html',
    './manifest.json',
    './momiji.PNG'
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
        // CODELAB: Add fetch event handler here.
    if (evt.request.mode !== 'navigate') {
        // Not a page navigation, bail.
        return;
    }
    evt.respondWith(
        fetch(evt.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                    return cache.match('offline.html');
                    });
            })
    );
  });