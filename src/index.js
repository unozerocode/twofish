const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(response_text);
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