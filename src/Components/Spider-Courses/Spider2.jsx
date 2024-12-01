import React from 'react';
import './Spider2.css';
import Spider from "../../assets/Spider2.jpg";
import { Link } from 'react-router-dom'; // Update with the correct path to your PNG image

const Spider2 = () => {
  return (
    <section className="banner" style={{ backgroundImage: `url(${Spider})` }}>
      <div className="container">
        <div className="col-lg-12">
          <div className="banner-content">
            <div className="banner-title text-center">
              <h1>The Course Hub</h1>
            </div>
            <div className="directory text-center">
              <Link to="/home">Home</Link>
              <span>| |</span>
              <a href="#">Course Standard</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spider2;
