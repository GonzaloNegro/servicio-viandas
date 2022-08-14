import './App.css';
import NavBar from './components/NavBar/';
import Principal from './components/Principal/';
import Footer from './components/Footer/';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CartProvider from './context/CartContext';
/* import CartDetail from './components/CartDetail'; */

function App() {

  return (
    <div className="App">
      <NavBar/>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/details/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' /* element={<CartDetail/>} */ />
        </Routes>
      </CartProvider>
      <Footer/>
    </div>
  );
}

export default App;