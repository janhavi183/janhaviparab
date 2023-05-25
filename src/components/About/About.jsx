import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Certification from "./Certification";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/try1.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px", paddingTop: "2px" }}>
          <Col md={7} style={{ justifyContent: "center", paddingTop: "2px", paddingBottom: "10px" }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", paddingTop: "2px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingTop: "80px", paddingBottom: "50px" }} className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" style={{ width: "100%", height: "auto" }} />
          </Col>
        </Row>
        <h1 className="project-heading">
          Certifications <strong className="purple"> </strong>
        </h1>
        <Certification />
      </Container>
    </Container>
  );
}

export default About;
