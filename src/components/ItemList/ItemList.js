import React from 'react'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'
import Counter from '../Counter/Counter';
const ItemList = ({productos}) => {
  return (
    <ul>
        {productos.map((producto) => (
            <span>
            <Link key={producto.id} to={`item/${producto.id}`}>
                <Item producto={producto}/> 
            </Link>
            <Counter/>
            </span>
        ))}
    </ul>
  )
}

export default ItemList
