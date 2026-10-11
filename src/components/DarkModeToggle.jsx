
import React from "react";

function DarkModeToggle({ isDarkMode, onToggle }) {
  return (
    <button onClick={onToggle}>
      {isDarkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
    </button>
  );
}

export default DarkModeToggle;
