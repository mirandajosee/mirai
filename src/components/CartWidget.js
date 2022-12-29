import React from 'react';
import './CartWidget.css';

export const CartWidget = () => {
    return (
        <span style={{flexDirection:'column',alignContent:'center'}}>
            <ion-icon name="cart-outline"></ion-icon>
            <h6>1</h6>
        </span>
    );
}

export default CartWidget;