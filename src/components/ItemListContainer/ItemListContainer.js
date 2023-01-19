import React from 'react';
import './ItemListContainer.css';
import { useState,useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = (props) => {

    const [products,setProducts]=useState([]);
    const [filteredProducts,setFilteredProducts] = useState([])
    const {category}=useParams();
    const getProduct=fetch('https://fakestoreapi.com/products');
    useEffect(()=>{
        getProduct
        .then((res)=>{return res.json()})
        .then((res)=> {setProducts(res)})
        .catch((err)=> console.log(err))
    })

    useEffect(()=>{
        if (category){
        const filterProducts = products.filter((product)=>{
            return product.category.includes(category)
        });
        setFilteredProducts(filterProducts)
    }
    },[category,products])


return (
<div className='itemlist' >
    <h1>{props.greeting}</h1>
    <ItemList productos={category? filteredProducts:products}/>
</div>
);
}

export default ItemListContainer;