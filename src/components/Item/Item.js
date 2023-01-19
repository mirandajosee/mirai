import './Item.css'

const Item = ({producto}) => {
  return (
    <li key={producto.id} width="200" className='product' style={{backgroundColor:'green',alignItem:'center',textAlign:'center'}}>
        <img alt={producto.title} src={producto.image} width='200' />
        <h2 className='titulo'>{producto.title}</h2>
        <h2 className='descripcion'>{producto.description}</h2>
    </li>
  )
}

export default Item;