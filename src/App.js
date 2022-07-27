import './App.css';
import NavBar from './components/NavBar/';
import Caja from './components/Caja';
import Contador from './components/Contador';
import ItemListContainer from './components/ItemListContainer/';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <h1>Servicio de Viandas</h1>
      <ItemListContainer nombre={'Vianda 1'} descripcion={'Vianda con tomates, palta, cebolla, pollo y queso'} />
      <Caja saludo="hola Mundo">
        <Contador/>
      </Caja>
      
    </div>
  );
}

export default App;