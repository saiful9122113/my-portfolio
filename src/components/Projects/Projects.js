import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import typing from "../../Assets/Projects/typing.jpg";
import phone from "../../Assets/Projects/phone.jpg";
import programming from "../../Assets/Projects/master-programming.jpg";
import  wedding from "../../Assets/Projects/wedding.jpg";


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
              imgPath={programming}
              isBlog={false}
              title="BoostUp Academy"
              description="This is A Modern Platform For Learning Technology Like C, C++, Java, Python, Go,PHP"
              ghLink="https://github.com/saiful9122113/boostUp-academy-clients-repo.git"
              demoLink="https://learning-platform-811a5.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wedding}
              isBlog={false}
              title="Core Photography"
              description="This is a feedback platform of Photograph service build with React and Tailwind CSS. Here user can see others feedback, can hier a photographer and can put down his comment here"
              ghLink="https://github.com/saiful9122113/service_review-client_side"
              demoLink="https://service-review-78368.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phone}
              isBlog={false}
              title="Products Resale"
              description="This is a old phone resale platform Where seller can add product for sell, buyer can booked it & purchase it. Admin can control all the process here if needed."
              ghLink="https://github.com/saiful9122113/used_products_resale-client_side_repo"
              demoLink="https://resell-product-190ce.web.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={typing}
              isBlog={false}
              title="Speed Monster"
              description="This is Platform For Practicing Typing Speed Of Some One It Helps User To Increase Typing Speed."
              ghLink="https://github.com/saiful9122113/type_monstar-debugging_repo"
              demoLink="https://chipper-quokka-37417f.netlify.app/"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
