import React from 'react';
import CartProvider from './contexts/CartContext';
import Cart from './components/Cart';
import './App.css'; // Import the global styles

function App() {
    return (
        <CartProvider>
            <div className="App">
                <Cart />
            </div>
        </CartProvider>
    );
}

export default App;
