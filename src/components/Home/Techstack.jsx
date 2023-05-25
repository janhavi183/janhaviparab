import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiPython} from "react-icons/di";
import { SiDjango, SiFlask, SiTailwindcss } from "react-icons/si";
import { BsDatabase } from "react-icons/bs";

function Techstack() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const renderIcon = (icon) => {
    switch (icon) {
      case "python":
        return <DiPython />;
      case "javascript":
        return <DiJavascript1 />;
      case "nodejs":
        return <DiNodejs />;
      case "react":
        return <DiReact />;
      case "django":
        return <SiDjango />;
      case "flask":
        return <SiFlask />;
      case "tailwindcss":
        return <SiTailwindcss />;
      case "database":
        return <BsDatabase />;
      default:
        return null;
    }
  };

  const textStyles = {
    fontSize: "1rem",
    marginTop: "0.5rem",
    transition: "opacity 0.3s",
    opacity: hoveredIcon ? 1 : 0,
  };

  return (
    <div className="techstack-container" style={{ overflow: "hidden" , color:"white"}}>
      <h1 style={{ fontSize: "2.8em" }}>
              Technical <strong className="purple"> Skills</strong>
            </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <div
            onMouseEnter={() => handleMouseEnter("python")}
            onMouseLeave={handleMouseLeave}
          >
            {renderIcon("python")}
            <div style={textStyles}>{hoveredIcon === "python" ? "Python" : null}</div>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div
            onMouseEnter={() => handleMouseEnter("javascript")}
            onMouseLeave={handleMouseLeave}
          >
            {renderIcon("javascript")}
            <div style={textStyles}>{hoveredIcon === "javascript" ? "JavaScript" : null}</div>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div
            onMouseEnter={() => handleMouseEnter("nodejs")}
            onMouseLeave={handleMouseLeave}
          >
            {renderIcon("nodejs")}
            <div style={textStyles}>{hoveredIcon === "nodejs" ? "Node.js" : null}</div>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div
            onMouseEnter={() => handleMouseEnter("react")}
            onMouseLeave={handleMouseLeave}
          >
            {renderIcon("react")}
            <div style={textStyles}>{hoveredIcon === "react" ? "React" : null}</div>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div
            onMouseEnter={() => handleMouseEnter("django")}
            onMouseLeave={handleMouseLeave}
          >
            {renderIcon("django")}
            <div style={textStyles}>{hoveredIcon === "django" ? "Django" : null}</div>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div
            onMouseEnter={() => handleMouseEnter("flask")}
            onMouseLeave={handleMouseLeave}
          >
            {renderIcon("flask")}
            <div style={textStyles}>{hoveredIcon === "flask" ? "Flask" : null}</div>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div
            onMouseEnter={() => handleMouseEnter("tailwindcss")}
            onMouseLeave={handleMouseLeave}
          >
            {renderIcon("tailwindcss")}
            <div style={textStyles}>{hoveredIcon === "tailwindcss" ? "Tailwind CSS" : null}</div>
          </div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <div
            onMouseEnter={() => handleMouseEnter("database")}
            onMouseLeave={handleMouseLeave}
          >
            {renderIcon("database")}
            <div style={textStyles}>{hoveredIcon === "database" ? "Database" : null}</div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;

