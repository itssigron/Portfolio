import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../Assets/favicon.png";


function NavBar() {
  return (
    <Navbar
      fixed="top"
      expand="md"
      className="sticky"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} alt="logo" style={{height: "25px", width: "25px", marginTop: "3px", marginRight: "10px"}} />
          <strong className="purple" id="name">Harel Sigron</strong>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
