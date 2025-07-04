import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import useCarrito from '../hooks/useCarrito';
import { Link } from 'react-router-dom';
import NavBarApp from '../components/Navbar/Navbar';

const CheckoutPage = () => {
  const { carrito, vaciarCarrito } = useCarrito();

  const total = carrito.reduce(
    (acc, item) => acc + item.precioFinal * item.cantidad,
    0
  );

  return (
    <>
    <NavBarApp />
    <Container className="mt-4">
        <Row className="align-items-center mb-4 p-3 bg-success bg-opacity-25 rounded">
            <Col xs={6}>
                <Button as={Link} to="/home" variant="success" onClick={vaciarCarrito}>
                    Volver
                </Button>
            </Col>
            <Col xs={6} className="text-end">
                <strong  class="text-gray">¡Compra realizada con éxito!</strong>
            </Col>
        </Row>
      <h3>Orden #AYS8472</h3>
          <Row>
            {carrito.map((item) => (
              <Col key={item.uuid} md={4} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/${item.portada}`} />
                  <Card.Body>
                    <Card.Title>{item.titulo}</Card.Title>
                    <Card.Text>
                      Cantidad: {item.cantidad}
                      <br />
                      Precio unitario: ${item.precioFinal.toFixed(2)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <hr />
          <h4>Total: ${total.toFixed(2)}</h4>
    </Container>
    </>
  );
};

export default CheckoutPage;
