import React from "react";
import "./Join.css";
import aboutImg from "../../assests/images/img-drive.webp";
import { Container, Row, Col } from "reactstrap";

const Join = () => {
  return (
    <section className="join-section"> {/* Added the class here */}
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="join__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="join__content">
              <h2>Take the next step <br />
                toward your personal <br />
                and professional goals <br />
                with QCs86</h2>
              <p>
                Join now to get early access to all our courses.
              </p>
              <button className="join-now-button">Join for Free</button>
            </div>
          </Col>
        </Row>
        
      </Container>
    </section>
  );
};

export default Join;
