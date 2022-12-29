import './App.css';
import './components/CartWidget';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
function App() {
  return (
    <div>
      <NavBar className="NavBar"/>
      <section className="App-header">
        <ItemListContainer greeting="Le damos la bienvenida a Mirai, la mejor tienda de ropa"/>
      </section>
    </div>
  );
}

export default App;
