var input = document.querySelector("#date")
var btn = document.querySelector('.submit')
var nasaUrl = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-03-03&end_date=2018-03-03&api_key=EdWudhuvn66MkSN47xbjWdghOaFq4IndYQEm58HD'
var date = "2018-03-03";
var nasaKeyword= "start_date="+date+"&end_date="+ date
var nasaEndpoint = 'https://api.nasa.gov/neo/rest/v1/feed?'
var giphyEndpoint = "http://api.giphy.com/v1/gifs/search?q="


var image = document.querySelector(".giphy")
var asteroidData;
var para = document.querySelector('.displaying')

function fetchData(url, callback, other) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
   if (xhr.readyState == 4 && xhr.status === 200) {
     var response = JSON.parse(xhr.responseText);
     return callback(response);
   } else {
   other();
  }
  }
  xhr.open("GET", url);
  xhr.send();
  }

  function makeURL(endpoint, keyword, apikey){
    var url = endpoint+keyword+apikey;
    console.log(url)
    return url;
  }

  function displayData(){}

  function c1(data){
    console.log(data)
    asteroidData = logic.extractData(data);
    var keyword = logic.extractKeywords(data, '2018-03-03');
    var giphyURL = makeURL(giphyEndpoint, keyword, config.giphyAPI)
    //var giphyURL = 'http://api.giphy.com/v1/gifs/search?q=stressed&api_key=dc6zaTOxFJmzC'
    fetchData(giphyURL, extractLink, c2)
  }
  function c2(){
    console.log('error')
  }

  function extractLink(res){
    console.log(res)
    var link = res.data[1].images.downsized_medium.url;
    console.log(link);
    displayData(link, asteroidData);
    return link;
  }

  function displayData(link, asteroidData) {
    image.src=link;
    para.innerText = asteroidData[0].diameter + " " +asteroidData[0].speed + " "+asteroidData[0].hazardous;
  }

   btn.addEventListener('click', function(e){
     date = input.value;
     nasaUrl=  makeURL(nasaEndpoint, nasaKeyword, config.nasaAPI)
     console.log(nasaUrl)
     fetchData(nasaUrl, c1, c2)
   })
