module.exports = {
	run(data) {
		const monkeys = determineNotes(data);
		let rounds = 10000;

		for (let i = 0; i < rounds; i++) {
			for (let j = 0; j < monkeys.length; j++) {
				let monkey = monkeys[j];
				let len = monkey.startItems.length;
				for (let k = 0; k < len; k++) {
					monkey.inspections++;
					const item = monkey.startItems[k];
					// console.log(item);
					let worryLevel = getWorryLevel(item, monkey) % 9699690;
					// console.log(worryLevel);

					if (worryLevel % +monkey.test.divisible === 0) {
						// console.log(`true: ${monkey.test.true}`);
						monkeys[monkey.test.true].startItems.push(worryLevel);
						monkey.startItems.shift();
						len--;
						k--;
					} else {
						// console.log(`false: ${monkey.test.false}`);
						monkeys[monkey.test.false].startItems.push(worryLevel);
						monkey.startItems.shift();
						len--;
						k--;
					}
				}
				// console.log("");
			}
		}
		let test = [];
		monkeys.forEach(monkey => {
			test.push(monkey.inspections);
		});

		return test.sort((a, b) => b - a);

		function determineNotes(monkeys) {
			monkeys = monkeys.split("\r\n\r\n");

			for (let i = 0; i < monkeys.length; i++) {
				const monkey = monkeys[i];
				let propsObj = {
					startItems: [],
					operation: "",
					test: {
						divisible: 0,
						true: 0,
						false: 0,
					},
					inspections: 0,
				};

				props = monkey.split("\r\n");
				props[1].substring(props[1].indexOf(":") + 1);
				props.shift();
				for (let i = 0; i < props.length; i++) {
					const prop = props[i];
					let pretty = prop.substring(prop.indexOf(": ") + 1).trim();
					if (i == 0) {
						propsObj.startItems = pretty.split(", ").map(Number);
					} else if (i == 1) {
						propsObj.operation = pretty.split(" ");
						propsObj.operation.shift();
						propsObj.operation.shift();
						propsObj.operation.shift();
					} else if (i == 2) {
						propsObj.test.divisible = +pretty.substring(13);
					} else if (i == 3) {
						propsObj.test.true = +pretty.substring(16);
					} else if (i == 4) {
						propsObj.test.false = +pretty.substring(16);
					}
				}

				monkeys[i] = propsObj;
			}

			return monkeys;
		}

		function getWorryLevel(def, monkey) {
			let worryLevel = def;
			if (monkey.operation[1] == "old") {
				if (monkey.operation[0] == "+") {
					worryLevel += worryLevel;
				} else if (monkey.operation[0] == "-") {
					worryLevel -= worryLevel;
				} else if (monkey.operation[0] == "*") {
					worryLevel *= worryLevel;
				} else if (monkey.operation[0] == "/") {
					worryLevel /= worryLevel;
				}
			} else {
				if (monkey.operation[0] == "+") {
					worryLevel += +monkey.operation[1];
				} else if (monkey.operation[0] == "-") {
					worryLevel -= +monkey.operation[1];
				} else if (monkey.operation[0] == "*") {
					worryLevel *= +monkey.operation[1];
				} else if (monkey.operation[0] == "/") {
					worryLevel /= +monkey.operation[1];
				}
			}

			return worryLevel;
		}
	},
};
