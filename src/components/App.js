// src/components/App.js
import React, { useState } from 'react';
import '../index.css';  // Use index.css for all styles
import Header from './Header';  // Import Header component
import ShoppingList from './ShoppingList';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeToggle() {
    setIsDarkMode(!isDarkMode);
  }

  const items = [
    { id: 1, name: 'Milk', category: 'Dairy' },
    { id: 2, name: 'Bananas', category: 'Produce' },
    { id: 3, name: 'Ice Cream', category: 'Dessert' },
  ];

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <Header onDarkModeClick={handleDarkModeToggle} isDarkMode={isDarkMode} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
