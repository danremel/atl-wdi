var http = require('http');
var urlParser = require('url');
var server = http
	.createServer()
	.listen(3001);

console.log("I'm listening on port: 3001");

server.on('request', function(request, response){
  console.log(request.url);
  var urlObj = urlParser.parse(request.url);
  var pathname = urlObj.pathname;

  console.log("requested: " + pathname);

  response.writeHead(200, {'Content-Type': 'text/html'});
  if (pathname === "/fun-times") {
  	response.write("<html><h1>Fun Times!</h1><img src=\"https://media.giphy.com/media/xT8qAY7e9If38xkrIY/giphy.gif\">");
	response.write("<script>console.log('hello world in the console')</script>");
	response.write("</html>");
  } else if (pathname === "/movies") {
  	response.write("<html>Movies!");
	response.write("<script>console.log('movies')</script>");
	response.write("</html>");
  } else if (pathname === "/portfolio") {
  	response.write("<html>Portfolio");
  	response.write("<script>console.log('portfolio')</script>");
  	response.write("</html>");
  }	else {
  	response.write("<html><h1>Error 404</h1>");
  	response.write("<script>console.log('Error 404')</script>");
  	response.write("</html>");
  }
  
  response.end();
});