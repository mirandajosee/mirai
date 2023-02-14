import "./Cart.css";
import { useContext, useState,useEffect } from "react";
import { cartContext } from "../../context/cartContext";
import { getFirestore,addDoc,collection,doc,updateDoc } from "firebase/firestore";


const Cart = () => {
    const {cart,deleteItem,clear} = useContext(cartContext);
    const [order,setOrder] = useState({})
    const db = getFirestore()
    useEffect(()=>{
        setOrder({
            buyer:{
                name:"Aquiles Caigo",
                phone:"+543516759618",
                email:"testeo@test.com"
            },
            items:cart.map((prod)=>{
                const {name,price,id} = prod;
                return {name,price,id}
            }),
            total:cart.reduce((acc,curr)=>acc+curr.price*curr.quantity,0)
        })
    },[cart])

    if (cart.length===0){
        return (
        <div className="emptyCart">
            <h1>Tu carrito esta vacío</h1>
        </div>)
    }
    const createOrder = () => {
        const querySnapshot = collection(db,"orders")
        addDoc(querySnapshot,order).then((r)=>
        {
            updateStock()
            alert("Orden creada con éxito, su id es"+r.id)})
    .catch((err)=> console.log(err))
    }

    const updateStock = ()=>{
        cart.forEach((prod)=>{
            const querySnapshot=doc(db,"items",prod.id)
            updateDoc(querySnapshot,{stock:prod.stock-prod.quantity})
            .then((r)=>console.log(r)).catch((err)=>console.log(err))
        })
    }
  return (
    <div style={{padding:"40px",width:"500px"}}>
        <ul style={{listStyleType: "none"}}>
            {cart.map((product) => (
                <li key={product.id}>
                    <div className="productCart">
                        <img alt={product.title} src={`products/${product.imageId}`} width="50px"/>
                        <h3>{product.title}</h3>
                        <h4>{product.quantity}</h4>
                        <h4>${product.price}</h4>
                        <button onClick={()=>deleteItem(product.id)}>Eliminar del carrito</button>
                    </div>
                </li>
            ))}
        </ul>
        <div style={{marginTop:"100px"}}>
            <button onClick={()=>clear()}>Vaciar carrito</button>
        </div>
        <div style={{marginTop:"25px"}}>
            <button onClick={()=>createOrder()}>Comprar</button>
        </div>
    </div>
  )
}

export default Cart