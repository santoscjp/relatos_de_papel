import { Navbar, Container, Nav } from 'react-bootstrap';
import { BsCart3, BsPerson } from 'react-icons/bs';
import Busqueda from '../SearchBar/Busqueda';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { useLocation } from 'react-router-dom';

const NavBarApp = () => {
  const location = useLocation();
  const rutasSinBusqueda = ['/order', '/checkout', '/cart'];
  const mostrarBusqueda = !rutasSinBusqueda.includes(location.pathname) && !location.pathname.startsWith('/book/');

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/home">📘 RELATOS DE PAPEL</Navbar.Brand>
        <Navbar.Toggle />
          {mostrarBusqueda && <Busqueda />}
          <Nav>
            <Nav.Link href="/cart"><BsCart3 /> Carrito</Nav.Link>
            <DarkModeToggle />
          </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarApp;
