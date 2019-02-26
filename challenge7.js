const http = require("http");

http.get(process.argv[2], response => {
  response.setEncoding("UTF-8");
  response.on("data", chunk => console.log(chunk));
  response.on("error", err => console.error(err));
});
