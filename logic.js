var logic = {
  extractKeywords: function(obj) {
    var nearEarthObjects = obj["near_earth_objects"];
    var asteroidsKey = Object.keys(nearEarthObjects)[0];
    var asteroidArray = nearEarthObjects[asteroidsKey];
    var result = asteroidArray.map(function(val) {
      return val.is_potentially_hazardous_asteroid;
    });
    var trueValues = result.filter(function(val) {
      return val === true;
    });

    switch (trueValues.length) {
      case 0:
        return ["happy"];
        break;
      case 1:
        return ["stressed"];
        break;
      case 2:
        return ["panic"];
        break;
      case 3:
       return ["apocalypse"];
      default:
       return ["apocalypse"];
    }
  },

  extractData: function(object) {
    //extracting diameter speed and hazardous
    var nearEarthObjects = object["near_earth_objects"];
    var asteroidsKey = Object.keys(nearEarthObjects)[0];

    var asteroids = nearEarthObjects[asteroidsKey];

    var obj = {};

    var results = asteroids.map(function(asteroid) {
      var diameter = asteroid["estimated_diameter"]["meters"][
        "estimated_diameter_max"
      ].toString();
      var speed =
        asteroid["close_approach_data"][0]["relative_velocity"][
          "miles_per_hour"
        ];
      var hazardous = asteroid["is_potentially_hazardous_asteroid"];
      return {
        diameter: diameter + " Meters",
        speed: speed + " Miles per hour",
        hazardous: hazardous
      };
    });
    return results;
  },
  extractURL: function(response) {
    var randomNumber = Math.floor(Math.random()*response.data.length);
    var link = response.data[randomNumber].images.downsized_medium.url;
    displayData(link, dataReadyToDisplay);
    return link;
  }
};
// export for logic
if (typeof module !== "undefined") {
  module.exports = logic;
}
