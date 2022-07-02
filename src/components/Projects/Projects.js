import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Magshimim Gif Maker"
              description="The Final Project I've made for Magshimim first year (Magshimim is Israel National Cyber Enrichment Program)"
              ghLink="https://github.com/itssigron/Magshimim-GifMaker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="sigidb"
              description="sigidb is a wrapper package for better-sqlite3, super easy to use, includes better-sqlite3's database instance."
              ghLink="https://github.com/itssigron/sigidb"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
