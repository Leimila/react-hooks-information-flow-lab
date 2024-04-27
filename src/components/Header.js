import React from "react";

const Header = ({ onDarkModeClick }) => {
  return (
    <div>
      <button onClick={onDarkModeClick}> Dark Mode</button>
    </div>
  );
};

export default Header;