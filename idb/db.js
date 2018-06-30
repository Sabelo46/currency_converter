const customerData = [
    { ssn: "444-44-4444", name: "Tola", age: 35, email: "bill@company.com" },
    { ssn: "555-55-5555", name: "Shola", age: 32, email: "donna@home.org" }
  ];
if(!window.indexedDB){
    alert('Not indexdb not allowed here');
}
else{
    var request = window.indexedDB.open("MyTestDatabase", 5);
    request.onerror = function(event){
        // alert('Error in the code'+ event.target.errorCode)
    }
    request.onsuccess = function(event){
       console.log('Successful');
    }
    request.onupgradeneeded = function(event){
            alert('Update needed');
            db = event.target.result;
            let objectStore = db.createObjectStore("customers", { keyPath: "name"});
            objectStore.createIndex("confirm", "name", { unique: false });
            objectStore.transaction.oncomplete = function(event){
                //storing values here..
                let customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
                    customerData.forEach(function(customer) {
                    customerObjectStore.add(customer);
                
                    });
                    //Show on Browser
                    let request = db.transaction(["customers"]).objectStore("customers").getAll();
                    request.onsuccess = function(event){
                        console.log(request.result);
                    }
                    //Update 
                    let updateStore =  db.transaction("customers","readwrite").objectStore("customers");
                    var checkUpdate = updateStore.get("Tola");
                    checkUpdate.onsuccess = function(event){
                        var data = event.target.result;
                        data.age = 41;
                            // Put this updated object back into the database.
                            var requestUpdate = updateStore.put(data);
                            requestUpdate.onerror = function(event) {
                                // Do something with the error
                                alert('false');
                            };
                            requestUpdate.onsuccess = function(event) {
                                // Success - the data is updated!
                                alert('true');
                            };
                    }
                    // using a cursor
                    var customers=[];
                    var storeCheck = db.transaction("customers").objectStore("customers");
                    storeCheck.openCursor().onsuccess = function(event){
                        var cursor = event.target.result;
                        if(cursor){
                            // alert("Name for SSN " + cursor.key + " is " + cursor.value.name);
                            console.log(cursor.value);
                            customers.push(cursor.value);
                            cursor.continue();
                        }
                        else{
                            alert("No more entries!"+ customers);
                        }
                    }
                    //To delete code below
                    // let request = db.transaction(["customers"], "readwrite")
                    // .objectStore("customers")
                    // .delete("Tola");
            }
        }
      
    
}