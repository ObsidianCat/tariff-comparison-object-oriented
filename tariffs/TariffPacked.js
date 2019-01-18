const Tariff = require("./Tariff").Tariff;

exports.TariffPacked = class TariffPacked extends Tariff {
  constructor({ name, basePrice, overLimitPricePerUnit, consumptionLimit }) {
    super({ name });
    this.basePrice = basePrice;
    this.overLimitPricePerUnit = overLimitPricePerUnit;
    this.consumptionLimit = consumptionLimit;
  }

  calculateAnnualprice(amountPerYear) {
    if (amountPerYear <= this.consumptionLimit) {
      return this.basePrice;
    }

    return (
      (amountPerYear - this.consumptionLimit) * this.overLimitPricePerUnit +
      this.basePrice
    );
  }
};
