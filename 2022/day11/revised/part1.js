module.exports = {
	run(data) {
		// Parse notes as monkey data
		const monkeys = data.split("\r\n\r\n").map((x) => {
			const props = x.split("\r\n").slice(1);
			return {
				items: props[0].match(/\d+/g).map(Number),
				operation: props[1].split("= ")[1],
				test: {
					num: +props[2].match(/\d+/g),
					true: +props[3].match(/\d+/g),
					false: +props[4].match(/\d+/g),
				},
				inspections: 0,
			};
		});

		// Repeat simulation for 20 rounds
		for (let round = 0; round < 20; round++) {
			// Simulate each monkey in order
			for (let i = 0; i < monkeys.length; i++) {
				const m = monkeys[i];
				// Throw every item
				while (m.items.length > 0) {
					const operation = m.operation.replaceAll("old", m.items[0]);
					const worry = Math.floor(eval(operation) / 3);
					const target = worry % +m.test.num === 0 ? "true" : "false";

					// Throw item to target monkey
					monkeys[m.test[target]].items.push(worry);
					m.items.shift();

					// Increment monkey inspection counter
					m.inspections++;
				}
			}
		}

		// Gather and sort total inspection count for each monkey
		const inspections = monkeys
			.map((x) => {
				return x.inspections;
			})
			.sort((a, b) => b - a);

		// Return level of monkey business
		return inspections[0] * inspections[1];
	},
};
