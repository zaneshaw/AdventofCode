module.exports = {
	run(data) {
		const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		
		const rucksacks = data.split("\r\n");
		let total = 0;
		rucksacks.forEach(rucksack => {
			const split = [rucksack.slice(0, rucksack.length/2), rucksack.slice(rucksack.length/2)];
			let found = false;
			for (let i1 = 0; i1 < split[0].length; i1++) {
				for (let i2 = 0; i2 < split[1].length; i2++) {
					// console.log(split[0][i1] == split[1][i2]);
					if (!found) {
						if (split[0][i1] == split[1][i2]) {
							const find = split[0][i1];
							console.log(`${find} (${alpha.indexOf(find)+1})`);
							total += alpha.indexOf(find)+1;
							found = true;
						}
					}
				}
			}
		});

		return total;
	},
};
