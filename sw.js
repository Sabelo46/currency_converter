self.addEventListener('fetch', function(event) {
  // Perform install step
  console.log('Confirming if ready');
  console.log(event.request);
});