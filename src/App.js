import './App.css';
import NavBar from './components/NavBar/';
import Principal from './components/Principal/';
import Footer from './components/Footer/';
import { Routes, Route } from 'react-router-dom';
import Details from './pages/Details';
/* import ItemListContainer from './components/ItemListContainer/'; */

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/servicio-viandas' element={<Principal/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;