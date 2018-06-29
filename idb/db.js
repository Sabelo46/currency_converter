if(window.indexedDB){
    var request = indexedDB.open('roughDB',1);
    request.onerror = function(event){
        console.log(event);
    }
    request.onsuccess = function(event){
        console.log('success');
    }
}