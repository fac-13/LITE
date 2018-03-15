var input = document.querySelector('#date');
var submitButton = document.querySelector('#submit');
var date = input.value;
var nasaDate = 'start_date=' + date + '&end_date='+ date;
//var nasaKey = '&api_key=' + config.nasaKey;
//var nasaURL = 'https://api.nasa.gov/neo/rest/v1/feed?' + nasaDate + nasaKey;

var testURL = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=HvBelXPceWFwmSUXn1BHVgyQFMpJeTT63Hrgrjkt';
// fetch to be used as a general function for calling an api request...

function fetchData(url, callback, err) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
  if (xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    return callback(response);
  } else {
    cb2();
  }
  });
  xhr.open("GET", url);
  xhr.send();
}

function cb1(data) {
  var keywordsForGiphy = logic.extractKeywords(data, "2015-09-07");
  var dataReadyToDisplay = logic.extractData(data);
  //fetchData(buildURLForGiphy(keywordsForGiphy),
  //});
}

function cb2() {
  console.log('There was an error.');
}

function buildURLForGiphy(search) {
  var giphyKey = '&api_key=' + 'JAvLv2ikeBnNmVn4AJUPy8WFnTyajjfe';
  var giphyKeyword = search[0];
  var giphyURL = 'http://api.giphy.com/v1/gifs/search?q=' + giphyKeyword + giphyKey;
  console.log(giphyURL);
}

fetchData(testURL, cb1, cb2);
buildURLForGiphy(['dogs']);

// function for eventlisteners
function addListener(selector, eventName, callback) {
selector.addEventListener(eventName, callback);
}

function displayData(){
  // one process to determine what is inside of the object passed in
}

addListener(submitButton, 'click', function(e) {
  console.log(e);
});

  //potentially have displayData() take two arrays, one with objects and one with strings
