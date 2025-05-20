import React from 'react';
import '../HeroCarousel/HeroCarousel.scss';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const HeroCarousel = () => {
  return (
    <Carousel className="carousel" indicators={false} controls={false}>
      <Carousel.Item>
        <Container className="banner">
          <Row className="align-items-center">
            <Col md={8}>
              <div className="banner__subtitle">
                La mejor oferta online en libros
              </div>
              <h3 className="banner__title">
                De Mí Para Mí, La Tormenta Pasará
              </h3>
              <p className="banner__subtitle--small">HASTA 10% OFF</p>
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
