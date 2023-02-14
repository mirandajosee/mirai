import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { cartContext } from '../../context/cartContext';
import './CartWidget.css';

export const CartWidget = () => {
    const [Total,setTotal] = useState(0)
    const {cart} = useContext(cartContext)

    useEffect(()=>{
        setTotal(cart?.reduce((prev,curr) => curr.quantity+prev,0))
    },[cart])
    return (
        <span style={{flexDirection:'column',alignContent:'center',paddingRight:"30px"}}>
            <ion-icon name="cart-outline"></ion-icon>
            <h6>{Total}</h6>
        </span>
    );
}

export default CartWidget;