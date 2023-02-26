import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function MeetTheTeam() {
  return (
    <Container>
      <h1 className="text-center mb-5">Meet the Team</h1>
      <Row>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150x150.png?text=John+Doe" />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>CEO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150x150.png?text=Jane+Smith" />
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>CFO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150x150.png?text=Bob+Johnson" />
            <Card.Body>
              <Card.Title>Bob Johnson</Card.Title>
              <Card.Text>COO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MeetTheTeam;
