import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Contactus.css';

function ContactUs() {
  return (
    <Container className="contact-us, my-5">
      <h1 className="text-center mb-5">Contact Us</h1>
      <Row>
        <Col xs={12} md={6}>
          <div>
            <h3>Office Location</h3>
            <p>G/2 & F/102, Olympus House, DN road, Fort, Mumbai-400001, Maharashtra, India</p>
            <h3>Warehouse Location</h3>
            <p>F/1, Anna Sagar Market, Behind Naaz Hotel, Kural, Andheri - Kurla Rd, Jarimari, Saki Naka, Mumbai, Maharashtra 400072</p>
            <h3>Factory Location</h3>
            <p>5VVP+2J7, Sanjan road, Talasari, Maharashtra 401606</p>
            <h3>Contact Email</h3>
            <p>info@amanrecyclers.com</p>
            <h3>Phone Number</h3>
            <p>+1 234 567 8901</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <iframe
            title="office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7996.319827887365!2d72.83011443592618!3d18.9419753485354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d15bbad0f243%3A0xaddff2136f637f44!2sAMAN%20E-WASTE%20RECYCLERS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1677871325549!5m2!1sen!2sin"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
