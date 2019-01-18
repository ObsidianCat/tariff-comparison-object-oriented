exports.Tariff = class Tariff {
  constructor({ name }) {
    this.name = name;
  }

  calculateAnnualprice() {
    throw new Error("Not implemented");
  }

  getFormattedPrice(amount) {
    const price = this.calculateAnnualprice(Number(amount));
    return { price, message: `${this.name}: ${(price / 100).toFixed(2)} EUR` };
  }
};
