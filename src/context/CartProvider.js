import { cartContext } from "./cartContext";
import { useState } from "react";

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    const addItem= (item,quantity) => {
        const newProduct = {
            id:item.id,
            name:item.title,
            price:item.price,
            quantity:quantity,
            category:item.category,
            imageId:item.imageId,
            stock:item.stock
        };
        const alreadyExisted=cart.find(prod => prod.id===newProduct.id)
        if(alreadyExisted){
            const filtedList=cart.filter(prod => prod.id!==newProduct.id)
            const newValue={...alreadyExisted,quantity:alreadyExisted.quantity+newProduct.quantity}
            setCart([...filtedList,newValue])
        }else
        {
        setCart([...cart,newProduct])}
    }
    const deleteItem=(id) => {
        const newCart = cart.filter(product => product.id!==id);
        setCart(newCart)
    }
    const clear= () => {setCart([])}
  return (
    <cartContext.Provider value={{cart,addItem,clear,deleteItem}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider