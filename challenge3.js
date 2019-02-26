//Challenge 3

const fs = require("fs");
const data = fs.readFileSync(process.argv[2]);
const count = data.toString().split("\n").length - 1;
console.log(count);
