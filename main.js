const prompts = require("prompts");
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

	fs.readFile(path.join(__dirname, response.day.data), "utf8", (err, data) => {
		console.log(`Result: ${part.run(data)}`);
	});
})();
