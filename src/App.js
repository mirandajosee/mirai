import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartProvider';
function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar className="NavBar"/>
        <span className="background">
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Le damos la bienvenida a Mirai, la mejor tienda de ropa"/>} />
          <Route path='item/:id' element={<ItemDetailContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
        </span>
      </CartProvider>
      
    </BrowserRouter>
    
  );
}

export default App;
