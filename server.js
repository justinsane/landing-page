const http = require('http');
const fs = require('fs')
const port = 8080;

const requestHandler = (req, res) => {
  console.log(req.url)
  fs.readFile(__dirname + req.url, function (err,data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
  });
}
const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) return console.log('something bad happened', err)
  console.log(`server is listening on ${port}`)
})