var Fetch = require('whatwg-fetch');
//var url = 'https://media.lottoland.com/api/drawings/euroJackpot';
var url = 'data/data.json'

module.exports = {
  get: function() {
    return fetch(url)
    .then(function(response){
      return response.json()
    })
  }
};

// XMLHttpRequest cannot load https://media.lottoland.com/api/drawings/euroJackpot. No 'Access-Control-Allow-Origin'
// header is present on the requested resource. Origin 'http://localhost:8000' is therefore not allowed access.
// var request = new XMLHttpRequest();
// module.exports = {
//   get : function () {
//     request.open('GET', url, true);

//     request.onload = function() {
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//       } else {
//         // We reached our target server, but it returned an error
//       }
//     };

//     request.onerror = function() {
//     // There was a connection error of some sort
//     };

//     request.send();
//   }
// };