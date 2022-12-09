module.exports = {
	run(data) {
		const head = { x: 0, y: 0 };
		const tail = { x: 0, y: 0 };
		let tailVisits = [];

		const instructions = data.split("\r\n");
		instructions.forEach((instruction) => {
			let [dir, steps] = instruction.split(" ");
			steps = +steps;

			for (let i = 0; i < steps; i++) {
				if (dir == "U") head.y++;
				if (dir == "D") head.y--;
				if (dir == "R") head.x++;
				if (dir == "L") head.x--;

				if (head.x == tail.x && head.y == tail.y) continue;

				const isAdj = head.x == tail.x || head.y == tail.y;
				if (head.x - tail.x > 1) {
					tail.x = head.x - 1;
					if (!isAdj) tail.y = head.y;
				}
				if (head.y - tail.y > 1) {
					tail.y = head.y - 1;
					if (!isAdj) tail.x = head.x;
				}
				if (head.x - tail.x < -1) {
					tail.x = head.x + 1;
					if (!isAdj) tail.y = head.y;
				}
				if (head.y - tail.y < -1) {
					tail.y = head.y + 1;
					if (!isAdj) tail.x = head.x;
				}

				if (!tailVisits.some((o) => o.x == tail.x && o.y == tail.y)) {
					tailVisits.push({ x: tail.x, y: tail.y });
				}
			}
		});

		return tailVisits.length;
	},
};
