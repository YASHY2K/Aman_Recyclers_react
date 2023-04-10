import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

function Footer() {
  return (
    <>
        <footer className="footer bg-dark">
            <Container>
                <Row className="justify-content-center">
                <Col lg={3} md={6}>
                    <h3>About Us</h3>
                    <p>
                    Aman E-Waste Recyclers Private Limited is a leading e-waste management company committed to reducing the environmental impact of e-waste through responsible recycling practices.
                    </p>
                </Col>
                <Col lg={3} md={6}>
                    <h3>Contact Us</h3>
                    <ul className="list-unstyled contact-info">
                    <li><FontAwesomeIcon icon={faLocationDot} className="icon me-2" /> G/2 & F/102, Olympus House, DN road, Fort, Mumbai-400001, Maharashtra, India</li>
                    <li><FontAwesomeIcon icon={faPhone} className="icon me-2" /> +1 234 567 8901</li>
                    <li><FontAwesomeIcon icon={faEnvelope} className="icon me-2" /> info@amanrecyclers.com</li>
                    </ul>
                </Col>
                <Col lg={3} md={6}>
                    <h3>Connect With Us</h3>
                    <ul className="list-unstyled social-media">
                    <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                    <li><a href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} /></a></li>
                    <li><a href="https://in.linkedin.com/company/aman-e-waste-recyclers-pvt-ltd?original_referer=https%3A%2F%2Fwww.google.com%2F"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </ul>
                </Col>
                </Row>
                <hr />
                <p className="text-center">&copy; 2023 Aman E-Waste Recyclers Private Limited. All rights reserved.</p>
            </Container>
        </footer>
    </>
  );
}

export default Footer;