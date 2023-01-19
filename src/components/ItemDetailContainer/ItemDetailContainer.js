
import { useEffect, useState } from "react"
import Item from "../Item/Item"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [singleProduct,setSingleProduct] = useState({})
    const {id} = useParams()
    const getProduct = fetch(`https://fakestoreapi.com/products/${id}`)

    useEffect(()=>{
        getProduct
        .then((resp)=>{return resp.json()})
        .then((data)=> {setSingleProduct(data)})
        .catch((err)=> {console.log(err)})
    })
  return (
    <div>
        <Item producto={singleProduct}/>
    </div>
  )
}

export default ItemDetailContainer