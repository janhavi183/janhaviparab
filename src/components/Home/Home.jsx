import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/homeimage.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Work from "./Work";
import Techstack from "./Techstack";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> JANHAVI PARAB</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "950px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Techstack />
      {/* <h1 className="white" style={{ fontSize: "2.1em", paddingBottom: "20px",paddingTop: "2px" }}>
        {/* <h1 className="main-name"> */}
        {/* Work 
        <strong className="purple">Experience</strong> 
        </h1>  */}
         <Work /> 
    </section>
  );
}

export default Home;