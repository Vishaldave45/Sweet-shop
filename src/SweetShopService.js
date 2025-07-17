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

  deleteSweet(id){
  this.sweets = this.sweets.filter(s => s.id !== id);
}

}


module.exports = SweetShopService;
