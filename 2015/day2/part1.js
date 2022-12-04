module.exports = {
	run(data) {
		const presents = data.split("\n");
		let total = 0;
		presents.forEach((present) => {
			const dimensions = present.split("x");
			const l = +dimensions[0];
			const w = +dimensions[1];
			const h = +dimensions[2];

			const sides = [l * w, w * h, h * l];
			const size = 2 * sides[0] + 2 * sides[1] + 2 * sides[2];
			total += size + Math.min(...sides)
		});

		return total;
	},
};
