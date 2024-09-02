import { createContext, useState, useContext, ReactNode } from "react";

// Define the CartItem type
interface CartItem {
  imgSrc: string;
  title: string;
  price: string;
  quantity: number;
}

// Define the context type
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (product: CartItem) => void;
  updateQuantity: (product: CartItem, quantity: number) => void;
}

// Create a Cart context with default value as null
const CartContext = createContext<CartContextType | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.title === product.title);
      if (existingItem) {
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (product: CartItem) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== product.title)
    );
  };

  const updateQuantity = (product: CartItem, quantity: number) => {
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
