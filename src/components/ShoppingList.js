// src/components/ShoppingList.js
import React, { useState } from 'react';
import Filter from './Filter';
import Item from './Item';

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const filteredItems = items.filter(item =>
    selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <div>
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
