module.exports = {
	run(data) {
		let position = [[0, 0], [0, 0]];
		const visited = [];
		const directions = data.split("");
		directions.forEach((direction, i) => {
			if (direction == ">") position[i % 2][0]++;
			if (direction == "<") position[i % 2][0]--;
			if (direction == "^") position[i % 2][1]++;
			if (direction == "v") position[i % 2][1]--;

			let isVisited = false;
			visited.forEach((tile) => {
				// .includes not working?
				if (tile[0] == position[i % 2][0] && tile[1] == position[i % 2][1]) {
					isVisited = true;
				}
			});
			if (!isVisited) {
				visited.push([...position[i % 2]]);
			}
		});

		return visited.length;
	},
};
