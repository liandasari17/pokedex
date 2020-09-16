import React from "react";
import { Navbar, Form, Nav, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavPokemon() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Pokemon</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/favorite">
            Favorite
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
