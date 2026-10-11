
import React from "react";

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((product, index) => (
            <li key={`${product.id}-${index}`}>
              {product.name} is in your cart.
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
