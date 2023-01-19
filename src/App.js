import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <BrowserRouter>
      <NavBar className="NavBar"/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Le damos la bienvenida a Mirai, la mejor tienda de ropa"/>} />
        <Route path='item/:id' element={<ItemDetailContainer/>} />
        <Route path='/category/:category' element={<ItemListContainer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
