spell=[
    {id:1,title:"Running the check",tool:"Web"},
    {id:2,title:"Running the tool",tool:"Design"},
    {id:4,title:"Running the Service",tool:"Service"},
    {id:3,title:"Running the host",tool:"Host"}
]
if(window.indexedDB){
   
    // request.onerror = function(event){
    //     console.log(event);
    // }
    // request.onsuccess = function(event){
    //     console.log('success');
    // }
    //     request.onupgradeneeded = function(event){
    //         alert();
    //         var db = event.target.result;
    //         var objectStore = db.createObjectStore('hello',{keyPath:"id"});
    //         objectStore.createIndex("checking","title",{unique:false});
    //         objectStore.transaction.oncomplete = function(event){
    //             var check = db.transaction(["hello"],"readwrite");
    //             var store = check.objectStore('hello');
    //             for(let c=0;c< spell.length;c++){
    //                 store.add(spell[c]);
    //             }
                
    //                 console.log('Good to go on indexedDB! ');
            
    //     }   
    // }
    var dbPromise = indexedDB.open('roughDB',1,function(upGradeDb){
        var db = event.target.result;
        var keyValStore = db.createObjectStore('sqi',{keyPath:"id"});
        keyValStore.createIndex("checking","title",{unique:false});
    });
    dbPromise.then(function(response){
        var tx = response.trasaction('sqi','readwrite');
        var store = tx.objectStore('sqi');
        for(let c=0;c< spell.length;c++){
            store.add(spell[c]);
        }
    }).then(function(){
        console.log('Added to IndexDb successfully');
    })
}