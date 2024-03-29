import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/CustomCard.css';

function AboutUs() {
  return (
    <Container className="my-5">
      <h1 className="text-center mb-5">About Us</h1>
        <Row>
          <Col sm={4} className="mx-auto" style={{paddingBottom: "10px"}}>
            <Card className="custom-card">
              <Card.Img className="rounded" variant="top" src="https://via.placeholder.com/150x150.png?text=Warehouse" />
              <Card.Body>
                <Card.Title>Warehouse</Card.Title>
                <Card.Text>
                  Learn more about our warehouse and how we process e-waste.
                </Card.Text>
                <Link to="/Warehouse" className="btn btn-primary">View More</Link>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="mx-auto" style={{paddingBottom: "10px"}}>
            <Card className="custom-card">
              <Card.Img className="rounded" variant="top" src="https://via.placeholder.com/150x150.png?text=Factory" />
              <Card.Body>
                <Card.Title>Factory</Card.Title>
                <Card.Text>
                  Learn more about our factory and how we recycle e-waste.
                </Card.Text>
                <Link to="/Factory" className="btn btn-primary">View More</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
  );
}

export default AboutUs;