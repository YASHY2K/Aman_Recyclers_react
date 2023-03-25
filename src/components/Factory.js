import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/Factory.css'; // Import custom CSS file

function Factory() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Our Factory</h1>
      <Row>
        <Col md={4} className="mb-4">
          <Image src="https://via.placeholder.com/400x300.png?text=Factory+Image+1" fluid className="factory-img" />
        </Col>
        <Col md={4} className="mb-4">
          <Image src="https://via.placeholder.com/400x300.png?text=Factory+Image+2" fluid className="factory-img" />
        </Col>
        <Col md={4} className="mb-4">
          <Image src="https://via.placeholder.com/400x300.png?text=Factory+Image+3" fluid className="factory-img" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="map-responsive">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.595966570202!2d72.88206192875171!3d20.192541377870683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72d261a865653%3A0x78a0d22ef1307fb!2sAMAN%20E-WASTE%20RECYCLERS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1679770568485!5m2!1sen!2sin"
              width="100%"
              height="400"
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Factory;
