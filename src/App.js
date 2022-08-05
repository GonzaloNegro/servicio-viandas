import './App.css';
import NavBar from './components/NavBar/';
import Container from './components/Container/';
import Principal from './components/Principal/';
import Footer from './components/Footer/';
/* import ItemListContainer from './components/ItemListContainer/'; */

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Principal/>
      <br/>
      <Container/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;