// function to get a url and return as a string
function getJSON(url) {
  var resp;
  var xmlHttp;

  resp  = '' ;
  xmlHttp = new XMLHttpRequest();

  if(xmlHttp != null)
  {
    xmlHttp.open( "GET", url, false );
    xmlHttp.send( null );
    resp = xmlHttp.responseText;
  }

  return resp;
}
// template url = https://spreadsheets.google.com/feeds/cells/YOURGOOGLESHEETCODE/SHEETPAGENUMBER/od6/public/values?alt=json

var jsonUrl = 'https://spreadsheets.google.com/feeds/cells/12gm6fRAp0bC8TB2vh7sSPT3V75Ug99JaA9L0PqiWS2s/1/public/full?alt=json';

var jsonString = getJSON(jsonUrl);       // this is a string

var jsonParsed = JSON.parse(jsonString); // this is a json object

var length = jsonParsed.length;              // length used for the for loop

// iterate over json
for (var id = 0; id < length; id++) {
  myJson = jsonParsed['feed']['entry'][id]['content']['$t'];  // where the content lives
  console.log(myJson);
}
