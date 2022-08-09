import './App.css';
import NavBar from './components/NavBar/';
import Principal from './components/Principal/';
import Footer from './components/Footer/';
import { Routes, Route } from 'react-router-dom';
/* import Details from './pages/Details'; */
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
/* import ItemListContainer from './components/ItemListContainer/'; */

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Principal/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/details/:id' element={<ItemDetailContainer/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;