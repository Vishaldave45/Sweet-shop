class SweetShopService {
  constructor() {
    this.sweets = [];
  }

  addSweet(sweet) {
    this.sweets.push(sweet);
  }

  viewSweets() {
    return this.sweets;
  }
}

module.exports = SweetShopService;
