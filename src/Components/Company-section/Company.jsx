import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./company-section.css";

const Company = () => {
  return (
    <section className="company-section">
      <Container>
        <Row>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className="d-flex align-items-center gap-1">
              <i className="ri-vimeo-line light-blue"></i> Vimeo
            </h3>
          </Col>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className="d-flex align-items-center gap-1">
              <i className="ri-pinterest-line light-blue"></i> Pinterest
            </h3>
          </Col>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className="d-flex align-items-center gap-1">
              <i className="ri-dribbble-line light-blue"></i> Dribble
            </h3>
          </Col>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className="d-flex align-items-center gap-1">
              <i className="ri-apple-fill light-blue"></i> Apple
            </h3>
          </Col>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className="d-flex align-items-center gap-1">
              <i className="ri-finder-fill light-blue"></i> Finder
            </h3>
          </Col>
          <Col lg="2" md="3" sm="4" xs="6">
            <h2 className="d-flex align-items-center gap-1">
              <i className="ri-google-fill light-blue"></i> Google
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
