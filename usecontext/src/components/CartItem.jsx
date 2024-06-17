// CartItem.jsx

import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartItem = ({ product }) => {
    const { dispatch } = useCart();

    const increment = () => {
        dispatch({ type: 'INCREMENT', payload: product.id });
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT', payload: product.id });
    };

    const remove = () => {
        if (window.confirm('Are you sure you want to remove this item?')) {
            dispatch({ type: 'REMOVE', payload: product.id });
        }
    };

    return (
        <div className="d-flex justify-content-between align-items-center my-2 p-2 border">
            <div className="d-flex align-items-center">
                <img src={product.thumbnail} alt={product.title} className="img-thumbnail" style={{ width: '50px', marginRight: '10px' }} />
                <div>
                    <div><strong>{product.title}</strong></div>
                    <div>{product.description}</div>
                </div>
            </div>
            <div>
                <button onClick={decrement} className="btn btn-outline-secondary btn-sm">-</button>
                <span className="mx-2">{product.quantity}</span>
                <button onClick={increment} className="btn btn-outline-secondary btn-sm">+</button>
            </div>
            <div>${(product.price * product.quantity).toFixed(2)}</div>
            <button onClick={remove} className="btn btn-danger btn-sm">Remove</button>
        </div>
    );
};

export default CartItem;
