import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';
import CartSummary from './CartSummary';

const Cart = () => {
    const { state } = useCart();

    return (
        <div className="container">
            <h1 className="my-4">Shopping Cart</h1>
            {state.products.length > 0 ? (
                <>
                    {state.products.map(product => (
                        <CartItem key={product.id} product={product} />
                    ))}
                    <CartSummary />
                </>
            ) : (
                <div className="alert alert-info">Your cart is empty</div>
            )}
        </div>
    );
};

export default Cart;
