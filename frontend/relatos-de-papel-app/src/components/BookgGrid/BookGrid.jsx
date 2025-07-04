import { Container, Row } from "react-bootstrap";
import { useSearch } from "../../hooks/useSearch";
import BookItem from "../BookItem/BookItem";
import { useEffect, useState } from "react";
import { getBooks, getBooksFulltext } from "../../services/api";

const BookGrid = () => {
  const { searchQuery } = useSearch();
  const [libros, setLibros] = useState([]);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const resultado = searchQuery
          ? await getBooksFulltext(searchQuery)
          : await getBooks();
        setLibros(resultado);
      } catch (err) {
        console.error("Error cargando libros:", err);
        setLibros([]);
      }
    };

    fetchLibros();
  }, [searchQuery]);

  return (
    <Container className="py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>
          Consigue la mejor oferta en <span className="fw-bold">Libros</span>
        </h5>
        <a href="#" className="text-decoration-none">Mostrar todo ➜</a>
      </div>
      <Row className="g-3">
        {libros.length > 0 ? (
          libros.map((libro) => (
            <BookItem key={libro.uuid} libro={libro} />
          ))
        ) : (
          <p className="text-muted">No se encontraron libros.</p>
        )}
      </Row>
    </Container>
  );
};

export default BookGrid;
