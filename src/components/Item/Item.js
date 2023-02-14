import './Item.css'

const Item = ({producto}) => {
  let descripcionAcortada=producto.description.substr(0, 300);
  return (
    <li key={producto.id} width="200px" height="150px" className='product'>
        <img alt={producto.title} src={`/products/${producto.imageId}`} width='125px' style={{padding:"20px",paddingLeft:"0px"}} />
        <span style={{flexDirection:"column"}}>
          <h4 className='titulo'>{producto.title}</h4>
          <br></br>
          <h5>{descripcionAcortada.substr(0, Math.min(descripcionAcortada.length, descripcionAcortada.lastIndexOf(" ")))} ...</h5>
        </span>
    </li>
  )
}

export default Item;