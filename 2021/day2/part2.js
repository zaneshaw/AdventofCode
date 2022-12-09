var pos = { x: 0, y: 0 };
var aim = 0;

module.exports = {
	run(data) {
		const lines = data.split("\r\n");
		lines.forEach((line) => {
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
					pos.x += amount;
					pos.y += amount * aim;
					break;
				default:
					break;
			}
			console.log(pos.x * pos.y);
		});

		return pos.x * pos.y;
	},
};
