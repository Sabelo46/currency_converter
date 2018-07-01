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
        let currencies = data.results;
        
        for(c in currencies){ 
        console.log('Okays' + currencies[c]);
        }

      });
    }
  )
  .catch(function(err) {
    console.log('Oops!, err')
    ;})