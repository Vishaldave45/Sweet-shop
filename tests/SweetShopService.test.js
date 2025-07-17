const SweetShopService = require('../src/SweetShopService');

describe('SweetShopService', () => {
  let shop;
  beforeEach(() => {
    shop = new SweetShopService();
  });

  test('should add a sweet to the inventory', () => {
    const sweet = { id: 1, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 20 };
    shop.addSweet(sweet);
    const sweets = shop.viewSweets();
    expect(sweets).toContainEqual(sweet);
  });
});
