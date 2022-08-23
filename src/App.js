import './App.css';
import NavBar from './components/NavBar/';
import Principal from './components/Principal/';
import Footer from './components/Footer/';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import CartProvider from './context/CartContext';
import Cart from './components/Cart/Cart';



function App() {

/*   useEffect(()=>{
  
    //Creo la referencia a la coleccion que quiero traer
    const colRef = collection(DB, 'productos');
    getDocs(colRef).then((snapshot)=>{
      console.log('>>>>', snapshot.docs);

      const productosConFormato = snapshot.docs.map((rawDoc) =>{
        return{
          id: rawDoc.id,
          ...rawDoc.data()
        }
      });
      console.log('>>>PRODUCTO:', productosConFormato);
 */
/*       console.log('ID DEL PRIMERO',snapshot.docs[0].id);
      console.log('DATOS DEL PRIMERO',snapshot.docs[0].data()) */
/*     }, (error) =>{
      console.log('>>>>Error al intentar');
    });
  }, []) */


  return (
      <CartProvider>
    <div className="App">
      <NavBar/>
        <Routes>
          <Route path='/' element={<Principal/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/details/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      <Footer/>
    </div>
      </CartProvider>
  );
}

export default App;