
import { useEffect, useState,useContext } from "react"
import { useParams } from "react-router-dom"
import Counter from "../Counter/Counter"
import Loading from "../Loading/Loading"
import { cartContext } from "../../context/cartContext"
import "./ItemDetailContainer.css"
import { getFirestore,doc,getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [singleProduct,setSingleProduct] = useState({})
    const [counter,setCounter]= useState(0)
    const {addItem,deleteItem}=useContext(cartContext)
    const [isLoading,setIsLoading] = useState(true)
    const {id} = useParams()
    const getProduct = ()=>{
      const db = getFirestore();
      const querySnapshots=doc(db,"items",id)
      getDoc(querySnapshots)
      .then((response)=>{
        setSingleProduct({id:response.id,...response.data()})
        setIsLoading(false)})
      .catch((err)=> console.log(err))
    }

    useEffect(()=>{
        getProduct()
    },[])
    if(isLoading){
      return (<Loading/>)
    }
  return (
    <div className="productDetail">
      <img alt={singleProduct.title} src={`/products/${singleProduct.imageId}`} width='250px' />
      <span className="details">
        <h1 style={{color:"yellowgreen"}}>{singleProduct.title}</h1>
        <h4>{singleProduct.description}</h4>
        {singleProduct.stock===0? 
        <h4>Lo lamentamos, pero ya no hay stock de este producto</h4>
        :
        <span>
          <h3>El precio por unidad es ${singleProduct.price} (pesos argentinos)</h3>
          <h4>Hay {singleProduct.stock} productos disponibles</h4>
          <h4>¿Te interesa este producto?<br></br> Agrega la cantidad que quieras al carrito :D</h4>
          <Counter stock={singleProduct.stock} updateCounter={setCounter} counter={counter}/>
          <div style={{alignContent:'center',justifyContent:'center',marginTop:"20px"}}>
            <button onClick={()=>deleteItem(singleProduct.id)}>Eliminar del carrito</button>
            <button onClick={()=>addItem(singleProduct,counter)}>Agregar al carrito</button>
          </div>
        </span>
        }
      </span>
    </div>
  )
}

export default ItemDetailContainer