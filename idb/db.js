if(window.indexedDB){
    var request = window.indexedDB.open("currencyConverterDb", 1);
    request.onerror= function(event){
        console.log('Found error');
    }
    request.onsuccess= function(event){
        console.log('successful');
    }
    let holder = [];
    request.onupgradeneeded = function(event){
        db = event.target.result;
        let dbStore = db.createObjectStore("results", { keyPath: "id"});
        dbStore.createIndex("arrange","id",{unique: true});
        dbStore.transaction.oncomplete = function(event){
                fetch('https://free.currencyconverterapi.com/api/v5/currencies')
                    .then(function(response){
                        if (response.status !== 200) {
                            console.log('Looks like there was a problem. Status Code: ' +
                            response.status);
                            return;
                        }
                        response.json().then(function(data) {
                            console.log('okkkk');
                        });
                    })
        }
    }
}