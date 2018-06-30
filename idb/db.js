if(!window.indexedDB){
    alert('Not indexdb not allowed here');
}
else{
    var request = window.indexedDB.open("MyTestDatabase", 3);
    request.onerror = function(event){
        alert('Error in the code'+ event.target.errorCode)
    }
    request.onsuccess = function(event){
        db = event.target.result;
        request.onupgradeneeded = function(event){
            alert('Update needed');
        }
    }
}