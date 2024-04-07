import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Providing learners with immediate feedback during practice sessions can accelerate learning by up to 200%, allowing for quick adjustments and reinforcement of correct behaviors.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "With an online support system, users from different parts of the world can seek help at any time, maximizing convenience and accessibility.",
    icon: "ri-discuss-line",
  },

  {
    title: "Excellent Marks",
    desc: "A supportive learning environment, characterized by encouragement from teachers, peers, and family, can positively influence students' confidence, and academic achievement.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
