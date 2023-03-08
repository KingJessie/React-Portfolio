import React from "react";
import { Container, Row, Col } from "react-bootstrap";
let Image = "/image/img-about.png";

function About() {
  return (
    <div className="about h-screen w-full px-4">
      <h1>About Page</h1>
      <Container>
        <Row>
          <Col xs={12} md={6} xl={5}>
            <div className="image-container">
              <img
                src={Image}
                alt="my profile-pic"
                width={"300px"}
                height={"300px"}
              />
            </div>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <div className="text-container">
              <p className="content-p">
                As a skilled professional with a background in software
                development, administration, and business management, I am
                proficient in creating microservice applications and leveraging
                innovative technologies to deliver effective solutions. As a
                trainee front-end developer, I have expertise in developing
                high-quality web applications using frameworks such as Node.js
                and React.
              </p>
              <p className="content-p">
                I am skilled at identifying and fixing website problems,
                including broken links and formatting issues. I have also
                refactored code to improve accessibility and search engine
                optimization.
              </p>
              <p className="content-p">
                I am passionate about developing high-quality web applications
                and am excited to continue learning and advancing my skills in
                this field.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
