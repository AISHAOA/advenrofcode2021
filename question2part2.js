var fs = require('fs');
var array = fs.readFileSync('pro2.txt').toString().split("\n");

var sum = 0;
var depth = 0;
var aim = 0;
array.map((x) => {
    return x.substring(0, 7) == "forward" ? [sum += parseInt(x.substring(8)), depth += aim * parseInt(x.substring(8))] :
        x.substring(0, 4) == "down" ? aim += parseInt(x.substring(5)) :
            x.substring(0, 2) == "up" ? aim -= parseInt(x.substring(3)) : 0;
});
console.log(sum, " ", depth, " ", aim);
console.log(sum * depth);
