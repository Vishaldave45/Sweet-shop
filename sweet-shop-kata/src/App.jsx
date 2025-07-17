import React, { useState } from 'react';
import SweetShopService from './SweetShopService';
import SweetList from './components/SweetList';

const App = () => {
  const [shop] = useState(new SweetShopService());
  const [sweets, setSweets] = useState([]);

  const handleView = () => {
    shop.addSweet({ id: 1, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 20 });
    shop.addSweet({ id: 2, name: 'Gulab Jamun', category: 'Milk-Based', price: 10, quantity: 15 });
    setSweets(shop.viewSweets());
  };

  return (
    <div>
      <h1>Sweet Shop Inventory</h1>
      <button onClick={handleView}>View All Sweets</button>
      <SweetList sweets={sweets} />
    </div>
  );
};

export default App;