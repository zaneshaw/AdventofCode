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
		}),
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

(async () => {
	const response = await prompts(schema);
	const part = require(response.part);

	fs.readFile(
		path.join(__dirname, response.day.data),
		"utf8",
		(err, data) => {
			const start = process.hrtime();
			const res = part.run(data);
			const end = process.hrtime(start);
			const endNano = end[1] + end[0] * 1000000000;
			const endMs = endNano / 1000000;

			console.log(
				`${k.bold("🏁 Result")}${k.gray(":")} ${res} (${endMs}ms)`
			);
		}
	);
})();
