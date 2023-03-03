import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutUs() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>Learn more about Aman E-waste Recyclers Private Limited and our mission.</p>
          <p>We're a group of eco-friendly people who want to do what we can to lessen the environmental damage caused by discarded electronics. Our mission is to make the proper disposal of electronic waste simple, secure, and accountable for all users.</p>
        </Col>
        <Col>
          <img src="https://via.placeholder.com/300x200.png?text=Image+Placeholder" alt="placeholder" />
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUs;