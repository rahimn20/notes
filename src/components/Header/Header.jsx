import React from "react";
import "./Header.css";

function Header({ handleToggleDarkMode }) {
  return (
    <>
      <div className="head-container">
        <h1>Notes</h1>
        <button
          onClick={() =>
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
          }
          className="save"
        >
          Toggle Mode
        </button>
      </div>
    </>
  );
}

export default Header;
