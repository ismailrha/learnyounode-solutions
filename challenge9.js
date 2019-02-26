const http = require("http");
const bl = require("bl");

let wholeData = new Array();
let count = 0;

const displayData = () => {
  wholeData.map(value => console.log(value));
};
for (let i = 0; i < 3; i++) {
  http.get(process.argv[2 + i], response => {
    response.pipe(
      bl(function(err, data) {
        if (err) return console.error(err);

        wholeData[i] = data.toString();
        count++;

        if (count === 3) {
          displayData();
        }
      })
    );
  });
}
