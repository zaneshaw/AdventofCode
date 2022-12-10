module.exports = {
	run(data) {
		const head = { x: 0, y: 0 };
		const tails = Array.from({ length: 9 }, () => ({ x: 0, y: 0 }));

		const tailVisits = [];

		const instructions = data.split("\r\n");
		instructions.forEach((instruction) => {
			let [dir, steps] = instruction.split(" ");
			steps = +steps;

			for (let i = 0; i < steps; i++) {
				if (dir == "U") head.y++;
				if (dir == "D") head.y--;
				if (dir == "R") head.x++;
				if (dir == "L") head.x--;

				moveTail(tails[0], head);
				for (let j = 0; j < tails.length - 1; j++) {
					moveTail(tails[j + 1], tails[j]);
				}

				const last = tails.at(-1);
				if (!tailVisits.some((o) => o.x == last.x && o.y == last.y)) {
					tailVisits.push({ x: last.x, y: last.y });
				}
			}
		});

		// https://github.com/mackeraldev/advent-of-code-2022/blob/660d7adbaa49278cb2a12277e939f5ace20543b7/src/Days/Day9/part2.js#L42
		function moveTail(self, tar) {
			if (Math.abs(tar.x - self.x) > 1 || Math.abs(tar.y - self.y) > 1) {
				if (self.x != tar.x && self.y != tar.y) {
					self.x += Math.sign(tar.x - self.x);
					self.y += Math.sign(tar.y - self.y);
				} else {
					if (Math.abs(tar.x - self.x) > 1) {
						self.x += Math.sign(tar.x - self.x);
					}
					if (Math.abs(tar.y - self.y) > 1) {
						self.y += Math.sign(tar.y - self.y);
					}
				}
			}
		}

		return tailVisits.length;
	},
};
