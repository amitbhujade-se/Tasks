import React from 'react';

const ShoppingCart = ({ title, children }) => {
    return (
        <div className="shopping-cart">
            <h2>{title}</h2>
            <div>{children}</div>
        </div>
    );
};

export default ShoppingCart;
