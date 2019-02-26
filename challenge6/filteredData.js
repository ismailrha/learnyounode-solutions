const fs = require("fs");

module.exports = (path, ext, callback) => {
  const filterExtension = value => {
    const reg = new RegExp(`.${ext}$`, "i");
    return value.search(reg) != -1;
  };

  const data = fs.readdir(path, (err, list) => {
    if (err) return callback(err);
    const filteredData = list.filter(filterExtension);
    callback(null, filteredData);
  });
};
