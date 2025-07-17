import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const q = e.target.value;
    setQuery(q);
    onSearch(q);
  };

  return (
    <div className="mt-4 mb-2">
      <input
        type="text"
        placeholder="🔍 Search by sweet name..."
        value={query}
        onChange={handleChange}
        className="w-full px-3 py-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
