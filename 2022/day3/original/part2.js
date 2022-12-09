module.exports = {
	run(data) {
		const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		
		const rucksacks = data.split("\r\n");
		const groups = [];

		let total = 0;

		for (let i = 0; i < rucksacks.length; i += 3) {
			groups.push([rucksacks[i], rucksacks[i+1], rucksacks[i+2]]);
		}
		groups.forEach(rucksack => {
			const split = rucksack;
			let found = false;
			for (let i1 = 0; i1 < split[0].length; i1++) {
				for (let i2 = 0; i2 < split[1].length; i2++) {
					for (let i3 = 0; i3 < split[2].length; i3++) {
						// console.log(split[0][i1] == split[1][i2]);
						if (!found) {
							if (split[0][i1] == split[1][i2] && split[0][i1] == split[2][i3] && split[1][i2] == split[2][i3]) {
								const find = split[0][i1];
								console.log(`${find} (${alpha.indexOf(find)+1})`);
								total += alpha.indexOf(find)+1;
								found = true;
							}
						}
					}
				}
			}
		});

		return total;
	},
};
