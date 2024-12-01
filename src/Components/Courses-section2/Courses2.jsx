import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg01 from "../../assests/images/web-development.png";
import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";
import CourseCard2 from "./CourseCard2";

import "./courses2.css";

const CourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "05",
    title: "Advanced Web Development Course",
    imgUrl: courseImg01,
    students: 3.2,
    rating: 4.5,
  },
  {
    id: "06",
    title: "Graphic Design Basics",
    imgUrl: courseImg02,
    students: 4.1,
    rating: 4.0,
  },
  {
    id: "07",
    title: "Data Science 101",
    imgUrl: courseImg03,
    students: 4.5,
    rating: 4.3,
  },
  {
    id: "08",
    title: "Mobile App Development",
    imgUrl: courseImg04,
    students: 4.8,
    rating: 4.7,
  },
];

const Course = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Popular Courses</h2>
          </Col>

          {CourseData.slice(0, showMore ? 8 : 4).map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <CourseCard2 item={item} />
            </Col>
          ))}
        </Row>

        <div className="text-left mb-4">
          <button className="show-more-buttons" onClick={toggleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </button>
          <button className="view-all-button">
            View All Courses
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Course;
