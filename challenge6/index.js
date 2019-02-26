const filteredData = require("./filteredData");

const data = filteredData(process.argv[2], process.argv[3], (err, data) => {
  if (err) console.error(err);
  data.map(value => console.log(value));
});
