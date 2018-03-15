var logic = {
  extractKeywords: function(obj, date) {
    var asteroidArray = obj.near_earth_objects[date];
    var result = asteroidArray.map(function(val) {
      return val.is_potentially_hazardous_asteroid;
    });
    var trueValues = result.filter(function(val) {
      return val === true;
    });
    if (trueValues.length == 0) {
      return ["happy"];
    }
    if (trueValues.length === 1) {
      return ["stressed"];
    }
    if (trueValues.length === 2) {
      return ["panic"];
    }
    if (trueValues.length >= 3) {
      return ["apocalypse"];
    }
  },

  processDateFormat: function() {},

  extractData: function(object) {
    // in object we need to extract diamerer speed and hazardous
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
    var link = response.data[1].images.downsized_medium.url;
    displayData(link, dataReadyToDisplay);
    console.log(link);
    return link;
  }
};
// export for logic
if (typeof module !== "undefined") {
  module.exports = logic;
}
