import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright" style={{zIndex: 1}}>
          <h3 style={{display: "inline-block", marginRight: "3px"}}>Credit for the initial template: </h3>
          <a className="purple" href="https://github.com/soumyajit4419/Portfolio" style={{textDecoration: "none", fontWeight: 600}}>soumyajit4419/Portfolio</a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;