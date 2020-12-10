// app.js
var http = require('http');
http.createServer((req,res) => {
  res.writeHead(200,{'Content-Type':'text/html'});
  res.write('<h1>Node.js</h1>');
  res.end('<h1>NodeJS执行完毕</h1>');
}).listen(3000);
console.log('Http server is listening at port 3000');