import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidjget from '../CartWidget/';
import Logo from './icono.png';


function NavBar() {
  return (
    <Navbar expand="lg" className="navcolor" id="home">
      <Container>
        <img src={Logo} alt="" width="50px"/>
        <Navbar.Brand href="/">Tu vianda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Viandas" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/Light">Light</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/category/Veggie">Veggie</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidjget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;