import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const EmptyCart = () => (
  <Container className="py-4 text-center">
    <h4 className="mt-3">Tu carrito está vacío</h4>
    <Link to="/home">
      <Button className="mt-3" variant="primary">
        Volver a la tienda
      </Button>
    </Link>
  </Container>
);

export default EmptyCart;
