import './App.css';
import './components/CartWidget';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
function App() {
  return (
    <div>
      <NavBar className="NavBar"/>
      <header className="App-header">
        <ItemListContainer greeting="Le damos la bienvenida a Mirai, la mejor tienda de ropa"/>
      </header>
    </div>
  );
}

export default App;
