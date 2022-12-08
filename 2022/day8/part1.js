module.exports = {
	run(data) {
		const grid = [];
		let visisbleTrees = 0;

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

				if (!visisble) {
					for (let x2 = 0; x2 < x; x2++) {
						if (grid[y][x2] >= grid[y][x]) {
							leftCheck = false;
						}
					}
					for (let y2 = 0; y2 < y; y2++) {
						if (grid[y2][x] >= grid[y][x]) {
							upCheck = false;
						}
					}
					for (let x3 = size.w - 1; x3 > x; x3--) {
						if (grid[y][x3] >= grid[y][x]) {
							downCheck = false;
						}
					}
					for (let y3 = size.h - 1; y3 > y; y3--) {
						if (grid[y3][x] >= grid[y][x]) {
							rightCheck = false;
						}
					}

					if (upCheck || downCheck || leftCheck || rightCheck) {
						visisble = true;
					}
				}

				if (visisble) {
					visisbleTrees++;
				}
			}
		}

		return JSON.stringify(visisbleTrees);
	},
};
