const request = require('request');
const breedName = process.argv[2];

const fetchBreedDescription = (breedName, callback) => {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {

    if (error) {
      callback('Error: ', null);
      return;
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      callback(`The ${breedName} can't be found`, null);
      return;
    }
    if (data[0]) {
      callback(null, data[0].description);
    }    

  });

};

module.exports = { fetchBreedDescription };
