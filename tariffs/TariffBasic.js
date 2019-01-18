const Tariff = require("./Tariff").Tariff;

exports.TariffBasic = class TariffBasic extends Tariff {
  constructor({ name, baseCostPerMonth, pricePerUnit }) {
    super({ name });
    this.baseCostPerMonth = baseCostPerMonth;
    this.pricePerUnit = pricePerUnit;
  }

  calculateAnnualprice(amountPerYear) {
    return this.baseCostPerMonth * 12 + amountPerYear * this.pricePerUnit;
  }
};
