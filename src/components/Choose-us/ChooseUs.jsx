import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                <b>We Provide Comprehensive Solution</b>: Streamline Education Management Effortlessly.<br />
                <b>User-Friendly Interface</b>: Intuitive Navigation for All Users.<br />
                <b>Customizable Features</b>: Tailored Solutions for Your Institution.<br />
                <b>Data Security and Privacy</b>: Protecting Your Information, Always.<br />
                <b>Scalability and Reliability</b>: Grow with Confidence, Stay Connected.<br />
                <b>Continuous Support and Updates</b>: Evolving with Education, Supporting You.<br />
                <b>Affordable Pricing</b>: Quality Solutions Within Reach.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/wathttps://youtu.be/PtgpSwEYx1s?si=BjaUJZrfkZ68bPjjch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
