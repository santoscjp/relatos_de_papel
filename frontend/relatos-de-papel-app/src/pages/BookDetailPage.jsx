import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBarApp from '../components/Navbar/Navbar';
import useCarrito from '../hooks/useCarrito';
import libros from '../data/libros';
import { Container, Row, Col, Card, Button, Toast } from 'react-bootstrap';

const BookDetailPage = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useCarrito();
  const [book, setBook] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const found = libros.find((l) => l.uuid === id);
    setBook(found);
  }, [id]);

  if (!book) return <p>Cargando libro...</p>;

  const handleAgregar = () => {
    agregarAlCarrito(book);
    setShowToast(true);
  };

  return (
    <>
      <NavBarApp />
      <Container className="book-detail my-5">
        <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/${book.portada}`}
              alt={book.titulo}
            />
          </Col>
          <Col md={8}>
            <h2>{book.titulo}</h2>
            <h5 className="text-muted">Author: {book.autor}</h5>
            <p className="mt-3">{book.resumenLargo}</p>
            <h4 className="text-primary">${book.precio}</h4>
            <Button variant="primary" onClick={handleAgregar}>
              Agregar al carrito
            </Button>
          </Col>
        </Row>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            minWidth: '220px',
            zIndex: 9999,
          }}
        >
          <Toast.Body>Producto agregado con éxito!</Toast.Body>
        </Toast>
      </Container>
    </>
  );
};

export default BookDetailPage;
