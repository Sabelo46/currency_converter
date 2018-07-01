
convert.addEventListener('click',function(){
    let fromSelect = encodeURIComponent(have.value);
    let toSelect = encodeURIComponent(expect.value);
    const query = `${fromSelect}_${toSelect}`;
    fetch(`https://free.currencyconverterapi.com/api/v5/convert?q=${query}`)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
         console.log(data.results);
         let rec = data.results;
         for(check in rec){
           self.addEventListener
             if(fromSelect == rec[check].fr && toSelect == rec[check].to){
                 to.value = from.value * rec[check].val;
             }
             
         }
      });
    }
  )
  .catch(function(err) {
    console.log('Oops!, err');
  });
})