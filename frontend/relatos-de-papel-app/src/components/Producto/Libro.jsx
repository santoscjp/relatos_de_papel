import { useState, useEffect } from "react";
import libros from "../../data/libros.js";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Libro = () => {
    const { id } = useParams();
    const [libro, setLibro] = useState(null);
    useEffect(() => {
        const encontrado = libros.find((l) => l.uuid === id);
        
        setLibro(encontrado);
        
      }, [id]);
if (!libro) return <p>Cargando...</p>;

  return (
    <Container className="book-detail my-5">
      <Row>
        <Col md={4}>
          <Card.Img variant="top" src={`assets/${libro.portada}`}alt={libro.titulo} />
        </Col>
        <Col md={8}>
          <h2>{libro.titulo}</h2>
          <h5 className="text-muted">Autor: {libro.autor}</h5>
          <p className="mt-3">{libro.descripcion}</p>
          <h4 className="text-primary">${libro.precio}</h4>
          <Button variant="primary">
            Añadir al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default Libro;