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
                  'https://free.currencyconverterapi.com/api/v5/currencies',
                  // `https://free.currencyconverterapi.com/api/v5/convert?q=${query}`
                  ];
	self.addEventListener('install', function(event) {
	  // Perform install step
	  console.log("I'm ready to install for you");
	 
	  event.waitUntil(
	    caches.open(cacheName).then(function(cache){
	    	console.log('Adding files to cache');
	    	return cache.addAll(cacheFiles);
	    })
	  )
	});
	self.addEventListener('activate', function(event) {
		 console.log('Service worker activated');
		 event.waitUntil(
				 	caches.keys().then(function(cacheNames){
				 		return Promise.all(cacheNames.map(function(thisCacheName){
				           if(thisCacheName !== cacheName){
				             console.log('Removing cache files',thisCacheName);
				             return caches.delete(thisCacheName);
				           }
				         }))
				 	})
		 	)
		});

    self.addEventListener('fetch', function(event) {
      event.respondWith(
        // Try the cache
        caches.match(event.request).then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request).then(function(response) {
            if (response.status === 404) {
              return caches.match('index.html');
            }
            return response
          });
        }).catch(function() {
          // If both fail, show a generic fallback:
          return caches.match('index.html');
        })
      );
    });

	// self.addEventListener('fetch', function(event) {
	//   // Perform install step
	//   console.log("I'm ready to fetch for you..", event.request.url);
	//   event.respondWith(
	//     caches.match(event.request).then(function(response) {
	//     	if(response) {
	//     		console.log('Service worker found in cache',event.request.url);
	//     		return response;
  //       }
  //       var requestClone = event.request.clone();
  //       fetch(requestClone).then(function(response){
  //         if(!response){
  //           console.log('No response from fetch');
  //           return response;
  //         }
  //         var responseClone = request.clone;
  //         caches.open(cacheName).then(function(cache){
  //           console.log('New data found', event.request.url);
  //           cache.put(event.request,requestClone);
  //           return response;
  //         })
  //       }).catch(function(err){
  //         console.log("Service worker error fetching",err.request);
  //       })
	//       return fetch(event.request);
	//     })
	//   );
	// });
