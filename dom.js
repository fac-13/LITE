var input = document.querySelector('#date');
var submitButton = document.querySelector('#submit');
var date = input.value;
var nasaDate = 'start_date=' + date + '&end_date='+ date;
//var nasaKey = '&api_key=' + config.nasaKey;
//var nasaURL = 'https://api.nasa.gov/neo/rest/v1/feed?' + nasaDate + nasaKey;
//var giphyKey = '&api_key=' + config.giphyKey;
var giphyKeyword;
//var giphyURL = 'http://api.giphy.com/v1/gifs/search?q=' + giphyKeyword + giphyKey;

// fetch to be used as a general function for calling an api request...

function fetch(url, callback, other) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener("load", function() {
  if (xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    return callback(response);
  } else {
    other();
  }
  });
  xhr.open("GET", url);
  xhr.send();
}

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
