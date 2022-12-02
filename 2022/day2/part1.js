module.exports = {
	run(data) {
		let points = 0;

		const rounds = data.split("\r\n");
		rounds.forEach(round => {
			choices = round.split(" ");
			if (choices[1] === "X") {
				points++;
			} else if (choices[1] === "Y") {
				points += 2;
			} else if (choices[1] === "Z") {
				points += 3;
			}

			if (choices[0] === "A") {
				if (choices[1] === "Y") {
					points += 6;
				} else if (choices[1] === "X") {
					points += 3;
				}
			}
			if (choices[0] === "B") {
				if (choices[1] === "Z") {
					points += 6;
				} else if (choices[1] === "Y") {
					points += 3;
				}
			}
			if (choices[0] === "C") {
				if (choices[1] === "X") {
					points += 6;
				} else if (choices[1] === "Z") {
					points += 3;
				}
			}
		});

		return points;
	},
};
