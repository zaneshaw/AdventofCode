var pos = { x: 0, depth: 0 };

module.exports = {
	run(data) {
		const lines = data.split("\r\n");
		lines.forEach((line) => {
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

		return pos.depth * pos.x;
	},
};
