module.exports = {
	run(data) {
		const grid = [];
		let highScore = 0;

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
				const scores = [0, 0, 0, 0];

				// Increment score if tree is visible from direction
				for (let x2 = x - 1; x2 >= 0; x2--) { // East
					scores[0]++;
					if (grid[y][x2] >= grid[y][x]) break;
				}
				for (let y2 = y - 1; y2 >= 0; y2--) { // South
					scores[1]++;
					if (grid[y2][x] >= grid[y][x]) break;
				}
				for (let x3 = x + 1; x3 < size.w; x3++) { // West
					scores[2]++;
					if (grid[y][x3] >= grid[y][x]) break;
				}
				for (let y3 = y + 1; y3 < size.h; y3++) { // North
					scores[3]++;
					if (grid[y3][x] >= grid[y][x]) break;
				}

				// Calculate score of tree position
				const score = scores.reduce((a, b) => a * b);
				highScore = Math.max(highScore, score);
			}
		}

		return highScore;
	},
};
