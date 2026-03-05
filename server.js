const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  try {
    const html = fs.readFileSync('index.html')
    res.write(html)
    res.end()
  }
  catch(error) {
    res.statusCode = 404;
    res.write('Bad request')
    console.log(error)
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});