import React from "react";

const Navbar = (props) => {
  const { darkMode, setDarkMode } = props;
  return (
    <header>
      <h1>Farras's Notes</h1>
      <div className="toggle-container">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setDarkMode(!darkMode)}
            checked={darkMode}
          />
          <span className="slider round"></span>
        </label>
        {darkMode ? (
          <i className="bx bxs-moon"></i>
        ) : (
          <i className="bx bxs-sun"></i>
        )}
      </div>
    </header>
  );
};

export default Navbar;
