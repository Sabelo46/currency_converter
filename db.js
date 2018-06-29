import idb from 'idb';
var dbPromise = idb.open('load-db',1,function(upgradeDb){
   if(!upgradeDb.objectStoreNames.contains('store')){
       upgradeDb.createObjectStore('store'); 
       upgradeDb.createObjectStore('people',{keyPath:'email'});
       upgradeDb.createObjectStore('notes',{autoIncrement:true});
       upgradeDb.createObjectStore('logs',{keyPath:'id',autoIncrement:true});
   }
})