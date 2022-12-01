const fs = require("fs");
const path = require("node:path");

fs.readFile(path.resolve(__dirname, "./input.txt"), "utf8", (err, data) => {
	let sums = [];

	const inventories = data.split("\r\n\r\n");
	inventories.forEach(inventory => {
		inventory = inventory.split("\r\n");
		const sum = inventory.reduce((a, b) => +a + +b, 0);
		sums.push(sum);
	});

	console.log(Math.max(...sums));
});
