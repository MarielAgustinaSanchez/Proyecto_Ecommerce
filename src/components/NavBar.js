import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWigget from './CartWidget';

export const NavBar = () => {
  return (
    <>
  <Navbar bg="light" expand="lg"> 
  <Container>
    <Navbar.Brand href="#home">
      <img
        src="/logoPrincipal.png"
        width="150"
        height="60"
        className="d-inline-block align-top"
        alt="logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">INICIO</Nav.Link>
        <NavDropdown title="MARCAS" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">MOTOROLA</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">SAMSUNG</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">IPHONE</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <CartWigget/>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}

export default NavBar;
