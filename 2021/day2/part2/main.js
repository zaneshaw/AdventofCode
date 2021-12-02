const fs = require('fs')
const readline = require('readline');
const readInterface = readline.createInterface({
    input: fs.createReadStream('2021/day2/part2/input.txt'),
    console: false
});

var pos = {x:0, y:0};
var aim = 0;

readInterface.on('line', function(line) {
    var command = line.split(" ")[0];
    var amount = parseInt(line.split(" ")[1]);

    switch (command) {
        case "up":
            aim -= amount;
            break;
        case "down":
            aim += amount;
            break;
        case "forward":
            pos.x += amount
            pos.y += amount * aim;
            break;
        default:
            break;
    }
    console.log(pos.x * pos.y);
});
