import React, { useState } from 'react';

const ActionPanel = ({ onSort, onDelete, onPurchase, onRestock }) => {
  const [deleteId, setDeleteId] = useState('');
  const [purchaseId, setPurchaseId] = useState('');
  const [purchaseQty, setPurchaseQty] = useState('');
  const [restockId, setRestockId] = useState('');
  const [restockQty, setRestockQty] = useState('');

  return (
    <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      
      {/* Sort */}
      <button
        onClick={onSort}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow"
      >
        Sort by Price
      </button>

      {/* Delete */}
      <div className="flex flex-col gap-2">
        <input
          type="number"
          placeholder="ID to delete"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <button
          onClick={() => onDelete(Number(deleteId))}
          className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>

      {/* Purchase */}
      <div className="flex flex-col gap-2">
        <input
          type="number"
          placeholder="ID to purchase"
          value={purchaseId}
          onChange={(e) => setPurchaseId(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <input
          type="number"
          placeholder="Qty"
          value={purchaseQty}
          onChange={(e) => setPurchaseQty(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <button
          onClick={() => onPurchase(Number(purchaseId), Number(purchaseQty))}
          className="bg-yellow-600 text-white px-2 py-1 rounded hover:bg-yellow-700"
        >
          Purchase
        </button>
      </div>

      {/* Restock */}
      <div className="flex flex-col gap-2">
        <input
          type="number"
          placeholder="ID to restock"
          value={restockId}
          onChange={(e) => setRestockId(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <input
          type="number"
          placeholder="Qty"
          value={restockQty}
          onChange={(e) => setRestockQty(e.target.value)}
          className="px-2 py-1 border rounded"
        />
        <button
          onClick={() => onRestock(Number(restockId), Number(restockQty))}
          className="bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
        >
          Restock
        </button>
      </div>
    </div>
  );
};

export default ActionPanel;
