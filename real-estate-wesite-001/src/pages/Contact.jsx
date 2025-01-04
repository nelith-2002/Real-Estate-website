import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <Container>
        {/* Page Heading */}
        <Row className="justify-content-center text-center mb-5">
          <Col xs={12}>
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-caption">
              We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
            </p>
          </Col>
        </Row>

        {/* Form Section */}
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}> {/* Increased width */}
            <div className="contact-form-wrapper">
              <h2 className="form-title">Fill Up The Form</h2>
              <Form>
                <Row className="mb-3">
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        className="form-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        className="form-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    className="form-input"
                  />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Message"
                    className="form-input"
                  />
                </Form.Group>
                <div className="text-center">
                  <Button type="submit" className="submit-btn">
                    Submit Request
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
