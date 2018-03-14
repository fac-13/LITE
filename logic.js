
var logic = {


  extractKeywords: function(obj){
    var asteroidArray = obj.near_earth_objects["2018-01-04"];
    var result = asteroidArray.map(function(val){
      return val.is_potentially_hazardous_asteroid
    })
    var trueValues = result.filter(function(val){
      return val===true;
    })
    if(trueValues.length == 0){
      return ["happy"]
    } else {
      return "hi"
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
