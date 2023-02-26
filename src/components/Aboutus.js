import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>Learn more about E-Waste Recyclers and our mission.</p>
          <p>We are a team of environmentally-conscious individuals who are dedicated to helping reduce electronic waste and its harmful impact on the planet. Our goal is to provide an easy, safe, and responsible way for individuals and businesses to dispose of their electronic waste.</p>
        </Col>
        <Col>
          <img src="https://via.placeholder.com/300x200.png?text=Image+Placeholder" alt="placeholder" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;