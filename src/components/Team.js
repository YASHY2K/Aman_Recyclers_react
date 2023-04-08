import React from 'react';
import '../styles/CustomCard.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

function MeetTheTeam() {
  return (
    <>
      <Container className="my-5">
        <h1 className="text-center mb-5">Meet the Team</h1>
        <Row>
          <Col sm={4} className="mx-auto" style={{paddingBottom: "10px"}}>
            <Card className="custom-card">
              <Card.Img className="rounded" variant="top" src="https://via.placeholder.com/150x150.png?text=Director" />
              <Card.Body>
                <Card.Title className="custom-card-title">Mohammed Tanveer</Card.Title>
                <Card.Text className="custom-card-text">Director</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4} className="mx-auto" style={{paddingBottom: "10px"}}>
            <Card className="custom-card">
              <Card.Img className="rounded" variant="top" src="https://via.placeholder.com/150x150.png?text=Director" />
              <Card.Body>
                <Card.Title className="custom-card-title">Mohammed Tanveer</Card.Title>
                <Card.Text className="custom-card-text">Director</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MeetTheTeam;
