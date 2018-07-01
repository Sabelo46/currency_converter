fetch('https://free.currencyconverterapi.com/api/v5/currencies')
.then(function(response){
    if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
    }
    response.json().then(function(data) {
        console.log(data);
        let currencies = data.results;
       for(check in currencies){
           console.log(currencies[check].id);
       }
    });
})