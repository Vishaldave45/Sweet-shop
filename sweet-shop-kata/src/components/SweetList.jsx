import React from 'react';

const SweetList = ({ sweets }) => {
  if(!sweets || sweets.length===0){
    return <p className="text-gray-500 mt-4">No sweets available.</p>;
  }
  return (
      <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">shop</h2>
      <table className="min-w-full border border-gray-300 rounded shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Price (Rs)</th>
            <th className="border p-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {sweets.map((sweet) => (
            <tr key={sweet.id} className="hover:bg-gray-50">
              <td className="border p-2 text-center">{sweet.id}</td>
              <td className="border p-2">{sweet.name}</td>
              <td className="border p-2">{sweet.category}</td>
              <td className="border p-2 text-center">{sweet.price}</td>
              <td className="border p-2 text-center">{sweet.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default SweetList;