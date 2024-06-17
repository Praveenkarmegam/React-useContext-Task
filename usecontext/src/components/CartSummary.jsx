import React from 'react';
import { useCart } from '../contexts/CartContext';

const CartSummary = () => {
    const { state } = useCart();

    return (
        <div className="mt-4">
            <h5>Subtotal: ${state.totalAmount.toFixed(2)}</h5>
            <h5>Shipping: FREE</h5>
            <h5>Total: ${state.totalAmount.toFixed(2)}</h5>
        </div>
    );
};

export default CartSummary;
