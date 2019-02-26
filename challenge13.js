const http = require("http");
const url = require("url");

const parseTime = date => {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
};

const unixTime = date => {
  return {
    unixtime: date.getTime()
  };
};
const server = http.createServer((request, response) => {
  const q = url.parse(request.url, true);
  const date = new Date(q.query.iso);
  //using conditional operator because we have only 2 pathNames
  let parsedTime =
    q.pathname === "/api/parsetime" ? parseTime(date) : unixTime(date);

  response.writeHead(200, { "Content-Type": "application/json" });
  response.write(JSON.stringify(parsedTime));
});
server.listen(process.argv[2]);
