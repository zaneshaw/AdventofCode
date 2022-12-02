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
			shapeBonus: {
				r: 1,
				p: 2,
				s: 3,
			},
			outcomeBonus: {
				lose: 0,
				win: 6,
				tie: 3,
			},
			rules: {
				r: {
					r: "tie",
					p: "win",
					s: "lose",
				},
				p: {
					r: "lose",
					p: "tie",
					s: "win",
				},
				s: {
					r: "win",
					p: "lose",
					s: "tie",
				},
			},
		};

		let points = 0;

		const rounds = data.split("\r\n");
		rounds.forEach((round) => {
			const shapes = round.split(" ").map((shape) => game.alias[shape]);
			points += game.shapeBonus[shapes[1]];

			const outcome = game.rules[shapes[0]][shapes[1]];
			points += game.outcomeBonus[outcome];
		});

		return points;
	},
};
