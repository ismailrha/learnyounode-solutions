const fs = require("fs");

const filterExtension = value => {
  const reg = new RegExp(`.${process.argv[3]}$`, "i");
  return value.search(reg) != -1;
};

const data = fs.readdir(process.argv[2], (err, list) => {
  if (err) return console.error(err);
  const filteredData = list.filter(filterExtension);
  filteredData.map(value => console.log(value));
});
