// CartContext.js

import React, { createContext, useReducer, useContext } from 'react';

const CartContext = createContext();

const initialState = {
    products: [
        {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            quantity: 1,
            thumbnail: "https://via.placeholder.com/150?text=iPhone+9"
        },
        {
            id: 2,
            title: "iPhone X",
            description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            price: 899,
            quantity: 1,
            thumbnail: "https://via.placeholder.com/150?text=iPhone+X"
        },
        {
            id: 3,
            title: "Samsung Universe 9",
            description: "Samsung's new variant which goes beyond Galaxy to the Universe",
            price: 1249,
            quantity: 1,
            thumbnail: "https://via.placeholder.com/150?text=Samsung+Universe+9"
        },
        {
            id: 4,
            title: "OPPO F19",
            description: "OPPO F19 is officially announced on April 2021.",
            price: 280,
            quantity: 1,
            thumbnail: "https://via.placeholder.com/150?text=OPPO+F19"
        },
        {
            id: 5,
            title: "Huawei P30",
            description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            price: 499,
            quantity: 1,
            thumbnail: "https://via.placeholder.com/150?text=Huawei+P30"
        }
    ],
    totalQuantity: 5,
    totalAmount: 3476
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return updateCart(state, action.payload, 1);
        case 'DECREMENT':
            return updateCart(state, action.payload, -1);
        case 'REMOVE':
            return removeProduct(state, action.payload);
        default:
            return state;
    }
};

const updateCart = (state, productId, quantityChange) => {
    const updatedProducts = state.products.map(product => {
        if (product.id === productId) {
            const newQuantity = product.quantity + quantityChange;
            return { ...product, quantity: newQuantity > 0 ? newQuantity : 0 };
        }
        return product;
    }).filter(product => product.quantity > 0);

    const totalQuantity = updatedProducts.reduce((sum, product) => sum + product.quantity, 0);
    const totalAmount = updatedProducts.reduce((sum, product) => sum + (product.quantity * product.price), 0);

    return { ...state, products: updatedProducts, totalQuantity, totalAmount };
};

const removeProduct = (state, productId) => {
    const updatedProducts = state.products.filter(product => product.id !== productId);

    const totalQuantity = updatedProducts.reduce((sum, product) => sum + product.quantity, 0);
    const totalAmount = updatedProducts.reduce((sum, product) => sum + (product.quantity * product.price), 0);

    return { ...state, products: updatedProducts, totalQuantity, totalAmount };
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
