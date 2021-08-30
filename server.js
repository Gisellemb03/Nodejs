var http = require("http");

http.createServer (function(request, response){
  response.writeHead(200,
    {
      "Content-Type": "text/plain"
    }
    response.write(
      "Hola mundo server :) ...."
    );
    response.end();
}).listen(8080);
console.log("server running on port 8080");

