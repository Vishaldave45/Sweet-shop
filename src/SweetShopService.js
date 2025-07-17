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

searchByName(name) {
  return this.sweets.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
}

}


module.exports = SweetShopService;
