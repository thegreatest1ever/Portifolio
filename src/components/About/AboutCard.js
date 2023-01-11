import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there, I am <span className="purple">Edwin Mugabe </span>
            from <span className="purple"> Kampala, Uganda.</span>
            <br />I am a software/Telecommunications Engineer with over 3+ years experience in web development and 5+ years experience in Telecommunications Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Inputs over Outcome"{" "}
          </p>
          <footer className="blockquote-footer">Alux</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
