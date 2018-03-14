var test = require("tape");
var logic = require("./logic");
var responses = require("./test-double");
var willHitObj = responses.willHit;
var wontHitObj = responses.wontHit;

//testing extractKeywords fn
test("tests keywords are extracted based on object data", function(t){
  var actual = logic.extractKeywords(wontHitObj);
  var expected = ["happy"];
  t.deepEqual(actual, expected, "0 trues - should return ['happy']")
  t.end();
})
