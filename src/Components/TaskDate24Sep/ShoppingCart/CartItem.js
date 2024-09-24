import React from 'react';

const CartItem = ({ name, price, removeItem }) => {
    return (
        <div className="cart-item">
            <p>{name}</p>
            <p>${price.toFixed(2)}</p>
            <button onClick={removeItem} className="remove-button">Remove</button>
        </div>
    );
};

export default CartItem;
