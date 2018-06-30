spell=[
    {id:1,title:"Running the check",tool:"Web"},
    {id:2,title:"Running the tool",tool:"Design"},
    {id:4,title:"Running the Service",tool:"Service"},
    {id:3,title:"Running the host",tool:"Host"}
]
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
        objectStore.createIndex("checking","title",{unique:false});
        objectStore.transaction.oncomplete = function(event){
            var check = db.transaction(["hello"],"readwrite");
            var store = check.objectStore('hello');
            for(let c=0;c< spell.length;c++){
                store.add(spell[0]);
            }
        }
    }