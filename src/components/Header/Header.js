import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Список постов
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            Обо мне
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand>
        <img
          src="https://via.placeholder.com/150"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Аватар"
        />{" "}
        Ваше имя
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
