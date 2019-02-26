const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
  fs.createReadStream(process.argv[3]).pipe(response);
});
server.listen(process.argv[2]);
