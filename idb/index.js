import idb from 'idb';
var dbPromise = idb.open('load-db',1,function(upgradeDb){
    var keyValStore = upgradeDb.createObjectStore('keyval');
    keyValStore.put('world','hello');
})