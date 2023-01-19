const request = require('request'); // use request library to make http request

request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, response, body) => {
  console.log(typeof body);

});

