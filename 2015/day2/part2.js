module.exports = {
	run(data) {
		const presents = data.split("\r\n");
		let total = 0;
		presents.forEach((present) => {
			// I got stumped on this part, so I looked up the answer and apparently I was missing the part were I'm supposed to sort the dimensions. 30 minutes later and I still have no idea why and how this fixes my problem, but oh well ¯\_(ツ)_/¯
			const dimensions = present.split("x").sort(function (a, b) {
				return a - b;
			});
			const l = +dimensions[0];
			const w = +dimensions[1];
			const h = +dimensions[2];

			const length1 = l * 2 + w * 2;
			const length2 = l * w * h;
			total += length1 + length2;
		});

		return total;
	},
};
