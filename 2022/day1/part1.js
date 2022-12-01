module.exports = {
	run(data) {
		let sums = [];

		const inventories = data.split("\r\n\r\n");
		inventories.forEach((inventory) => {
			inventory = inventory.split("\r\n");
			const sum = inventory.reduce((a, b) => +a + +b, 0);
			sums.push(sum);
		});

		const max = Math.max(...sums);
		return max;
	},
};
