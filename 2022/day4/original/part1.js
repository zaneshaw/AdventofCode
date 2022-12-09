module.exports = {
	run(data) {
		const pairs = data.split("\r\n");
		let count = 0;
		pairs.forEach((pair) => {
			const pairNew = pair.split(",");

			const elf1 = pairNew[0].split("-");
			const elf2 = pairNew[1].split("-");
			if (+elf1[0] >= +elf2[0] && +elf1[1] <= +elf2[1]) {
				count++;
			} else if (+elf2[0] >= +elf1[0] && +elf2[1] <= +elf1[1]) {
				count++;
			}
		});

		return count;
	},
};
