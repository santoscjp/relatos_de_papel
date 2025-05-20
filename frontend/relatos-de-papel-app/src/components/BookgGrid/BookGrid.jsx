import { Container, Row } from 'react-bootstrap';
import libros from '../../data/libros';
import BookItem from '../BookItem/BookItem';
 import { useSearch } from '../../hooks/useSearch';

const BookGrid = () => {
  const { searchQuery } = useSearch();
  const librosFiltrados = libros.filter(libro =>
    libro.titulo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Consigue la mejor oferta en <span className="fw-bold">Libros</span></h5>
        <a href="#" className="text-decoration-none">Mostrar todo ➜</a>
      </div>
      <Row className="g-3">
         {librosFiltrados.map(libro => (
          <BookItem key={libro.uuid} libro={libro} />
        ))}
      </Row>
    </Container>
  );
};

export default BookGrid;
