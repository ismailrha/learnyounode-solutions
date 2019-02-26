//Challenge 1
// console.log("HELLO WORLD")

//Challenge2

const sum = (a, b) => a + b;

let s = 0;
for (i = 2; i < process.argv.length; i++) s = sum(s, Number(process.argv[i]));

console.log(s);
