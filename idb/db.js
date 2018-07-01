fetch('https://free.currencyconverterapi.com/api/v5/currencies')
  .then(
    function(response) {
      if (response.status !== 200) {
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        
        // console.log(data.results);
        // let currenciesHolder = data;
        let store =[];
        let currencies = data.results;
        
        for(c in currencies){ 
             store.push(currencies[c].id);
        }
        console.log(store)
      });
    }
  )
  .catch(function(err) {
    console.log('Oops!, err')
    ;})