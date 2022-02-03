const z = require("zebras");
var er = fs.readFileSync('1.txt').toString().split("\n");
var arr = z.rolling(z.sum, 3,er);
console.log(arr)
console.log(arr.map((x, i) => { return x > arr[i -1] }).reduce((a, b) => a + b, 0));
