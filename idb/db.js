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
          let option=document.createElement('option');
          option.value = `${currencies[c].id}`;  
          let check = currencies[c].id;
          if(typeof check === 'undefined'){
            check ='';
          }
        //   option.text =  ` ${check} (${currencies[c].currencyName})`;  
        //   expect.appendChild(option);
        //   have.appendChild(option.cloneNode(true));
        console.log('Okay' + currencies);
        }

      });
    }
  )
  .catch(function(err) {
    console.log('Oops!, err')
    ;})