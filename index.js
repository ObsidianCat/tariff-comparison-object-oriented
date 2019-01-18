const tariffs = require("./data/tariffs").tariffsList;
const readline = require("readline");

const Utils = require("./Utils").Utils;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tariffsCollection = tariffs.map(item => Utils.createTariff(item));

console.log("Provide your annual consumption as a number");
rl.on("line", line => {
  console.log(Utils.prepareComparisonForPrint(tariffsCollection, line));
});
