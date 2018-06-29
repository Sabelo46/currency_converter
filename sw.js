self.addEventListener('install', function(event) {
  // Perform install step
  console.log('Confirming if ready');
  console.log(event.request);
});