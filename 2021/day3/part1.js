var powerConsumption;
var gammaRate = "";
var epsilonRate = "";

module.exports = {
	run(data) {
		data = data.split("\r\n");

		for (let i = 0; i < data[0].length; i++) {
			var zeros = 0;
			var ones = 0;
			for (var j = 0; j < data.length; j++) {
				data[i].split("");
				if (data[j][i] == "0") {
					zeros++;
				} else {
					ones++;
				}
			}
			if (ones > zeros) {
				gammaRate += "1";
				epsilonRate += "0";
			} else {
				gammaRate += "0";
				epsilonRate += "1";
			}
		}

		powerConsumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);

		return powerConsumption;
	},
};
