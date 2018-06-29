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
                  'node_modules/jquery/dist/jquery.js',
                  'https://free.currencyconverterapi.com/api/v5/currencies'
                  ];
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
	self.addEventListener('activate', function(event) {
		 console.log('Service worker activated');
		});


	self.addEventListener('fetch', function(event) {
	  // Perform install step
	  console.log("I'm ready to fetch for you..");
	  event.respondWith(
	    caches.match(event.request).then(function(response) {
	    	if(response) {
	    		console.log('Service worker found in cache');
	    		return response;
	    	}
	      return fetch(event.request);
	    })
	  );
	});
