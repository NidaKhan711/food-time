// Context/CartProvider.jsx
import React, { createContext, useState } from 'react';
import { Food, burger, sandi } from '../assets/Data.js';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    // Combine all data into one array
    const allData = [...Food, ...burger, ...sandi]; // Static data from assets

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
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allData.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    return (
        <CartContext.Provider
            value={{
                allData, // Provide allData in the context
                cartItems,
                addToCart,
                removeFromCart,
                getTotalCardAmount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
 
