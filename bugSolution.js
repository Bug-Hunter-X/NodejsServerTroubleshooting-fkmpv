const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080; // Assign port to variable for better management
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});