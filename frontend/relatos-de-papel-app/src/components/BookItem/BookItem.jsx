import { useState } from "react";
import { Col, Card, Badge } from "react-bootstrap";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import useCarrito from "../../hooks/useCarrito";
import ToastAlert from "../ToastAlert/ToastAlert";

const BookItem = ({ libro }) => {
  const { agregarAlCarrito } = useCarrito();
  const [showToast, setShowToast] = useState(false);

  const handleAgregar = (e) => {
    e.preventDefault();
    e.stopPropagation();

    agregarAlCarrito(libro);
    setShowToast(true);
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} xl={2}>
      <Card className="h-100 position-relative rounded-4">
        <Badge bg="info" pill className="position-absolute end-0 m-2">
          {libro.descuento}% OFF
        </Badge>

        <Link
          to={`/book/${libro.uuid}`}
          className="text-decoration-none text-dark"
        >
          <div className="p-3 text-center">
            <Card.Img
              src={`${process.env.PUBLIC_URL}/assets/images/${libro.portada}`}
              height={200}
              className="object-fit-contain"
              alt={libro.titulo}
              loading="lazy"
            />
          </div>
          <Card.Body className="pt-2 text-center">
            <Card.Title className="small mb-1 text-body-emphasis">
              {libro.titulo}
            </Card.Title>
            <Card.Subtitle className="small text-muted mb-2">
              {libro.autor}
            </Card.Subtitle>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <span className="text-success fw-bold">
                  ${libro.precioFinal.toFixed(2)}
                </span>{" "}
                <del className="text-muted">${libro.precio}</del>
              </div>
              <BsCart
                role="button"
                className="text-primary"
                onClick={handleAgregar}
                size={20}
              />
            </div>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default BookItem;
