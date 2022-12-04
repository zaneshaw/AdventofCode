module.exports = {
	run(data) {
		let floor = 0;
		data.split("").forEach((instruction) => {
			if (instruction === "(") floor++;
			if (instruction === ")") floor--;
		});

		return floor;
	},
};
