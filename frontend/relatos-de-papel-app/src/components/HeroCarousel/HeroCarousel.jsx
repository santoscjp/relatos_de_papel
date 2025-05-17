import React from 'react';
import styles from './HeroCarousel.module.scss';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const HeroCarousel = () => {
  return (
    <Carousel indicators={false} controls={true} className={styles.carousel}>
      <Carousel.Item>
        <Container className={styles.banner}>
          <Row className="align-items-center">
            <Col md={8}>
              <h2>La mejor oferta online en libros</h2>
              <h3><strong>De Mí Para Mí, La Tormenta Pasará</strong></h3>
              <p>HASTA 10% OFF</p>
            </Col>
            <Col md={4}>
              <img src="assets/images/promo.jpg" alt="Promo" height={250} />
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
