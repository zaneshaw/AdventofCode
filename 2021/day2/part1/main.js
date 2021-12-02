const fs = require('fs')
const readline = require('readline');
const readInterface = readline.createInterface({
    input: fs.createReadStream('2021/day2/part1/input.txt'),
    console: false
});

var pos = {x:0, depth:0};

readInterface.on('line', function(line) {
    var command = line.split(" ")[0];
    var amount = parseInt(line.split(" ")[1]);

    switch (command) {
        case "up":
            pos.depth -= amount;
            break;
        case "down":
            pos.depth += amount;
            break;
        case "forward":
            pos.x += amount;
            break;
        default:
            break;
    }
    console.log(pos.depth * pos.x);
});