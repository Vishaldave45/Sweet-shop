const SweetShopService = require('../src/SweetShopService');

describe('SweetShopService', () => {
  let shop;
  beforeEach(() => {
    shop = new SweetShopService();
  });

  test('should add a sweet to the shop', () => {
    const sweet = { id: 1, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 20 };
    shop.addSweet(sweet);
    const sweets = shop.viewSweets();
    expect(sweets).toContainEqual(sweet);
  });

  test('should delete a sweet by ID', () => {
  const sweet = { id: 2, name: 'Gulab Jamun', category: 'Milk-Based', price: 10, quantity: 50 };
  shop.addSweet(sweet);
  shop.deleteSweet(2);
  expect(shop.viewSweets()).not.toContainEqual(sweet);
});

test('should search sweets by name', () => {
  shop.addSweet({ id: 3, name: 'Rasgulla', category: 'Milk-Based', price: 15, quantity: 40 });
  const results = shop.searchByName('Rasgulla');
  expect(results.length).toBe(1);
});

test('should sort sweets by price ascending', () => {
  shop.addSweet({ id: 4, name: 'Barfi', category: 'Milk-Based', price: 30, quantity: 10 });
  shop.addSweet({ id: 5, name: 'Ladoo', category: 'Nut-Based', price: 20, quantity: 25 });
  const sorted = shop.sortByPrice();
  expect(sorted[0].price).toBeLessThanOrEqual(sorted[1].price);
});

test('should decrease quantity when purchased', () => {
  shop.addSweet({ id: 6, name: 'Soan Papdi', category: 'Flaky', price: 25, quantity: 5 });
  shop.purchaseSweet(6, 2);
  expect(shop.viewSweets()[0].quantity).toBe(3);
});

test('should throw error if not enough stock', () => {
  shop.addSweet({ id: 7, name: 'Halwa', category: 'Vegetable-Based', price: 35, quantity: 1 });
  expect(() => shop.purchaseSweet(7, 3)).toThrow('Insufficient stock');
});

test('should increase stock when restocked', () => {
  shop.addSweet({ id: 8, name: 'Peda', category: 'Milk-Based', price: 18, quantity: 10 });
  shop.restockSweet(8, 5);
  expect(shop.viewSweets()[0].quantity).toBe(15);
});

});

