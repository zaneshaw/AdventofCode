module.exports = {
	run(data) {
		const grid = [];
		let visisbleTrees = 0;

		// Generate grid from input
		data.split("\r\n").forEach((row) => {
			let cols = row.split("").map((x) => +x);
			grid.push(cols);
		});

		// Store grid size
		const size = { w: grid[0].length, h: grid.length };

		// Iterate through each grid cell
		for (let x = 0; x < size.w; x++) {
			for (let y = 0; y < size.h; y++) {
				let visibleDirections = 4;

				// Check if tree is obstructed from each direction
				for (let x2 = x - 1; x2 >= 0; x2--) { // East
					if (grid[y][x2] >= grid[y][x]) {
						visibleDirections--;
						break;
					}
				}
				for (let y2 = y - 1; y2 >= 0; y2--) { // South
					if (grid[y2][x] >= grid[y][x]) {
						visibleDirections--;
						break;
					}
				}
				for (let x3 = x + 1; x3 < size.w; x3++) { // West
					if (grid[y][x3] >= grid[y][x]) {
						visibleDirections--;
						break;
					}
				}
				for (let y3 = y + 1; y3 < size.h; y3++) { // North
					if (grid[y3][x] >= grid[y][x]) {
						visibleDirections--;
						break;
					}
				}

				// Check if tree is visisble from at least one direction
				if (visibleDirections > 0) visisbleTrees++;
			}
		}

		return visisbleTrees;
	},
};
