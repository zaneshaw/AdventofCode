const _ = require("lodash");

module.exports = {
	run(data) {
		const fs = {};
		const _operations = data.split("$ ");
		const operations = [];
		_operations.forEach((operation) => {
			const lines = operation.split("\r\n");
			operations.push(
				lines.filter(function (x) {
					return x != "";
				})
			);
		});

		let dir = "";
		let dirs = {};
		operations.forEach((operation) => {
			let command = null;
			operation.forEach((io) => {
				io = io.split(" ");
				if (io[0] == "cd") {
					command = "cd";

					if (io[1] == "/") {
						dir = "/";
					} else if (io[1] == "..") {
						const dirArr = dir.split("/");
						dirArr.splice(-2, 1);
						dir = dirArr.join("/");
					} else {
						dir += `${io[1]}/`;
					}

					// obj.sum = 0;

					console.log(`Changing directory to '${dir}'...`);
				} else if (io[0] == "ls") {
					command = "ls";

					console.log(`Listing current directory ('${dir}')...`);
				}

				if (command == "ls" && io[0] != "ls") {
					if (+io[0]) {
						// _dir.push(`file-${io[1]}-${io[0]}`);
						// console.log(dir);
						// dirs[dir].sum += +io[0];
						const _dirs = dir.slice(1, -1).split("/");

						for (let i = _dirs.length - 1; i >= 0; i--) {
							const obj = _.get(dirs, _dirs);
							_.set(
								dirs,
								[..._dirs, "sum"],
								(obj?.sum || 0) + +io[0]
							);
							_dirs.pop();
						}
						console.log(dir);

						console.log(`- File '${io[1]}' (${io[0]} size)`);
					} else {
						// _dir.push(`dir-${io[1]}`);

						console.log(`- Directory '${io[1]}'`);
					}
				}
			});
			console.log("");
		});

		function findSum(object) {
			let sum = 0;
			Object.keys(object).some(function (k) {
				if (k === "sum") {
					if (object[k] < 100000) {
						sum += object[k];
					}
				}
				if (object[k] && typeof object[k] === "object") {
					sum += findSum(object[k], "sum");
				}
			});
			return sum;
		}

		return findSum(dirs);
	},
};
