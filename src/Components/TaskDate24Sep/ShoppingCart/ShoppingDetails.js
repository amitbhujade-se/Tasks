import React, { useState } from 'react';
import ShoppingCart from './ShoppingCart';
import CartItem from './CartItem';
import './ShoppingDetails.css';

const ShoppingDetails = () => {
    // Initial state for the cart items
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Apple', price: 1.5 },
        { id: 2, name: 'Banana', price: 1.2 },
        { id: 3, name: 'Orange', price: 2.0 },
    ]);

    // Remove item by filtering it out of the cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="app">
            <h2>Shopping Cart Example</h2>

            <ShoppingCart title="Your Cart">
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        removeItem={() => removeItem(item.id)}
                    />
                ))}
            </ShoppingCart>

            <div className="total">
                <h3>Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default ShoppingDetails;
