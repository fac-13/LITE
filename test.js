var test = require("tape");
var logic = require("./logic");
var responses = require("./test-double");
var willHitObj = responses.willHit;
var wontHitObj = responses.wontHit;

test("Tape is working", function(t) {
  t.pass("Tap works");
  t.end();
});

test("Testing extractData returns an array", function(t) {

  var actual = logic.extractData(willHitObj);
  if (Array.isArray(actual)) {
    t.pass("output is an array");
  } else {
    t.fail("output is not an array");
  }
  t.end()
});

test("Testing extractData returns either an empty array or an array of objects", function(t) {
  var actual = logic.extractData(willHitObj);
  actual.forEach(function(x){
   if(!(x instanceof Object)){
     t.fail('item that is not an object exists in the array: ' + x)
    }
  });
    t.pass('there is nothing in the array that isnt an object')
  
  t.end()
})

// test('each object the array should include: speed, diameter, hazardous', function(t) {
//   var expected = ['speed', 'diameter', 'hazardous'];
//   var actual = logic.extractData(willHitObj);
//   var keysOfObj = Object.keys(obj);
//   keysOfObj.forEach(function(key) {
//     if (accumulator.include(key) === -1) {

//     }
//   });

// });