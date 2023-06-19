const http = require('http');

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello, world!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
