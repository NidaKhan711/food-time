// Context/CartProvider.jsx
import React, { createContext, useState } from 'react';
import { Food, burger, sandi } from '../assets/Data.js';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
          setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
          setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
      };
      const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (prev[itemId] > 0) {
                return { ...prev, [itemId]: prev[itemId] - 1 };
            }
            return prev; 
        });
    };
      const getTotalCardAmount = () => {
        let totalAmaount = 0;
        const allData = [...Food, ...burger, ...sandi]; 
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo =allData.find((product) => product._id === item);
            totalAmaount += itemInfo.price * cartItems[item];
          }
        }
        return totalAmaount;}
    return (
        <CartContext.Provider value={{cartItems, addToCart,removeFromCart,getTotalCardAmount}}>
            {children}
        </CartContext.Provider>
    );
};


export default CartProvider;
