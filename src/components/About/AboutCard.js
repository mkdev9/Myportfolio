import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mallikarjun Brungi </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently Focusing on building my skills in Generative AI models
            <br />
            I have completed Electrical and Electronics (EEE) in Audisankara College of Engineering and Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Music Production
            </li>
            <li className="about-activity">
              <ImPointRight /> Making DIY
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
