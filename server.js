const http = require('http');


//create a server with http variable
const server = http.createServer(function(req,res){

  //Header
  res.writeHead(200, { 'Content-Type': 'text/plain'});
  res.end(" Welcome to Zuri Internship");
});

//create a port

server.listen(4000, '127.0.0.1');

console.log('Yes, you have created a server');