import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import ticketcog from "../../Assets/Projects/ticketcog1.png";
import suicide from "../../Assets/Projects/suicide.png";
import shopfest from "../../Assets/Projects/shopfest.png";
import foodify from "../../Assets/Projects/foodify1.png";
import realestate from "../../Assets/Projects/realestate.png";
import quiz from "../../Assets/Projects/quiz.png";
import connect4 from "../../Assets/Projects/connect4.png";
import angularweb from "../../Assets/Projects/angularweb.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={ticketcog}
              isBlog={false}
              title="TicketCog"
              description="A web applictaion built in flask for creating , resolving and getting in depth analysis of IT issue ticket. 
              Technologies used : Python , Flask , NLP ,Data Science"
              ghLink="https://github.com/janhavi183/ticketcog"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Sucidal thoughts Detection"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts ,thus helping in sucide prevention.Used RNN algorithm."
              ghLink="https://github.com/janhavi183/SucidalthoughtsDetection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion Detection"
              description="Predict the emotions of a person through camera. Technologies used : Python ,keras , tenserflow"
              ghLink="https://github.com/janhavi183/EmotionDetection"
           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodify}
              isBlog={false}
              title="Foodify "
              description="Online food ordering system in asp.net Foodify is an online food ordering system having different restaurants in one place. So you don’t have to worry about ordering food from different restaurant sites. It has SqlExpress Database and c# language."
              ghLink="https://github.com/janhavi183/Foodify"
           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopfest}
              isBlog={false}
              title="Shopfest"
              description="Ganesh Chaturthi, Diwali and Christmas happen to be the three most widely celebrated festivals in India.A e-commerce website for ordering all the festive items ,built with Django and PostgreSql"
              ghLink="https://github.com/janhavi183/Shopfest"
           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={angularweb}
              isBlog={false}
              title="Mithaas"
              description="Developed a ecommerce website  for ordering sweets using angular.js"
              ghLink="https://github.com/janhavi183/angular-sweet-shop"
           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realestate}
              isBlog={false}
              title="DigitalAgent"
              description="Digitalization of data for Real Estate Agent using python ."
              ghLink="https://github.com/janhavi183/DigitalAgent"
           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Shopfest"
              description="Developed a fun & educational quiz using C to enhance children's reasoning and logical skills"
              ghLink="https://github.com/janhavi183/Quiz3-5"
           
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={connect4}
              isBlog={false}
              title="Connect4"
              description="Developed a fun game Connect4 using python and ai"
              ghLink="https://github.com/janhavi183/Connect4"
           
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
