import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Muhammad Saiful Islam </span>
            from <span className="purple"> Netrakona,Bangladesh.</span>
            <br /> Currently studying in Computer Science & Engineering at Bangabandhu Sheikh Mujibur Rahman Science & Technology University, Gopalganj.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Movie
            </li>
            <li className="about-activity">
              <ImPointRight /> Researching About Linux
            </li>
            <li className="about-activity">
              <ImPointRight /> Youtubing 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Get better ,Be the Winner"{" "}
          </p>
          <footer className="blockquote-footer">Muhammad Saiful Islam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
