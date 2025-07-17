import React, { useState } from 'react';

const ActionPanel = ({ onSort, onDelete, onPurchase, onRestock }) => {
  const [id, setId] = useState('');
  const [qty, setQty] = useState('');

  return (
    <div className="mt-6 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      <button onClick={onSort} className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">
        Sort by Price
      </button>

      <div className="flex gap-2 items-center">
        <input
          type="number"
          placeholder="ID to delete"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-full px-2 py-1 border rounded"
        />
        <button onClick={() => onDelete(parseInt(id))} className="bg-red-600 text-white px-2 py-1 rounded">
          Delete
        </button>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="number"
          placeholder="ID"
          onChange={(e) => setId(e.target.value)}
          value={id}
          className="w-full px-2 py-1 border rounded"
        />
        <input
          type="number"
          placeholder="Qty"
          onChange={(e) => setQty(e.target.value)}
          value={qty}
          className="w-full px-2 py-1 border rounded"
        />
        <button onClick={() => onPurchase(parseInt(id), parseInt(qty))} className="bg-orange-600 text-white px-2 py-1 rounded">
          Purchase
        </button>
        <button onClick={() => onRestock(parseInt(id), parseInt(qty))} className="bg-green-600 text-white px-2 py-1 rounded">
          Restock
        </button>
      </div>
    </div>
  );
};

export default ActionPanel;
