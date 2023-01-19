// use request library to make http request
const request = require('request');
// use process.argv for user input which will be at index 2, consider that input = [node, breedFetcher.js, BREED]
const breedName = process.argv[2];

// using the request function right out of the fetcher.js file but repurposing it
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  

  const data = JSON.parse(body);
  if (!data[0]) {
    console.log(`The ${breedName} can't be found`);
    return;
  }
  if (data[0]) {
    console.log(`Breed Description: ${data[0].description}`);
    return;
  }

});

