import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";
import featureImage from '../../assests/images/features.png';


const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Accelerate your learning with structured courses designed for efficient skill acquisition. Our easy-to-follow modules and engaging content make it simple to gain knowledge quickly and effectively.",
    icon: "ri-draft-line",
  },
  {
    title: "All Time Support",
    desc: "Receive guidance whenever you need it. Our dedicated support team is available around the clock to assist you with questions, technical help, or additional resources to ensure a smooth learning experience.",
    icon: "ri-discuss-line",
  },
  {
    title: "Certification",
    desc:"Earn industry-recognized certifications upon course completion. Our credentials validate your skills and enhance your professional profile, giving you a competitive edge in the job market.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-background">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <div className="features-header">
                <h2 className="features-title">What We Do</h2>
                <p className="features-description">
                "We are dedicated to empowering learners with comprehensive e-learning programs, recognized certifications, <br/>
                and all-time support to guide you every step of the way. Whether you're looking to gain new skills, earn credentials,<br/>
                 or receive expert assistance, we’re here to help you achieve your goals with ease and flexibility."
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="6" md="12">
              {FeatureData.map((item, index) => (
                <div className="single__feature mb-4 d-flex align-items-start" key={index}>
                  <i className={`${item.icon} feature-icon mr-3`}></i>
                  <div>
                    <h6 className="feature-title">{item.title}</h6>
                    <p className="feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </Col>
            <Col lg="6" md="12" className="d-flex justify-content-center align-items-center">
            <img src={featureImage} alt="Feature Illustration" className="feature-image" />

            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Features;
