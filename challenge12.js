const http = require("http");
const map = require("through2-map");

const server = http.createServer((request, response) => {
  if (request.method !== "POST")
    return response.end("error : only POST is supported");
  request.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(response);
});

server.listen(process.argv[2]);
