const http = require('http');
const url  = require('url');
const fs   = require('fs');

const server = http.createServer((request, response) => {
  parsed = url.parse(request.url, true);

  fs.readFile(__dirname + parsed.path + '.html', (err, data) => {
    if (err) {
      response.writeHead(302, {"Location": "/erro"});
    } else {
      response.write(data);
    }

    response.end();
  });
});

server.listen(3001, () => {
  console.log('Iniciando');
});
