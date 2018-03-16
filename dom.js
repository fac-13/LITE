var btn = document.querySelector("#submit");
var nasaEndpoint = "https://api.nasa.gov/neo/rest/v1/feed?";
var giphyEndpoint = "http://api.giphy.com/v1/gifs/search?q=";
var keywordsForGiphy;

function fetchData(url, callback) {
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

function getAsteroidData(data) {
  keywordsForGiphy = logic.extractKeywords(data)[0];
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
  var numAsteroids = data.length;
  var heading = document.querySelector("#response_header");
  heading.textContent =
    "There are " +
    numasteroids + " ☄ " +
    " asteroids speeding towards earth on this date!";

  var giffarea = document.querySelector("#giff_image");
  var imageTag = document.querySelector("#image");
  imageTag.src = link;
  imageTag.setAttribute('aria-label', 'gif image portraying the emotion of ' + keywordsForGiphy);
  var fateData = document.querySelector('#fate_data');
  while (fateData.firstChild) {
      fateData.removeChild(fateData.firstChild);
  }

  data.forEach(function(x) {
    displayAstroid(x);
    
  });
}

function displayAstroid(obj) {
  var resultsDiv = document.querySelector('#results-page')
  resultsDiv.style.display = "block";
  resultsDiv.scrollIntoView();
  var diameter = obj["diameter"];
  var speed = obj["speed"];
  var hazardous = obj["hazardous"];
  var fateData = document.querySelector("#fate_data");
  var div = document.createElement("div");
  div.classList.add('asteroids');
  var first = document.createElement("p")
  first.appendChild(document.createTextNode("☄ Diameter: " + diameter));
  var second = document.createElement("p")
  second.appendChild(document.createTextNode("☄ Speed: " + speed));
  var third = document.createElement("p")
  third.appendChild(document.createTextNode("☄ Hazardous: " + hazardous));
  div.appendChild(first);
  div.appendChild(second);
  div.appendChild(third);
  fateData.appendChild(div);
}


function formatDate() {
  var year = document.querySelector("#year").value;
  var month = document.querySelector("#month").value;
  var day = document.querySelector("#day").value;
  var date = year + "-" + month + "-" + day;
  return date;
}

function handleSubmit(e) {
  if (e.type === 'keypress' && (e.keyCode !== 32 || e.keyCode !== 13)) {
      return;
  }
  var date = formatDate();
  var nasaKeyword = "start_date=" + date + "&end_date=" + date;
  nasaUrl = makeURL(nasaEndpoint, nasaKeyword, config.nasaAPI);
  fetchData(nasaUrl, getAsteroidData);
};

btn.addEventListener("click", handleSubmit);

btn.addEventListener('keypress', handleSubmit);
