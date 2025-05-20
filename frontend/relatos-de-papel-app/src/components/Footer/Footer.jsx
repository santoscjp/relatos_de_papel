import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container>
        <Row>
          <Col md={6} className="mb-3">
            <h5>Relatos de Papel</h5>
            <p className="small">
              Tu tienda de libros digitales con las mejores historias. Explora, disfruta y comparte el amor por la lectura.
            </p>
          </Col>
          
          <Col md={3} className="mb-3">
            <h6>Contacto</h6>
            <p className="small mb-0">Grupo 5</p>
            <p className="small mb-0">contacto@relatosdepapel.com</p>
            <p className="small">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
