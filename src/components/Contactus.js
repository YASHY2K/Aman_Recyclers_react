import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ContactUs() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h1>Contact Us</h1>
          <p>Get in touch with us.</p>
          <div>
            <h3>Factory Location</h3>
            <p>123 Main St, Anytown USA</p>
            <h3>Office Location</h3>
            <p>456 Oak St, Anytown USA</p>
            <h3>Contact Email</h3>
            <p>info@ewasterecyclers.com</p>
            <h3>Phone Number</h3>
            <p>(123) 456-7890</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27927.685567301534!2d72.90086993030322!3d19.0880700105886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c88f990f9f89%3A0xa99eb9ee479a7f40!2sKohinoor%20City%20Phase%203!5e0!3m2!1sen!2sin!4v1677431504010!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;