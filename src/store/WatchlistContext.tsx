// src/store/WatchlistContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the type for card data
export interface CardItem {
  imgSrc: string;
  title: string;
  price: string;
  quantity?: number; // Optional, default to 1 in handleAddToCart
}

// Define the context type
interface WatchlistContextType {
  watchlist: CardItem[];
  addToWatchlist: (item: CardItem) => void;
  removeFromWatchlist: (item: CardItem) => void;
}

// Create the Watchlist context
const WatchlistContext = createContext<WatchlistContextType | undefined>(
  undefined
);

// Provider component
export const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const [watchlist, setWatchlist] = useState<CardItem[]>([]);

  const addToWatchlist = (item: CardItem) => {
    setWatchlist((prevWatchlist) => {
      if (prevWatchlist.find((i) => i.title === item.title)) {
        return prevWatchlist; // Item already in watchlist
      }
      return [...prevWatchlist, item];
    });
  };

  const removeFromWatchlist = (item: CardItem) => {
    setWatchlist((prevWatchlist) =>
      prevWatchlist.filter((i) => i.title !== item.title)
    );
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

// Custom hook to use the Watchlist context
export const useWatchlist = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error("useWatchlist must be used within a WatchlistProvider");
  }
  return context;
};
