const customerData = [
    { ssn: "444-44-4444", name: "Tola", age: 35, email: "bill@company.com" },
    { ssn: "555-55-5555", name: "Kola", age: 32, email: "donna@home.org" }
  ];
if(!window.indexedDB){
    alert('Not indexdb not allowed here');
}
else{
    var request = window.indexedDB.open("MyTestDatabase", 3);
    request.onerror = function(event){
        alert('Error in the code'+ event.target.errorCode)
    }
    request.onsuccess = function(event){
        alert('set'+request.result.name);
    }
    request.onupgradeneeded = function(event){
            alert('Update needed');
            db = event.target.result;
            var objectStore = db.createObjectStore("customers", { keyPath: "name"});
            objectStore.createIndex("confirm", "name", { unique: false });
            objectStore.transaction.oncomplete = function(event){
                //storing values here..
                var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
                    customerData.forEach(function(customer) {
                    customerObjectStore.add(customer);
                
                    });
                    var request = db.transaction(["customers"]).objectStore.get('Tola');
                    //To delete code below
                    // var request = db.transaction(["customers"], "readwrite")
                    // .objectStore("customers")
                    // .delete("Tola");
            }
        }
      
    
}