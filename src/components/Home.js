import React from 'react';
import {Row, Col, Carousel } from 'react-bootstrap';
import '../styles/Home.css';

function Home() {
  return (
    <div className="container-fluid">
      <Row>
        <Col>
          <Carousel style={{marginTop: "5px"}}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400.png?text=Carousel+Image+1"
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
      <Row className="justify-content-center align-items-center">
        <Col md={8} className="text-center">
          <h1 className="display-4 mt-4 mb-3">Welcome to Aman E-waste Recyclers Private Limited</h1>
          <p className="lead mb-5">We are committed to helping you dispose of your electronic waste responsibly. A prominent and well-established E-Waste management and recycling firm that works with major telecom and technology corporations. Aman E-Waste Recyclers Pvt. Ltd. is a registered entity with the statutory authorities and pollution control boards; we take extreme precautions while conducting business operations; and we have a solid reputation in the fields of electronic waste management, disassembly, recycling, and extraction. In suburban Mumbai, we have a processing unit with environmentally responsible management facilities in addition to our headquarters in Fort.</p>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
