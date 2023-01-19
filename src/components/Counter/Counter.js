import {useState} from 'react'
import './Counter.css'
const Counter = () => {
    const [counter,setCounter]= useState(0);
  return (
    <div style={{flexDirection:'row',alignContent:'center',justifyContent:'center',backgroundColor:'darkpurple'}}>

        <ion-icon name="cart-outline" className='contador'></ion-icon>

        <div style={{flexDirection:'column',width:'5%'}}>
        <h2 className='contador'>{counter}</h2>

            <span style={{flexDirection:'row'}}>
                <button onClick={()=>setCounter(counter>0? counter-1:0)}>-</button>
                <button onClick={()=>setCounter(counter+1)}>+</button>
            </span>

        </div>
    </div>
  )
}

export default Counter