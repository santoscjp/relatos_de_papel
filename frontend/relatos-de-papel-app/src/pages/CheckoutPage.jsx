import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useCarrito from "../hooks/useCarrito";
import { Link } from "react-router-dom";
import NavBarApp from "../components/Navbar/Navbar";
import BookItem from "../components/BookItem/BookItem";
const CheckoutPage = () => {
  const { carrito } = useCarrito();

  const total = carrito.reduce(
    (acc, item) => acc + item.precioFinal * item.cantidad,
    0
  );

  return (
    <>
      <NavBarApp />
      <Container className="mt-4">
        <h3>Pasarela de Pago</h3>
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            <Row>
              {carrito.map((item) => (
                <Col key={item.uuid} className="mb-3">
                  <BookItem key={item.uuid} libro={item} />
                </Col>
              ))}
            </Row>
            <hr />
            <h4>Total: ${total.toFixed(2)}</h4>
            <Link to="/order">
              <Button variant="success">Ir a pagar</Button>
            </Link>
          </>
        )}
      </Container>
    </>
  );
};

export default CheckoutPage;
