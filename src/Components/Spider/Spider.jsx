import React from 'react';
import './Spider.css';

const Spider = () => {
  return (
    <div className="slider-container" style={{ backgroundImage: `url('http://shtheme.org/demosd/nolez/wp-content/uploads/2020/03/slider-bg.jpg')` }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="slider-content text-center">
              <h1 className="fadeInDown" style={{ animationDelay: '0.8s' }}>
                Training Today <br />
                For a Better <br />
                Tomorrow
              </h1>
              <a href="#" className="slider-btn fadeInUp" style={{ animationDelay: '4s' }}>
                <i className="fas fa-book"></i> Admission Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spider;
