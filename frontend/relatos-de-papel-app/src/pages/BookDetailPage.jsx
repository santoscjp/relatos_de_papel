import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBarApp from "../components/Navbar/Navbar";
import useCarrito from "../hooks/useCarrito";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ToastAlert from "../components/ToastAlert/ToastAlert";
import { getBookById } from "../services/api";

const BookDetailPage = () => {
  const { id } = useParams();
  const { agregarAlCarrito } = useCarrito();
  const [book, setBook] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    getBookById(id)
      .then(setBook)
      .catch(() => setBook(null));
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
              src={`${process.env.PUBLIC_URL}/assets/images/${book.portada}`}
              height={300}
              width={300}
              className="object-fit-contain"
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
        <ToastAlert
          show={showToast}
          onClose={() => setShowToast(false)}
          message="Producto agregado con éxito!"
        />
      </Container>
    </>
  );
};

export default BookDetailPage;
