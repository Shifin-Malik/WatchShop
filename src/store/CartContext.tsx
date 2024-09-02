import React, { createContext, useState, useContext } from "react";

// Create a Cart context
const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.title === product.title);
      if (existingItem) {
        // If the product already exists in the cart, increase its quantity
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Otherwise, add the product to the cart
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== product.title)
    );
  };

  const updateQuantity = (product, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === product.title
          ? { ...item, quantity }
          : item
      )
    );
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
