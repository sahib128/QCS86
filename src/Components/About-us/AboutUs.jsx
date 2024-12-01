import React from "react";
import Slider from "react-slick";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg1 from "../../assests/images/about-us.png";
import aboutImg2 from "../../assests/images/branding.png";
import aboutImg3 from "../../assests/images/ui-ux.png";

const AboutUs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [aboutImg1, aboutImg2, aboutImg3];

  return (
    <div className="about-section-wrapper">
      <section className="about-section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="about__img">
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Slide ${index}`} className="w-100" />
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="about__content">
                <h2 className="about__heading">About Us</h2>
                <p className="about-text">
                  Welcome to QCs86, your go-to destination for online learning! We provide high-quality video courses and interactive live lectures across various fields, making education accessible to all. Our expert instructors offer valuable insights and practical skills. With flexible learning options and a vibrant community for real-time interaction, we empower you to achieve your educational goals. Join us today and unlock the power of knowledge!
                </p>
                <h2 className="best__heading">Why We Are the Best?</h2>
                <p className="best-text">
                  At QCs86, we combine expert-led instruction with cutting-edge resources to ensure a comprehensive learning experience. Our commitment to flexibility and community support empowers you to reach your educational goals efficiently and effectively.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
