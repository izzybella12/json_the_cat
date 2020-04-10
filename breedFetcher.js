const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  let siberianCat = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;

  if (!breedName) {
    callback("Which breed are you looking for?");
  } else {
    request(siberianCat, (error, response, body) => {
      if (error) {
        callback(error);
      } else {
        const data = JSON.parse(body);
        let firstObject = data[0];
        let description = firstObject['description'];
        callback(null, description);
      }
    });
  }
};

module.exports = fetchBreedDescription;






