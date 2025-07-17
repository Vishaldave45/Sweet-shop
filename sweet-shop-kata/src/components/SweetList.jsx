import React from 'react';

const SweetList = ({ sweets }) => {
  return (
    <ul>
      {sweets.map((sweet) => (
        <li key={sweet.id}>
          {sweet.name} - Rs.{sweet.price} ({sweet.quantity})
        </li>
      ))}
    </ul>
  );
};

export default SweetList;