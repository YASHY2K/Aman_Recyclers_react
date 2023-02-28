import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../styles/Home.css';

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400.png?text=Carousel+Image+1"
                rel="preload"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Slide 1</h3>
                <p>Some text about slide 1</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400.png?text=Carousel+Image+2"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Slide 2</h3>
                <p>Some text about slide 2</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400.png?text=Carousel+Image+3"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Slide 3</h3>
                <p>Some text about slide 3</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className="title">Welcome to E-Waste Recyclers</h1>
          <p>We are dedicated to helping you responsibly dispose of your electronic waste.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;