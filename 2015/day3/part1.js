module.exports = {
	run(data) {
		let position = [0, 0];
		const visited = [];
		const directions = data.split("");
		directions.forEach((direction) => {
			if (direction == ">") position[0]++;
			if (direction == "<") position[0]--;
			if (direction == "^") position[1]++;
			if (direction == "v") position[1]--;

			let isVisited = false;
			visited.forEach((tile) => {
				// .includes not working?
				if (tile[0] == position[0] && tile[1] == position[1]) {
					isVisited = true;
				}
			});
			if (!isVisited) visited.push([...position]);
		});

		return visited.length;
	},
};
