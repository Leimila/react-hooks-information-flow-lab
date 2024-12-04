// src/components/Header.js
import React from 'react';

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <header>
      <h1>Shopping List</h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </header>
  );
}

export default Header;
