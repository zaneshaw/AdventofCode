var depth = 0;
var lastDepth = 0;
var increases = 0;

module.exports = {
	run(data) {
		const lines = data.split("\r\n");
		lines.forEach((line) => {
			depth = parseInt(line);

			if (lastDepth > 0) {
				if (depth > lastDepth) {
					increases++;
					console.log(`increased depth! (${depth}) ${increases}`);
				} else if (depth < lastDepth) {
					console.log(`decreased depth! (${depth})`);
				} else {
					console.log(`depth did not change! (${depth})`);
				}
			} else {
				console.log(`first sample! (${depth})`);
			}

			lastDepth = depth;
		});

		return increases;
	},
};
