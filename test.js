var test = require("tape");
var logic = require("./logic");
var responses = require("./test-double");
var willHitObj = responses.willHit;
var wontHitObj = responses.wontHit;
var dateWillHit = responses.dateWillHit;
var dateWontHit = responses.dateWontHit;

//testing extractKeywords fn
test("tests keywords are extracted based on object data", function(t){
  var actual = logic.extractKeywords(wontHitObj, dateWontHit);
  var expected = ["happy"];
  t.deepEqual(actual, expected, "0 true value - should return ['happy']")
  t.end();
})

test('tests keywords are extracted based on object data', function(t) {
  var actual = logic.extractKeywords(willHitObj, dateWillHit);
  var expected = ['stressed'];
  t.deepEqual(actual, expected, "1 true value - should return ['stressed']")
  t.end();
})
