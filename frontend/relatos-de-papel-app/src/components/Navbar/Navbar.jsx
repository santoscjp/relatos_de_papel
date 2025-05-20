import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import Busqueda from "../SearchBar/Busqueda";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useLocation } from "react-router-dom";
import useCarrito from "../../hooks/useCarrito";

const NavBarApp = () => {
  const { carrito } = useCarrito();
  const location = useLocation();
  const rutasSinBusqueda = ["/order", "/checkout", "/cart"];
  const mostrarBusqueda =
    !rutasSinBusqueda.includes(location.pathname) &&
    !location.pathname.startsWith("/book/");
  const totalItems = carrito.reduce(
    (sum, item) => sum + (item.cantidad || 1),
    0
  );

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/home">📘 RELATOS DE PAPEL</Navbar.Brand>
        <Navbar.Toggle />
        {mostrarBusqueda && <Busqueda />}
        <Nav>
          <Nav.Link className="position-relative" href="/cart">
            <BsCart3 />{" "}
            {totalItems > 0 && (
              <Badge pill className="position-absolute translate-middle">
                {totalItems}
              </Badge>
            )}{" "}
            Carrito
          </Nav.Link>
          <DarkModeToggle />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarApp;
