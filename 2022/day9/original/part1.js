module.exports = {
	run(data) {
		const headPos = { x: 0, y: 0 };
		const tailPos = { x: 0, y: 0 };
		let tailVisits = [];

		const instructions = data.split("\r\n");
		instructions.forEach((instruction) => {
			let [direction, steps] = instruction.split(" ");
			steps = +steps;

			if (direction == "U") {
				console.log(`Rope head moves up ${steps} times!`);
				moveHead({ x: 0, y: 1 }, steps);
			}
			if (direction == "D") {
				console.log(`Rope head moves down ${steps} times!`);
				moveHead({ x: 0, y: -1 }, steps);
			}
			if (direction == "L") {
				console.log(`Rope head moves left ${steps} times!`);
				moveHead({ x: -1, y: 0 }, steps);
			}
			if (direction == "R") {
				console.log(`Rope head moves right ${steps} times!`);
				moveHead({ x: 1, y: 0 }, steps);
			}
		});

		function moveHead(change, steps) {
			for (let i = 0; i < steps; i++) {
				headPos.x += change.x;
				headPos.y += change.y;
				if (headPos.x == tailPos.x && headPos.y == tailPos.y) {
					continue;
				}

				if (!isNeighbour(tailPos, headPos)) {
					if (change.x > 0) {
						tailPos.y = headPos.y;
						tailPos.x = headPos.x - 1;
					}
					if (change.y > 0) {
						tailPos.y = headPos.y - 1;
						tailPos.x = headPos.x;
					}
					if (change.x < 0) {
						tailPos.y = headPos.y;
						tailPos.x = headPos.x + 1;
					}
					if (change.y < 0) {
						tailPos.y = headPos.y + 1;
						tailPos.x = headPos.x;
					}
				}
				if (headPos.x - tailPos.x >= 2) {
					tailPos.x = headPos.x - 1;
				}
				if (headPos.x - tailPos.x <= -2) {
					tailPos.x = headPos.x + 1;
				}
				if (headPos.y - tailPos.y >= 2) {
					tailPos.y = headPos.y - 1;
				}
				if (headPos.y - tailPos.y <= -2) {
					tailPos.y = headPos.y + 1;
				}

				console.log(`Head pos: ${JSON.stringify(headPos)}`);
				console.log(`Tail pos: ${JSON.stringify(tailPos)}`);
				console.log("");

				tailVisits.push({ x: tailPos.x, y: tailPos.y });
			}
		}

		function isNeighbour(pos1, pos2) {
			if (
				isSame({ x: pos1.x + 1, y: pos1.y + 1 }, pos2) ||
				isSame({ x: pos1.x - 1, y: pos1.y - 1 }, pos2) ||
				isSame({ x: pos1.x + 1, y: pos1.y - 1 }, pos2) ||
				isSame({ x: pos1.x - 1, y: pos1.y + 1 }, pos2)
			) {
				// Diagonal
				return true;
			} else if (
				isSame({ x: pos1.x + 1, y: pos1.y }, pos2) ||
				isSame({ x: pos1.x - 1, y: pos1.y }, pos2) ||
				isSame({ x: pos1.x, y: pos1.y - 1 }, pos2) ||
				isSame({ x: pos1.x, y: pos1.y + 1 }, pos2)
			) {
				// Adjacent
				return true;
			}
			// Too far
			return false;
		}

		function isSame(pos1, pos2) {
			return pos1.x == pos2.x && pos1.y == pos2.y;
		}

		tailVisits = tailVisits.filter(
			(value, index, self) =>
				index ===
				self.findIndex((o) => o.x == value.x && o.y == value.y)
		);

		return tailVisits.length;
	},
};
