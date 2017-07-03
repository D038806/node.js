/**
 Theme: Test Node.js
 IDE: None
 Language: Node.js
 Date: 105/07/08
 Author: HappyMan
 Blog: https://cg2010studio.wordpress.com/
 */

http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello Happy World\n');
  res.end('end\n');

}).listen(1337, '127.0.0.1'); // print hostlocsl . 1337 is post

console.log('Server running at http://127.0.0.1:1337/'); // print to cmd
