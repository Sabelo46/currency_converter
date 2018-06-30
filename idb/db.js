spell=[
    {id:1,title:"Running the check",tool:"Web"},
    {id:2,title:"Running the tool",tool:"Design"},
    {id:4,title:"Running the Service",tool:"Service"},
    {id:3,title:"Running the host",tool:"Host"}
]
if(window.indexedDB){
    var request = indexedDB.open('roughDB',1);
   
        request.onupgradeneeded = function(event){
            alert('need');
            var db = event.target.result;
            var objStore = db.createObjectStore("hello", { autoIncrement : true });
            var transaction = db.transaction(["hello"], "readwrite");
            var keyValStore = transaction.objectStore('hello');
            keyValStore.put('bar', 'foo');
        }
    
    }
