
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
  document.querySelector(selector).addEventListener(eventName, callback);
  }

  function displayData(){}