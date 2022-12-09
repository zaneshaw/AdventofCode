module.exports = {
	run(data) {
		const parts = data.split("\r\n\r\n");
		const rawStacks = parts[0].split("\r\n");
		const rawInstructions = parts[1].split("\r\n");
		const stacks = new Array(8);
		for (let i = 0; i < 9; i++) {
			stacks[i] = [];
		}

		rawStacks.forEach((row, i) => {
			if (i < parts[0].split("\n").length - 1) {
				row = row.replace(/(.{3})./g, "$1").match(/.{1,3}/g);
				row.forEach((item, i) => {
					row[i] = item.slice(1, -1);
					stacks[i].push(row[i]);
				});
			}
		});
		// console.log(stacks);

		stacks.forEach((stack) => {
			for (let i = 0; i < stack.length; i++) {
				if (stack[i].trim() == "") {
					stack.splice(i, 1);
					i--;
				}
			}
		});
		// console.log(stacks);

		rawInstructions.forEach((instruction) => {
			instruction = instruction.match(/\d+/g);
			const quantity = instruction[0];
			const start = instruction[1] - 1;
			const end = instruction[2] - 1;
			for (let i = 0; i < quantity; i++) {
				stacks[end].unshift(stacks[start][0]);
				stacks[start].shift();
			}
		});

		let str = "";
		stacks.forEach((stack) => {
			str += stack[0];
		});

		return str;
	},
};
