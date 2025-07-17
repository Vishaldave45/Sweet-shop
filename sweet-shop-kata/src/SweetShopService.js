class SweetShopService {
  constructor() {
    this.sweets = [];
    this.nextId = 1; // Auto-increment ID counter
    
  }

  addSweet(sweet) {
    const newSweet = {
      ...sweet,
      id: sweet.id || this.nextId++, // Auto-assign if not provided
    };
    this.sweets.push(newSweet);
  }

  viewSweets() {
    return this.sweets;
  }

  deleteSweet(id) {
    this.sweets = this.sweets.filter(s => s.id !== id);
  }

  searchByName(name) {
    return this.sweets.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
  }

  sortByPrice() {
    return [...this.sweets].sort((a, b) => a.price - b.price);
  }

  purchaseSweet(id, qty) {
    const sweet = this.sweets.find(s => s.id === id);
    if (!sweet || sweet.quantity < qty) {
      throw new Error('Insufficient stock');
    }
    sweet.quantity -= qty;
  }

  restockSweet(id, qty) {
    const sweet = this.sweets.find(s => s.id === id);
    if (sweet) sweet.quantity += qty;
  }
}

export default SweetShopService;