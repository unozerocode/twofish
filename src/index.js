const http = require('http');
fileSystem = require('fs'),
path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  var filePath = path.join(__dirname, '../public/index.html');
  var stat = fileSystem.statSync(filePath);
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Length': stat.size
  });
  

  var readStream = fileSystem.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
  readStream.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

let response_text = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Two Fish</title>
    <meta name="description" content="This is an example of a meta description.">
    <link rel="stylesheet" type="text/css" href="theme.css">

    
  </head>
  <body>
		
  </body>
</html>`