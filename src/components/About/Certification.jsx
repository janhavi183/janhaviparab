import React from "react";

function Certification() {
  const courses = [
    "Python for Data Science, by IIT Madras through NPTEL platform",
    "Google Analytics Beginner and Advanced, by Google",
    "Digital Skills: Web Analytics, Accenture",
    "Build Android App, by CentraleSupélec through Coursera",
    "Introduction to the Internet of Things and Embedded Systems, University of California, Irvine through Coursera",
    "Getting Started with Data Analytics on AWS, Amazon Web Services",
    "TCS iON Career Edge - Young Professional Course, TCS",
    "German Certificate Course A1 Level, Ramnarian Ruia College",
    "Innovation and Entrepreneurship Certificate Course, Cultinno and Ramnarian Ruia College"
  ];

  return (
    <div>
      {/* <h2 className="certification-heading">Completed Courses:</h2> */}
      <ul className="certification-list">
        {courses.map((course, index) => (
          <li key={index}>
            <span className="course-name">{course.split(",")[0]}</span>
            <span className="course-info">, {course.split(",")[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Certification;
