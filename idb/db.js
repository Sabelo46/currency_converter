if(!window.indexedDB){
    alert('Not indexdb not allowed here');
}
else{
    var request = window.indexedDB.open("MyTestDatabase", 3);
    request.onerror = function(event){
        alert('Error in the code')
    }
    request.onsuccess = function(event){
        alert('Set');
    }
}