import React, { useContext } from 'react';
import styles from './ProductSlider.module.scss';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import libros from '../../data/libros';
import { ContextoBusqueda } from '../../context/ContextoBusqueda';


const ProductSlider = () => {
  const {cadenaFiltro} = useContext(ContextoBusqueda);
  const librosFiltrados = libros.filter(libro => libro.titulo.toLowerCase().includes(cadenaFiltro));
  return (
    <Container className={styles.slider}>
      <div className={styles.header}>
        <h5>Consigue la mejor oferta en <span>Libros</span></h5>
        <a href="#">Mostrar todo ➜</a>
      </div>
      <Row>
        {librosFiltrados.map((libro, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3} xl={2} className="mb-3">
            <Card className={styles.card}>
              <div className={styles.discount}><Badge>{libro.descuento}% OFF</Badge></div>
              <Card.Img variant="top" src={`assets/${libro.portada}`} />
              <Card.Body>
                <Card.Title className="small">{libro.titulo}</Card.Title>
                <Card.Text>
                  <strong>${libro.precioFinal}</strong>{' '}
                  <del className="text-muted">${libro.precio}</del>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductSlider;
