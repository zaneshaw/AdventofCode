module.exports = {
	run(data) {
		const grid = [];
		let visisbleTrees = 0;
		let highestScore = 0;

		const rows = data.split("\r\n");
		for (let i = 0; i < rows.length; i++) {
			grid.push(rows[i].split(""));
		}

		const size = { w: grid[0].length, h: grid.length };
		for (let x = 0; x < size.w; x++) {
			for (let y = 0; y < size.h; y++) {
				let visisble = false;
				// console.log(grid[y][x]);
				if (y - 1 < 0) {
					visisble = true;
					// console.log("None up!");
				}
				if (x - 1 < 0) {
					visisble = true;
					// console.log("None left!");
				}
				if (y + 1 >= size.h) {
					visisble = true;
					// console.log("None down!");
				}
				if (x + 1 >= size.w) {
					visisble = true;
					// console.log("None right!");
				}

				let leftCheck = true;
				let upCheck = true;
				let rightCheck = true;
				let downCheck = true;
				let leftPoint = 0;
				let upPoint = 0;
				let rightPoint = 0;
				let downPoint = 0;

				if (!visisble) {
					for (let x2 = x - 1; x2 >= 0; x2--) {
						leftPoint++;
						if (grid[y][x2] >= grid[y][x]) {
							leftCheck = false;
							break;
						}
					}
					for (let y2 = y - 1; y2 >= 0; y2--) {
						upPoint++;
						if (grid[y2][x] >= grid[y][x]) {
							upCheck = false;
							break;
						}
					}
					for (let x3 = x + 1; x3 < size.w; x3++) {
						downPoint++;
						if (grid[y][x3] >= grid[y][x]) {
							downCheck = false;
							break;
						}
					}
					for (let y3 = y + 1; y3 < size.h; y3++) {
						rightPoint++;
						if (grid[y3][x] >= grid[y][x]) {
							rightCheck = false;
							break;
						}
					}

					if (upCheck || downCheck || leftCheck || rightCheck) {
						visisble = true;
					}
					const score = upPoint * downPoint * leftPoint * rightPoint;
					highestScore = Math.max(highestScore, score);
					// console.log(
					// 	`${grid[y][x]} (x:${x}, y:${y}, score:${score})`
					// );
				}

				if (visisble) {
					visisbleTrees++;
				}
			}
		}

		return JSON.stringify(highestScore);
	},
};
