
var logic = {


  extractKeywords: function(obj, date){
    var asteroidArray = obj.near_earth_objects[date];
    var result = asteroidArray.map(function(val){
      return val.is_potentially_hazardous_asteroid
    })
    var trueValues = result.filter(function(val){
      return val===true;
    })
    if(trueValues.length == 0){
      return ["happy"]
    }
  },

  extractData: function(){

  },

  processDateFormat: function(){

  }



}

// export for logic
if (typeof module !== 'undefined') {
  module.exports = logic;
}
