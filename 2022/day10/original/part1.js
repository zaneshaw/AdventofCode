module.exports = {
	run(data) {
		let X = 1;
		let cycle = 0;
		const strengths = [];
		const lines = data.split("\r\n");

		for (let i = 0; i < lines.length; i++) {
			console.log(`cycle: ${cycle}, X: ${X}`);

			const instruction = lines[i].split(" ");
			if (instruction[0] == "addx") {
				nextCycle(2);
				X += +instruction[1];
			} else {
				nextCycle(1);
			}
		}
		return strengths.reduce((a, b) => a + b);

		function nextCycle(amount) {
			for (let i = 0; i < amount; i++) {
				cycle++;
				console.log(`cycle: ${cycle}, X: ${X}`);

				if (cycle == 20) {
					strengths.push(X * 20);
				} else if (cycle == 60) {
					strengths.push(X * 60);
				} else if (cycle == 100) {
					strengths.push(X * 100);
				} else if (cycle == 140) {
					strengths.push(X * 140);
				} else if (cycle == 180) {
					strengths.push(X * 180);
				} else if (cycle == 220) {
					strengths.push(X * 220);
				}
			}
		}
	},
};
