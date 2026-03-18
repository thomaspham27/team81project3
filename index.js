const http = require('http');

// Render provides the PORT environment variable automatically
const port = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Team 81 Project is Live!');
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Server is listening on port ${port}`);
});