import React, { Fragment, useState, useEffect } from "react";
import './Courses.css'; // Import the CSS file for styling
import Header from "../Components/Header/Header";
import FreeCourse from "../Components/Courses-section2/Courses2";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import Spider2 from "../Components/Spider-Courses/Spider2";
import LoginPopup from '../Components/Login-Form/Login';
import SignPopup from '../Components/Signup-Form/Sign';
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const navigate = useNavigate();

  const toggleLoginPopup = () => {
    setLoginPopupOpen(!isLoginPopupOpen);
    document.body.style.overflow = isLoginPopupOpen ? 'auto' : 'hidden'; // Prevent scrolling
  };

  const onLoginSuccess = () => {
    setLoginPopupOpen(false);
    navigate('/courses');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto'; // Enable scrolling after rendering
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  // Scroll restoration logic to ensure the page resets to the top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <div key={new Date().getTime()} className="page-content fade-in">
          <Header onLoginClick={toggleLoginPopup} />
          <Spider2 />
          <FreeCourse />
          <Newsletter />
          <Footer />
          {isLoginPopupOpen && (
            <LoginPopup onClose={toggleLoginPopup} onLoginSuccess={onLoginSuccess} />
          )}
          {/* {isSignPopupOpen && <SignPopup onClose={toggleSignPopup} />} */}
        </div>
      )}
    </Fragment>
  );
};

export default Courses;
