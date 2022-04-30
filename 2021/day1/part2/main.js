const fs = require('fs')

fs.readFile('2021/day1/part2/input.txt', 'utf8', (err, data) => {
    var decreases = 0;
    data = data.split('\r\n').map(data => parseInt(data));

    for (var i = 0; i < data.length-2; i++) {
        var currentSet = data[i] + data[i+1] + data[i+2];
        var nextSet = data[i+1] + data[i+2] + data[i+3];
        if (currentSet < nextSet) {
            decreases++;
        }
        console.log(decreases);
    }
});
