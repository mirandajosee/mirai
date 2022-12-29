import CartWidget from './CartWidget'
import './NavBar.css'
import Logo from '../images/logo.png'

function NavBar(props) {
    return (
      <div className={props.className}>
        <img src={Logo} height={100} width={100} alt='Logo'/>
        <ion-icon name="home-outline"></ion-icon>
        <ion-icon name="mail-outline"></ion-icon>
        <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
        <CartWidget/>
      </div>
    );
  }
  
  export default NavBar;