import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import LDD from "../../Assets/Projects/LDD.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My<strong className="purple">Works </strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LDD}
              isBlog={false}
              title="Lung-disease-detector"
              description="The Lung Disease Detector is an AI-powered platform that uses deep learning to classify chest X-ray images as either normal or indicative of viral pneumonia. This project combines cutting-edge medical imaging technology with a user-friendly web interface to streamline disease detection."
              ghLink="https://github.com/bipinnegi/LDD"
              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
