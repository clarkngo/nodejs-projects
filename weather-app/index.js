// require the request package
const request = require('request');

// allows us to define variables from the command line
const argv = require('yargs').argv;

// create http server
const http = require('http');

// access file system
let fs = require('fs');

// tells the server to load .env files
require('dotenv').config();

// Open Weather API
let apiKey = process.env.WEATHER_API_KEY;   // please use your own API KEY and store it in a .env file
let city = argv.c || 'seattle';             // example: node index.js -c Manila

// default unit in Kelvin | units=metric for celsius | units=imperial for farenheit
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

var weather;
var message;

// pass url as parameter and
// request returns a callback function with arguments: err, response, and body
request(url, function (err, response, body) {
  // check for error
  if(err){    // if has error
    console.log('error:', error); // log the error
  } else {    // if no error
    // console.log('body:', body); // log entire contents of the response body
    weather = JSON.parse(body);
    message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});

// render the html file
fs.readFile('./index.html', function (err, html) {
  if (err) {
      throw err;
  }

  //create a server object:
  http.createServer(function (req, res) {
    res.writeHeader(200, {"Content-Type": "text/html"});

    // write a response to the client
    // res.write(JSON.stringify(weather));
    // res.write(JSON.stringify(weather.main.temp));
    // res.write(JSON.stringify(weather.name));
    res.write(html)
    // document.getElementById('location').innerHTML = JSON.stringify(weather.name);
    res.end(); //end the response
  }).listen(8080); //the server object listens on port 8080

});
