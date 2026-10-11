
import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  function handleToggleDarkMode() {
    setIsDarkMode(previousMode => !previousMode);
  }

  function handleAddToCart(product) {
    setCartItems(previousItems => [...previousItems, product]);
  }

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <h1>🛒 Shopping App</h1>

      <p>
        Welcome! Your task is to implement filtering,
        cart management, and dark mode.
      </p>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        onToggle={handleToggleDarkMode}
      />

      <label htmlFor="category">Filter by Category: </label>

      <select
        id="category"
        value={selectedCategory}
        onChange={(event) =>
          setSelectedCategory(event.target.value)
        }
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="Vegetables">Vegetables</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
