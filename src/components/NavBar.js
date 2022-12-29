import CartWidget from './CartWidget'
import './NavBar.css'

function NavBar(props) {
    return (
      <div className={props.className}>
        <CartWidget/>
        <ion-icon name="cart-outline"></ion-icon>
        <ion-icon name="cart-outline"></ion-icon>
        <ion-icon name="cart-outline"></ion-icon>
      </div>
    );
  }
  
  export default NavBar;