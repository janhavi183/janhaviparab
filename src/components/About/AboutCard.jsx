import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hello everyone! My name is  <span className="purple">Janhavi Parab </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />I graduated with a Bachelor's degree in Computer Science and have been exploring various career options ever since.
            <br />
            <br />
            In addition to coding, I have a passion for <span className="purple"> music, dancing, and traveling.</span> These activities allow me to unwind and recharge so that I can bring my best self to any project I am working on.<br />
            <br />
            I have gained valuable experience through my work in <span className="purple">software development, data analysis, and project management.</span> I strive to grow personally and professionally by embracing new challenges and staying current with industry trends.
            </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Never underestimate the potential impact of what you create."{" "}
          </p>
          <footer className="blockquote-footer">Sara Blakely</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
