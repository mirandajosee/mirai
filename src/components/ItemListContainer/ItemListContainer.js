import React from 'react';
import './ItemListContainer.css';
import { useState,useEffect } from 'react';
import Loading from '../Loading/Loading';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import {getFirestore,getDocs,collection,query,where} from 'firebase/firestore'


const ItemListContainer = (props) => {
    const [isLoading,setIsLoading]=useState(true)
    const [products,setProducts]=useState([]);
    const {category}=useParams();

    const getProducts=()=>{
    const db=getFirestore();
    const querySnapshots=collection(db,"items")

    if(category){
        const newConfiguration=query(querySnapshots,where ("categoryId","==",category))
        getDocs(newConfiguration).then(
            (response)=>{
                const data=response.docs.map((doc)=>{
                    return {id:doc.id,...doc.data()}
                })
                setProducts(data)
                setIsLoading(false)
            }).catch((err) => console.log(err))
    }else{
    getDocs(querySnapshots).then(
        (response)=>{
            const data=response.docs.map((doc)=>{
                return {id:doc.id,...doc.data()}
            })
            setProducts(data)
            setIsLoading(false)
        }).catch((err) => console.log(err))}}

    useEffect(()=>{getProducts()},[category])


return (
<div >
    <h1 className='bienvenida'>{props.greeting}</h1>{
    isLoading?
    <Loading/>
    :
    <ItemList productos={products}/>}
</div>
);
}

export default ItemListContainer;