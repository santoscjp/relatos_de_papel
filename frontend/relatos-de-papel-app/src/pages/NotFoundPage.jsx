import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container className="text-center my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="display-1">404</h1>
          <p className="lead">Oops! The page you are looking for does not exist.</p>
          <Button as={Link} to="/home" variant="primary">
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;
