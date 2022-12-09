module.exports = {
	run(data) {
		let points = 0;

		const rounds = data.split("\r\n");
		rounds.forEach(round => {
			choices = round.split(" ");
			if (choices[0] === "A") {
				if (choices[1] === "X") {
					points += 3 + 0;
				} else if (choices[1] === "Y") {
					points += 1 + 3;
				} else if (choices[1] === "Z") {
					points += 2 + 6;
				}
			} else if (choices[0] === "B") {
				if (choices[1] === "X") {
					points += 1 + 0;
				} else if (choices[1] === "Y") {
					points += 2 + 3;
				} else if (choices[1] === "Z") {
					points += 3 + 6;
				}
			} else if (choices[0] === "C") {
				if (choices[1] === "X") {
					points += 2 + 0;
				} else if (choices[1] === "Y") {
					points += 3 + 3;
				} else if (choices[1] === "Z") {
					points += 1 + 6;
				}
			}
		});

		return points;
	},
};