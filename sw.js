var cacheName = 'v1';
var cacheFiles = [
                  'index.html',
                  'ext.css',
                  'im/a.jpg',
                  'im/b.jpg',
                  'im/c.jpg',
                  'js/convert.js',
                  'js/currenciesController.js',
                  'node_modules/bootstrap/dist/css/bootstrap.css',
                  'node_modules/bootstrap/dist/js/bootstrap.js',
                  'node_modules/jquery/dist/jquery.js'
                  ]
self.addEventListener('install', function(event) {
  // Perform install step
  console.log("I'm ready to install for you");
  console.log(event.request);
  event.waitUntil(
    caches.open(cacheName).then(function(cache){
    	console.log('Adding files to cache');
    	return cache.addAll(cacheFiles);
    })
  )
});
self.addEventListener('activated', function(event) {
  // Perform install step
  console.log("I'm currently activated for you..");
  console.log(event.request);
});

self.addEventListener('fetch', function(event) {
  // Perform install step
  console.log("I'm ready to fetch for you..");
  console.log(event.request);
});
