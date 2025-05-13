import React from 'react';
import styles from './Navbar.module.scss';
import { Navbar, Container, Nav, Form, FormControl } from 'react-bootstrap';
import { BsCart3, BsPerson } from 'react-icons/bs';
import Busqueda from './Busqueda';

const NavBarApp = () => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Container>
        <Navbar.Brand href="#">📘 RELATOS DE PAPEL</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Busqueda />
          <Nav>
            <Nav.Link href="#"><BsPerson /> Iniciar sesión</Nav.Link>
            <Nav.Link href="#"><BsCart3 /> Carrito</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarApp;
