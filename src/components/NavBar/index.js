import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidjget from '../CartWidget/';
import Logo from './icono.png';
import { Link } from 'react-router-dom';
import './NavBar.css'


function NavBar() {
  return (
    <Navbar expand="lg" className="navcolor" id="home">
      <Container>
        <img src={Logo} alt="" width="50px"/>
        <Navbar.Brand href="/">Tu vianda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">       
            <Nav.Link><Link to='/' className='color'>Home</Link></Nav.Link>
            <NavDropdown title="Viandas" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to='/category/Light' className='color'>Light</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to='/category/Veggie' className='color'>Veggie</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to='/cart'><CartWidjget/></Link>
      </Container>
    </Navbar>
  );
}

export default NavBar;