const net = require("net");

const formatDate = date => {
  return date < 10 ? "0" + date : date;
};
const server = net.createServer(socket => {
  let data = new Date();
  let date = `${data.getFullYear()}-${formatDate(
    data.getMonth() + 1
  )}-${formatDate(data.getDate())} ${formatDate(data.getHours())}:${formatDate(
    data.getMinutes()
  )}`;

  socket.end(date + "\n");
});

server.listen(process.argv[2]);
