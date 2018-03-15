var submitButton = document.querySelector("#submit");
var date;
var nasaDate = "start_date=" + date + "&end_date=" + date;
var dataReadyToDisplay;
//var nasaKey = '&api_key=' + config.nasaKey;
//var nasaURL = 'https://api.nasa.gov/neo/rest/v1/feed?' + nasaDate + nasaKey;

var testURL =
  "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=HvBelXPceWFwmSUXn1BHVgyQFMpJeTT63Hrgrjkt";
// fetch to be used as a general function for calling an api request...

function fetchData(url, callback, err) {
  console.log(url);
  //  url = "https://cors-anywhere.herokuapp.com/" + url;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);

      return callback(response);
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

function cb1(data) {
  var keywordsForGiphy = logic.extractKeywords(data, date);
  dataReadyToDisplay = logic.extractData(data);
  console.log("fetching from giphy");
  fetchData(buildURLForGiphy(keywordsForGiphy), logic.extractURL, cb2);
}

function cb2() {
  console.log("There was an error.");
}

function buildURLForGiphy(search) {
  var giphyKey = "&api_key=" + "JAvLv2ikeBnNmVn4AJUPy8WFnTyajjfe";
  var giphyKeyword = search[0];
  var giphyURL =
    "http://api.giphy.com/v1/gifs/search?q=" + giphyKeyword + giphyKey;
  return giphyURL;
  // console.log(giphyURL);
}

fetchData(testURL, cb1, cb2);
//buildURLForGiphy(['dogs']);

// function for eventlisteners
function addListener(selector, eventName, callback) {
  selector.addEventListener(eventName, callback);
}

function makeURL(endpoint, keyword, apikey) {
  var url = endpoint + keyword + apikey;
  console.log(url);
  return url;
}

function displayData(link, data) {
  var numasteroids = data.length;
  var heading = document.querySelector("#response_header");
  heading.textContent =
    "There are " +
    numasteroids +
    " potentially hazardous asteroids speeding towards earth on this date!";

  var giffarea = document.querySelector("#giff_image");
  var imagetag = document.querySelector("#image");
  imagetag.src = link;
  data.forEach(function(x) {
    displayAstroid(x);
  });
  // one process to determine what is inside of the object passed in
}

function displayAstroid(obj) {
  var diameter = obj["diameter"];
  var speed = obj["speed"];
  var hazardous = obj["hazardous"];
  var fate_data = document.querySelector("#fate_data");
  var div = document.createElement("div");
  var p = document.createElement("p");
  div.appendChild(p);
  var text = document.createTextNode(
    "Diameter: " + diameter + " speed: " + speed + " Hazardous: " + hazardous
  );
  p.appendChild(text);
  fate_data.appendChild(div);
}

function formatDate() {
  var year = document.querySelector("#year").value;
  var month = document.querySelector("#month").value;
  var day = document.querySelector("#day").value;
  date = "'" + year + "-" + month + "-" + day + "'";
  console.log(date);
  return date;
}

//potentially have displayData() take two arrays, one with objects and one with strings
btn.addEventListener("click", function(e) {
  nasaUrl = makeURL(nasaEndpoint, nasaKeyword, config.nasaAPI);
  console.log(nasaUrl);
  fetchData(nasaUrl, c1, c2);
});
