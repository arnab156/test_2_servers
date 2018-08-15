
var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest(request, response) {

  response.end("It Works!! Path Hit: " + request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT1, function() {
  console.log("You are awesome!! " + PORT1);
});

server.listen(PORT2, function() {
    console.log("You were not that good today :-( " + PORT2);
  });
