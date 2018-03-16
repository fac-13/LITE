#   LITE

##   PREMISE

Will the world end today (or a chosen day) and provide GIFs that show how concerned you should be

##   [REQUIREMENTS](https://github.com/foundersandcoders/master-reference/blob/master/coursebook/week-3/project.md)

Build a simple web app. Query at least two APIs and use the results to update the DOM.

##   APIs

For returning info about asteroids headed to earth: [NASA API](https://api.nasa.gov/api.html)

For collecting images related to danger level of asteroids: [GIPHY API](https://developers.giphy.com/docs/)

  

##   TESTS 

Test doubles for the API calls
  

## TO RUN THIS PROJECT

First clone the repo:

```
$ git clone https://github.com/fac-13/LITE.git

# OR

$ git clone git@github.com:fac-13/LITE.git

```

Then install the dependencies

```
$ npm install
```

To run tests
```
$ npm test
```

The api keys for this project should be in a `./config.js` file with a `config` object holding the two keys:

```javascript=
var config = {
    nasaAPI: '&api_key=' + 'your_api_key',
    giphyAPI: '&api_key=' + 'your_api_key'
}
```

##   TEAM GOALS
  

Implement TDD/test code coverage, keep functions pure, have organized architecture for our application, levels of panic (0 - happy, 1 - stressed, 2 - panic, 3 - apocalypse)

  
##   USER STORIES

As a user, I can:

  - Easily understand the format necessary to enter my date of choice

- Get back information regarding the likelihood that an asteroid will hit earth on that date


- See a GIF that represents how I should feel about the asteroid report

  

As a screen reader user, I can:

- Tab through everything on the page

- I can get an idea of what emotion is portrayed in the displayed gif

  

## Stretch goals

As a user, I can:

- Use a drop-down to enter my date
