self.addEventListener('fetch',function(event){
    event.respondWith(
        caches.match(event.request).then(function(response){
            if(response){
                console.log('Found Sabelo worker in cache',event.request.url);
                return response;
              }
        })
    )
})