const fs = require("fs");
const path = require("node:path");
const readline = require("readline");
const readInterface = readline.createInterface({
	input: fs.createReadStream(path.resolve(__dirname, "./input.txt")),
	console: false,
});

var depth = 0;
var lastDepth = 0;
var increases = 0;

readInterface.on("line", function (line) {
	depth = parseInt(line);

	if (lastDepth > 0) {
		if (depth > lastDepth) {
			increases++;
			console.log(`increased depth! (${depth}) ${increases}`);
		} else if (depth < lastDepth) {
			console.log(`decreased depth! (${depth})`);
		} else {
			console.log(`depth did not change! (${depth})`);
		}
	} else {
		console.log(`first sample! (${depth})`);
	}

	lastDepth = depth;
});
