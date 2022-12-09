module.exports = {
	run(data) {
		let sums = [];

		const inventories = data.split("\r\n\r\n");
		inventories.forEach((inventory) => {
			inventory = inventory.split("\r\n");
			const sum = inventory.reduce((a, b) => +a + +b, 0);
			sums.push(sum);
		});

		const sorted = sums.sort((a, b) => b - a);
		let topSum = 0;
		for (let i = 0; i < 3; i++) {
			topSum += sorted[i];
		}
		
		return topSum;
	},
};
