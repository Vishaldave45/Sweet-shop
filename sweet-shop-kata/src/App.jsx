import React, { useState } from 'react';
import SweetShopService from './SweetShopService';
import SweetList from './components/SweetList';
import SweetForm from './components/SweetForm';
import SearchBar from './components/SearchBar';
import ActionPanel from './components/ActionPanel';


const App = () => {
  const [shop] = useState(new SweetShopService());
  const [sweets, setSweets] = useState([]);

  const handleView = () => {
    shop.addSweet({ id: 1, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 20 });
    shop.addSweet({ id: 2, name: 'Gulab Jamun', category: 'Milk-Based', price: 10, quantity: 15 });
    setSweets(shop.viewSweets());
  };

  const handleAddSweet = (sweet) => {
  shop.addSweet(sweet);
  setSweets(shop.viewSweets());
};

const handleSearch = (query) => {
  const result = shop.searchByName(query);
  setSweets(result);
};

const handleSort = () => {
  setSweets(shop.sortByPrice());
};

const handleDelete = (id) => {
  shop.deleteSweet(id);
  setSweets(shop.viewSweets());
};

const handlePurchase = (id, qty) => {
  try {
    shop.purchaseSweet(id, qty);
    setSweets(shop.viewSweets());
  } catch (e) {
    alert(e.message);
  }
};

const handleRestock = (id, qty) => {
  shop.restockSweet(id, qty);
  setSweets(shop.viewSweets());
};

  return (
    <div  className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-center mb-4">Sweet Shop -kata</h1>

      <button onClick={handleView} lassName="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-150 ease-in-out shadow-sm">View All Sweets</button>
      <SweetList sweets={sweets} />
      <SweetForm onAddSweet={handleAddSweet} />
      <SearchBar onSearch={handleSearch} />
      <ActionPanel
          onSort={handleSort}
          onDelete={handleDelete}
          onPurchase={handlePurchase}
          onRestock={handleRestock}
      />
    </div>
  );
};

export default App;