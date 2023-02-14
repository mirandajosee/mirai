import './Counter.css'
const Counter = ({stock,updateCounter,counter}) => {
  return (
    <div style={{flexDirection:'row',alignContent:'center',justifyContent:'center',backgroundColor:'darkpurple'}}>

        <ion-icon name="cart-outline" className='contador'></ion-icon>

        <div style={{flexDirection:'column',width:'5%'}}>
        <h2 className='contador'>{counter}</h2>

            <span style={{flexDirection:'row'}}>
                <button onClick={()=>updateCounter(counter>0? counter-1:0)}>-</button>
                <button onClick={()=>{counter===stock? alert("Alcanzaste el máximo de productos disponibles"):updateCounter(counter+1)}}>+</button>
            </span>

        </div>
    </div>
  )
}

export default Counter