import CartWidget from '../CarWidget/CartWidget'
import './NavBar.css'
import Logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

function NavBar(props) {
    return (
      <div className={props.className}>
        <NavLink className={({isActive}) => isActive? "active":"inactive"} to='/'>
        <img src={Logo} height={100} width={100} alt='Logo'/>
        </NavLink>

        <NavLink className={({isActive}) => isActive? "active":"inactive"} to='/'>
        <span className='Icon'>
        <ion-icon name="home-outline"></ion-icon>
        <h5>Inicio</h5>
        </span>
        </NavLink>
        
        <NavLink className={({isActive}) => isActive? "active":"inactive"} to='/category/electronics'>
        <span className='Icon'>
        <ion-icon name="desktop-outline"></ion-icon>
        <h5>Electrónicos</h5>
        </span>
        </NavLink>

        <NavLink className={({isActive}) => isActive? "active":"inactive"} to='/category/clothing'>
        <span className='Icon'>
        <ion-icon name="shirt-outline"></ion-icon>
        <h5>Ropa</h5>
        </span>
        </NavLink>

        <NavLink to="/cart">
        <CartWidget/>
        </NavLink>
      </div>
    );
  }
  
  export default NavBar;