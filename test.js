var test = require("tape");
var logic = require("./logic");
var responses = require("./test-double");
var willHitObj = responses.willHit;
var wontHitObj = responses.wontHit;
var willHitObj2 = responses.willHit2;
var willHitObj3 = responses.willHit3;
var dateWillHit = responses.dateWillHit;
var dateWontHit = responses.dateWontHit;

//testing extractKeywords fn
test("tests keywords are extracted based on object data", function(t) {
  var actual = logic.extractKeywords(wontHitObj, dateWontHit);
  var expected = ["happy"];
  t.deepEqual(actual, expected, "0 true value - should return ['happy']");
  t.end();
});

test("tests keywords are extracted based on object data", function(t) {
  var actual = logic.extractKeywords(willHitObj, dateWillHit);
  var expected = ["stressed"];
  t.deepEqual(actual, expected, "1 true value - should return ['stressed']");
  t.end();
});

test("tests keywords are extracted based on object data", function(t) {
  var actual = logic.extractKeywords(willHitObj2, dateWillHit);
  var expected = ["panic"];
  t.deepEqual(actual, expected, "2 true values - should return ['panic']");
  t.end();
});

test("tests keywords are extracted based on object data", function(t) {
  var actual = logic.extractKeywords(willHitObj3, dateWillHit);
  var expected = ["apocalypse"];
  t.deepEqual(actual, expected, "3 true values - should return ['apocalypse']");
  t.end();
});

// TESTING EXTRACT DATA
test("Testing extractData returns an array", function(t) {
  var actual = logic.extractData(willHitObj);
  if (Array.isArray(actual)) {
    t.pass("output is an array");
  } else {
    t.fail("output is not an array");
  }
  t.end();
});

test("Testing extractData returns either an empty array or an array of objects", function(t) {
  var actual = logic.extractData(willHitObj);
  if (Array.isArray(actual)) {
    actual.forEach(function(x) {
      if (!(x instanceof Object)) {
        t.fail("item that is not an object exists in the array: " + x);
      }
    });
    t.pass("there is nothing in the array that isnt an object");
  } else {
    t.fail("actual is not an array");
  }
  t.end();
});

test("each object the array should include: speed, diameter, hazardous", function(t) {
  var actual = logic.extractData(willHitObj);
  actual.forEach(function(x) {
    if (
      x.hasOwnProperty("speed") &&
      x.hasOwnProperty("diameter") &&
      x.hasOwnProperty("hazardous") &&
      Object.keys(x).length == 3
    ) {
      t.pass("the array has objects each with the right properties");
    } else if (actual === []) {
      t.pass("the array is empty");
    } else {
      t.fail("the array contains wrong data");
    }
  });
  t.end();
});
// END OF TESTING EXTRACT DATA
