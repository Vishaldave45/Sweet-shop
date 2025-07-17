import React, { useState } from 'react';

const SweetForm = ({ onAddSweet }) => {
  const [formData, setFormData] = useState({
name: '',
    category: '',
    price: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sweet = {
       id: Date.now(), // ✅ Auto-generated unique ID
        name: formData.name,
        category: formData.category,
        price: parseFloat(formData.price),
        quantity: parseInt(formData.quantity)
    };
    onAddSweet(sweet);
    setFormData({name: '', category: '', price: '', quantity: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 border rounded shadow-sm mt-4 max-w-md">
      <h2 className="text-lg font-semibold mb-3">➕ Add New Sweet</h2>
      {['name', 'category', 'price', 'quantity'].map((field) => (
        <div key={field} className="mb-3">
          <label className="block capitalize mb-1">{field}</label>
          <input
            type={field === 'price' ||  field === 'quantity' ? 'number' : 'text'}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            required
            className="w-full px-3 py-1 border rounded"
          />
        </div>
      ))}
      <button type="submit" className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
        Add Sweet
      </button>
    </form>
  );
};

export default SweetForm;
