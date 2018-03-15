var btn = document.querySelector("#submit");
var nasaUrl =
  "https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-03-03&end_date=2018-03-03&api_key=EdWudhuvn66MkSN47xbjWdghOaFq4IndYQEm58HD";
var date;
var nasaKeyword;
var nasaEndpoint = "https://api.nasa.gov/neo/rest/v1/feed?";
var giphyEndpoint = "http://api.giphy.com/v1/gifs/search?q=";

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
  var keywordsForGiphy = logic.extractKeywords(data, date)[0];
  dataReadyToDisplay = logic.extractData(data);
  console.log("fetching from giphy");
  fetchData(
    makeURL(giphyEndpoint, keywordsForGiphy, config.giphyAPI),
    logic.extractURL,
    cb2
  );
}

function cb2() {
  console.log("There was an error.");
}

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
  date = year + "-" + month + "-" + day;
  nasaKeyword = "start_date=" + date + "&end_date=" + date;
  console.log(date);
  return date;
}

//potentially have displayData() take two arrays, one with objects and one with strings
btn.addEventListener("click", function(e) {
  formatDate();
  nasaUrl = makeURL(nasaEndpoint, nasaKeyword, config.nasaAPI);
  console.log(nasaUrl);
  fetchData(nasaUrl, cb1, cb2);
});
