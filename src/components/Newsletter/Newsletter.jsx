import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">Important Notice</h2>
            <h3>Examination Date: 22-04-2024</h3>
            <div className="subscribe">
              <input type="text" placeholder="Enter Your Message" />
              <button className="btn">Send</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
