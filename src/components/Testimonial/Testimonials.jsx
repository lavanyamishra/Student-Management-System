import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent method of teaching
                      </h6>
                      <p>
                        I thoroughly enjoyed my experience with the course/program. Overall, I found the content to be engaging and relevant, and the learning objectives were clearly communicated. The instructor's teaching methods were effective, and I appreciated their availability and willingness to support students. The learning resources provided were useful and easily accessible, enhancing my understanding of the material
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Abhishek</h6>
                        <p>Danapur,Patna</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Best Faculty Support
                      </h6>
                      <p>
                        I want to express my gratitude for the enriching experience I had with the course/program. Overall, I found the course content to be comprehensive and well-structured, with clear learning objectives guiding each lesson. The instructor's teaching style was engaging, and their passion for the subject matter was evident in every session.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Deepak</h6>
                        <p>Begusarai, Bihar</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        I wanted to take a moment to provide feedback on my experience with the course/program. Overall, I found the course content to be engaging and well-structured, providing a solid foundation in the subject matter. The instructor's teaching style was effective, and I appreciated their willingness to address questions and facilitate discussions.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Lavanya</h6>
                        <p>Noida, New Delhi</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
