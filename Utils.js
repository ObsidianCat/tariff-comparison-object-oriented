const TariffBasic = require("./tariffs/TariffBasic").TariffBasic;
const TariffPacked = require("./tariffs/TariffPacked").TariffPacked;

exports.Utils = class Utils {
  static prepareComparisonForPrint(tariffs, amountPerYear) {
    const results = tariffs
      .map(tariff => tariff.getFormattedPrice(amountPerYear))
      .sort((a, b) => a.price - b.price);
    let resultsForPrint = "";
    results.forEach(item => (resultsForPrint += `${item.message} \n`));
    return resultsForPrint;
  }
  static createTariff(tariff) {
    switch (tariff.type) {
      case "basic":
        return new TariffBasic(tariff);
      case "packed":
        return new TariffPacked(tariff);
    }
  }
};
