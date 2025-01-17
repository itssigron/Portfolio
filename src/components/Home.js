import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import laptopImg from "../Assets/about.png";
import Socials from "./Socials";
import Projects from "./Projects/Projects";
import Skillset from "./Skillset";

function Home() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", fontWeight: "bold", color: "darkorchid" }}>
            About Me
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" height="auto" width="100%" />
          </Col>
        </Row>
        <Skillset />
        <Projects />
        <Socials />
      </Container>
    </Container>
  );
}

export default Home;