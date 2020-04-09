const request = require('request');
const fetchBreedDescription = require('./index');

let preliminaryCatBreed = process.argv;
let catBreed = process.argv.splice(2);
let siberianCat = "https://api.thecatapi.com/v1/breeds/search?q=" + catBreed;

if (catBreed.length === 0) {
  console.log("Which breed are you looking for?");
} else {
  request(siberianCat, (error, response, body) => {
    if (error) {
      console.log('error', error);
    } else {
      console.log('statusCode:', response && response.statusCode);
      const data = JSON.parse(body);
      let firstObject = data[0];
      let description = firstObject['description'];
      console.log(description);
    }
  });
}



