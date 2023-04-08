import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function MeetTheTeam() {
  return (
    <>
      <Container>
        <h1 className="text-center mb-5">Meet the Team</h1>
        <Row>
          <Col sm={4} className="mx-auto" style={{paddingBottom: "10px"}}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150x150.png?text=Director" />
              <Card.Body>
                <Card.Title>Mohammed Tanveer</Card.Title>
                <Card.Text>Director</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="mx-auto" style={{paddingBottom: "10px"}}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150x150.png?text=Additional+Director" />
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
