import React, { useState ,useRef} from 'react';
import SweetShopService from './SweetShopService';
import SweetList from './components/SweetList';
import SweetForm from './components/SweetForm';
import SearchBar from './components/SearchBar';
import ActionPanel from './components/ActionPanel';


const App = () => {
  const shop = useRef(new SweetShopService());
  const [sweets, setSweets] = useState(shop.current.viewSweets());
  const [viewed, setViewed] = useState(false);

 const handleView = () => {
  if (!viewed) {
    shop.current.addSweet({ name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 20 });
    shop.current.addSweet({ name: 'Gulab Jamun', category: 'Milk-Based', price: 10, quantity: 15 });
    setViewed(true);
  }
  setSweets(shop.current.viewSweets());
};

  const handleAddSweet = (sweet) => {
  shop.current.addSweet(sweet);                   // ✅ Use current
  setSweets([...shop.current.viewSweets()]); // force array copy for state change           // ✅ Refresh state
};

const handleSearch = (query) => {
  const result = shop.current.searchByName(query); // ✅
  setSweets(result);
};

const handleSort = () => {
  setSweets(shop.current.sortByPrice()); // ✅
};

const handleDelete = (id) => {
  shop.current.deleteSweet(id); // ✅
  setSweets(shop.current.viewSweets()); // ✅
};

const handlePurchase = (id, qty) => {
  try {
    shop.current.purchaseSweet(id, qty); // ✅
    setSweets(shop.current.viewSweets()); // ✅
  } catch (e) {
    alert(e.message);
  }
};

const handleRestock = (id, qty) => {
  shop.current.restockSweet(id, qty); // ✅
  setSweets(shop.current.viewSweets()); // ✅
};

  return (
    <div  className="p-6 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold text-center mb-4">Sweet Shop -kata</h1>

      <button onClick={handleView} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-150 ease-in-out shadow-sm">View All Sweets</button>
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