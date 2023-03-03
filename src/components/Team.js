import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function MeetTheTeam() {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">Meet the Team</h1>
        <Row>
          <Col sm={4} className="mx-auto">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150x150.png?text=John+Doe" />
              <Card.Body>
                <Card.Title>Mohammed Tanveer</Card.Title>
                <Card.Text>Director</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="mx-auto">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150x150.png?text=Jane+Smith" />
              <Card.Body>
                <Card.Title>Abdul Karim Chaudhary</Card.Title>
                <Card.Text>Additional Director</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MeetTheTeam;
