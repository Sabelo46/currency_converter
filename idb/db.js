if(window.indexedDB){
    var request = window.indexedDB.open("currencyConverterDb", 1);
    request.onerror= function(event){
        console.log('Found error');
    }
    request.onsuccess= function(event){
        console.log('successful');
    }
    request.onupgradeneeded = function(event){
        db = event.target.result;
        let dbStore = db.createObjectStore("results", { keyPath: "id"});
        dbStore.createIndex("arrange","id",{unique: true});
        dbStore.transaction.oncomplete = function(event){
            alert('cojdejfo');
        }
    }
}