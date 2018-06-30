if(window.indexedDB){
    var request = indexedDB.open('roughDB',1);
    request.onerror = function(event){
        console.log(event);
    }
    request.onsuccess = function(event){
        console.log('success');
    }
    request.onupgradeneeded = function(event){
        var db = event.target.result;
        var objectStore = db.createObjectStore('hello',{keyPath:"id"});
        objectStore.createIndex("checking","title",{unique:false})
    }
}