const prompts = require("prompts");
const k = require("kolorist");
const fs = require("node:fs");
const path = require("node:path");
const data = require("./data.json");

const schema = [
	{
		type: "select",
		name: "year",
		message: "What year?",
		choices: Object.keys(data).map((x) => {
			return { title: x, value: x };
		}).reverse(),
	},
	{
		type: "select",
		name: "day",
		message: "What day?",
		choices: (prev) =>
			data[prev].map((x, i) => {
				return {
					title: `Day ${i + 1} - ${data[prev][i].name}`,
					value: x,
				};
			}),
	},
	{
		type: "select",
		name: "part",
		message: "What part?",
		choices: (prev) =>
			prev.parts.map((x, i) => {
				return { title: `Part ${i + 1}`, value: x };
			}),
	},
];

let reqArgs = 3;

(async () => {
	let day;
	let partScript;
	if (process.argv.length == 2 + reqArgs) {
		const args = process.argv.slice(2);
		try {
			day = data[args[0]][args[1] - 1];
			partScript = require(day.parts[args[2] - 1]);
		} catch (err) {
			console.error("Invalid arguments!");
			return;
		}
	} else {
		const response = await prompts(schema);
		partScript = require(response.part);
		day = response.day;
	}

	fs.readFile(path.join(__dirname, day.data), "utf8", (err, data) => {
		const start = process.hrtime();
		const res = partScript.run(data);
		const end = process.hrtime(start);
		const endNano = end[1] + end[0] * 1000000000;
		const endMs = endNano / 1000000;

		console.log(`${k.bold("🏁 Result")}${k.gray(":")} ${res} (${endMs}ms)`);
	});
})();
