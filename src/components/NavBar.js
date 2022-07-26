import React from 'react';
import "./NavBar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWigget from './CartWidget';
import { Link } from 'react-router-dom';
export const NavBar = () => {
  return (
    <>
  <Navbar bg="light" expand="lg" className='navbar'> 
  <Container className='container'>
    <Link to="/">
      <img src="/logoPrincipal.png"width="150"height="60"className="d-inline-block align-top"alt="logo"/>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='navegacion' />
      <Navbar.Collapse id="basic-navbar-nav"  className='Nav'>
          <Nav className="me-auto">
            <Link to="/" className="link"> INICIO</Link>
            <NavDropdown title="MARCAS" className="link" id="basic-nav-dropdown">
              <Link to="/categorias/Motorola" className="link">MOTOROLA</Link>
              <Link to="/categorias/Samsung" className="link">SAMSUNG</Link>
              <Link to="/categorias/Iphone" className="link">IPHONE</Link>
            </NavDropdown>
          </Nav>
      <CartWigget/>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}
