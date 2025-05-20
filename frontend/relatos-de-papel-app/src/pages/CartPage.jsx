import useCarrito from "../hooks/useCarrito";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBarApp from "../components/Navbar/Navbar";
import EmptyCart from "../components/EmptyCart/EmptyCart";

const CartPage = () => {
  const { carrito, quitarDelCarrito, vaciarCarrito } = useCarrito();

  const calcularTotal = () =>
    carrito
      .reduce((acc, item) => acc + item.precioFinal * item.cantidad, 0)
      .toFixed(2);

  return (
    <>
      <NavBarApp />
      {carrito.length === 0 ? (
        <EmptyCart />
      ) : (
        <Container className="py-4">
          <h3>Carrito de Compras ({carrito.length})</h3>
          <ListGroup variant="flush">
            {carrito.map((item) => (
              <ListGroup.Item key={item.uuid}>
                <Row className="align-items-center">
                  <Col xs={3} md={2}>
                    <img
                      src={`/assets/${item.portada}`}
                      alt={item.titulo}
                      className="img-fluid rounded"
                    />
                  </Col>
                  <Col xs={9} md={4}>
                    <h6 className="mb-1">{item.titulo}</h6>
                    <small>Cantidad: {item.cantidad}</small>
                  </Col>
                  <Col md={3}>
                    <p className="mb-1">
                      Precio: ${item.precioFinal.toFixed(2)}
                    </p>
                    <p>
                      Total: ${(item.precioFinal * item.cantidad).toFixed(2)}
                    </p>
                  </Col>
                  <Col md={3} className="text-end">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => quitarDelCarrito(item.uuid)}
                    >
                      Eliminar
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <hr />
          <Row className="justify-content-between align-items-center">
            <Col>
              <h5>Total: ${calcularTotal()}</h5>
            </Col>
            <Col className="text-end">
              <Button
                variant="outline-danger"
                className="me-2"
                onClick={vaciarCarrito}
              >
                Vaciar carrito
              </Button>
              <Link to="/checkout">
                <Button variant="success">Ir a pagar</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default CartPage;
