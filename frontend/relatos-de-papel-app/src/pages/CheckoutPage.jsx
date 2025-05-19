import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import useCarrito from '../hooks/useCarrito';

const CheckoutPage = () => {
  const { carrito, vaciarCarrito } = useCarrito();

  const total = carrito.reduce(
    (acc, item) => acc + item.precioFinal * item.cantidad,
    0
  );

  const handlePagar = () => {
    alert('✅ Pago procesado exitosamente');
    vaciarCarrito();
  };

  return (
    <Container className="mt-4">
      <h3>Pasarela de Pago</h3>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <Row>
            {carrito.map((item) => (
              <Col key={item.uuid} md={4} className="mb-3">
                <Card>
                  <Card.Img variant="top" src={`/assets/${item.portada}`} />
                  <Card.Body>
                    <Card.Title>{item.titulo}</Card.Title>
                    <Card.Text>
                      Cantidad: {item.cantidad}
                      <br />
                      Precio unitario: ${item.precioFinal}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <hr />
          <h4>Total: ${total.toFixed(2)}</h4>
          <Button variant="success" onClick={handlePagar}>
            Ir a pagar
          </Button>
        </>
      )}
    </Container>
  );
};

export default CheckoutPage;
