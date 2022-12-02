module.exports = {
	run(data) {
		const game = {
			alias: {
				A: "r",
				B: "p",
				C: "s",
				X: "r",
				Y: "p",
				Z: "s",
			},
			shapeBonus: [1, 2, 3], // Rock, Paper, Scissors
			outcomeBonus: [6, 3, 0], // Win, Tie, Lose
		};

		let points = 0;
		const rounds = data.split("\r\n"); // Seperate each round by line

		rounds.forEach((round) => {
			let shapes = round.split(" "); // Seperate each shape by spacing
			shapes = shapes.map((shape) => "rps".indexOf(game.alias[shape])); // Alias shapes for indexing
			points += game.shapeBonus[shapes[1]]; // Add shape bonus to point sum

			const difference = shapes[0] - shapes[1] + 1; // Get difference of shape choices
			const outcome = ((difference % 3) + 3) % 3; // Modulo of 3 (amount of possible shapes) to get true direction (Win (0) <- Tie (1) -> Lose (2))
			points += game.outcomeBonus[outcome]; // Add outcome bonus to point sum
		});

		return points;
	},
};
