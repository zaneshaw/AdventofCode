module.exports = {
	run(data) {
		let X = 1;
		let cycle = 0;
		const lines = data.split("\r\n");
		let screen = new Array(6).fill("");
		let defaultSprite = "###.....................................";

		for (let i = 0; i < lines.length; i++) {
			const instruction = lines[i].split(" ");
			if (instruction[0] == "addx") {
				nextCycle(2);
				X += +instruction[1];
				moveSprite(X);
			} else {
				nextCycle(1);
			}
		}

		screen.forEach(row => {
			console.log(row);
		});

		return 0;

		function nextCycle(amount) {
			for (let i = 0; i < amount; i++) {
				cycle++;

				if (cycle <= 40) {
					setScreen(0);
				} else if (cycle <= 80) {
					setScreen(1);
				} else if (cycle <= 120) {
					setScreen(2);
				} else if (cycle <= 160) {
					setScreen(3);
				} else if (cycle <= 200) {
					setScreen(4);
				} else if (cycle <= 240) {
					setScreen(5);
				}
			}

			function setScreen(row) {
				if ((cycle - row * 40) >= X && (cycle - row * 40) <= X + 2) {
					screen[row] += "#";
				} else {
					screen[row] += ".";
				}
			}
		}

		// Useless, but fun :D
		function moveSprite(amount) {
			if (amount > 0) {
				sprite = (".".repeat(amount) + defaultSprite).slice(0, -amount);
			} else if (amount < 0) {
				sprite =
					defaultSprite.slice(-amount, defaultSprite.length) +
					".".repeat(-amount);
			}
		}
	},
};
