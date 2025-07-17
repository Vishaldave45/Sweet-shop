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
