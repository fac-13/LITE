var btn = document.querySelector("#submit");
var date;
var nasaKeyword;
var nasaEndpoint = "https://api.nasa.gov/neo/rest/v1/feed?";
var giphyEndpoint = "http://api.giphy.com/v1/gifs/search?q=";
var keywordsForGiphy;

function fetchData(url, callback, err) {
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
  keywordsForGiphy = logic.extractKeywords(data, date)[0];
  dataReadyToDisplay = logic.extractData(data);
  fetchData(
    makeURL(giphyEndpoint, keywordsForGiphy, config.giphyAPI),
    logic.extractURL,
    cb2
  );
}

function cb2() {
  console.log("There was an error.");
}

function makeURL(endpoint, keyword, apikey) {
  var url = endpoint + keyword + apikey;
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
  var imageTag = document.querySelector("#image");
  imageTag.src = link;
  imageTag.setAttribute('aria-label', 'gif image portraying the emotion of ' + keywordsForGiphy);
  data.forEach(function(x) {
    displayAstroid(x);
  });
}

function displayAstroid(obj) {
  var diameter = obj["diameter"];
  var speed = obj["speed"];
  var hazardous = obj["hazardous"];
  var fateData = document.querySelector("#fate_data");
  var div = document.createElement("div");
  var p = document.createElement("p");
  div.appendChild(p);
  var text = document.createTextNode(
    "Diameter: " + diameter + " Speed: " + speed + " Hazardous: " + hazardous
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
  fetchData(nasaUrl, cb1, cb2);
});
