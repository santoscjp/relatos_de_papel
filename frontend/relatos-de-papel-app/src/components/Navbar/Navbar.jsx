import { Navbar, Container, Nav} from 'react-bootstrap';
import { BsCart3, BsPerson } from 'react-icons/bs';
import Busqueda from './Busqueda';
import DarkModeToggle from './DarkModeToggle';

const NavBarApp = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#">📘 RELATOS DE PAPEL</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Busqueda />
          <Nav >
            <Nav.Link href="#"><BsPerson /> Iniciar sesión</Nav.Link>
            <Nav.Link href="#"><BsCart3 /> Carrito</Nav.Link>
            <DarkModeToggle />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarApp;
