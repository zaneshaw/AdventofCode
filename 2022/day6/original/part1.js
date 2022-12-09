module.exports = {
	run(data) {
		const chars = data.split("");
		for (let i = 0; i < chars.length; i++) {
			const str = `${chars.slice(i, i + 14).join("")}`;

			let ok = true;
			for (let j = 0; j < str.length - 1; j++) {
				for (let k = j + 1; k < str.length; k++) {
					if (str[j] == str[k]) {
						ok = false;
					}
				}
			}
			if (ok) {
				return i + 14;
			}
		}

		return null;
	},
};
