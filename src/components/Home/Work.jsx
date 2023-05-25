// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
// import myImg from "../../Assets/work.gif";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { Container, Row, Col } from "react-bootstrap";
// function Work() {
//   return (
//     <div className="work-container">
//       <h1 style={{ fontSize: "2.8em" }}>
//               WORK <strong className="purple"> EXPERIENCE</strong>
//             </h1>
//       <Card className="quote-card-view -work">
//         <div className="row">
//           <div className="col-lg-4 col-md-12 col-sm-10 ml-12">
//             <img src={myImg} alt="Profile" className="img-work" />
//           </div>
//           <div className="col-lg-8 col-md-12 col-sm-12">
//             <Card.Body>
//               <blockquote className="blockquote mb-2 mr-10">
//                 <p style={{ textAlign: "justify" }}>
//                   Assistant Developer Intern<br />
//                   <span className="purple">OCUFOX TECHNOLOGIES PVT LTD</span>
//                   <br />
//                   <span className="purple">JUN 2021 - OCT 2021</span>
//                   <br />
//                   Experienced in Vue.js and Firebase technologies.
//                 </p>
//               </blockquote>
//             </Card.Body>
//           </div>
//         </div>
//         <Row>
//         <Col md={12} className="home-about-social">
//           <h1>FIND ME ON</h1>
//           <p>
//             Feel free to <span className="purple">connect </span>with me
//           </p>
//           <ul className="home-about-social-links">
//             <li className="social-icons">
//               <a
//                 href="https://github.com/janhavi183/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="icon-colour  home-social-icons"
//               >
//                 <AiFillGithub />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.linkedin.com/in/janhaviparab/"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="icon-colour  home-social-icons"
//               >
//                 <FaLinkedinIn />
//               </a>
//             </li>
//             <li className="social-icons">
//               <a
//                 href="https://www.instagram.com/itsjanhaviiii"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="icon-colour home-social-icons"
//               >
//                 <AiFillInstagram />
//               </a>
//             </li>
//           </ul>
//         </Col>
//       </Row>
//       </Card>
//     </div>
//   );
// }

// export default Work;
import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";
import myImg from "../../Assets/work.gif";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

function Work() {
  return (
    <div className="work-container">
      <h1 style={{ fontSize: "2.8em" }}>
        WORK <strong className="purple">EXPERIENCE</strong>
      </h1>
      <Card className="quote-card-view -work">
        <Row>
          <Col md={4} className="image-col">
            <img src={myImg} alt="Profile" className="img-work" />
          </Col>
          <Col md={6} className="content-col">
            <Card.Body>
              <blockquote className="blockquote mb-2">
                <p style={{ textAlign: "justify" }}>
                  Assistant Developer Intern
                  <br />
                  <span className="purple">OCUFOX TECHNOLOGIES PVT LTD</span>
                  <br />
                  <span className="purple">JUN 2021 - OCT 2021</span>
                  <br />
                  Experienced in Vue.js and Firebase technologies.
                </p>
              </blockquote>
            </Card.Body>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/janhavi183/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/janhaviparab/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/itsjanhaviiii"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Work;
