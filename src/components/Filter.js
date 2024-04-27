import React from "react";

const Filter = ({ onCategoryChange }) => {
  const handleChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="">All Categories</option>
      <option value="Dairy">Dairy</option>
      <option value="Fruits">Fruits</option>
      {/* Add more category options as needed */}
    </select>
  );
};

export default Filter;