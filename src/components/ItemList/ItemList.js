import React from 'react'
import Item from '../Item/Item'
import { Link } from 'react-router-dom'
import "./ItemList.css"

const ItemList = ({productos}) => {
  return (
    <ul className='ItemList'>
        {productos.map((producto) => (
            <Link key={producto.id} to={`item/${producto.id}`} style={{textDecoration: 'none'}}>
                <Item producto={producto}/> 
            </Link>
        ))}
    </ul>
  )
}

export default ItemList
