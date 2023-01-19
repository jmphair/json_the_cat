// use request library to make http request
const request = require('request');

// using the request function right out of the fetcher.js file but repurposing it
request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, response, body) => {
  
  const data = JSON.parse(body);
  console.log(data);
  console.log(typeof data);

});

