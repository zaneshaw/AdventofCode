module.exports = {
	run(data) {
		const instructions = data.split("");
		let floor = 0;
		
		for (let i = 0; i < instructions.length; i++) {
			if (instructions[i] === "(") floor++;
			if (instructions[i] === ")") floor--;
			if (floor < 0) {
				return i + 1;
			}
		}

		return null;
	},
};
