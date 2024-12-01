import React, { Fragment, useState, useEffect } from "react";

import Header from "../Components/Header/Header";
import CompanySection from "../Components/Company-section/Company";
import AboutUs from "../Components/About-us/AboutUs";
import Features from "../Components/Feature-section/Features";
import Courses2 from "../Components/Courses-section2/Courses2";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import Join from "../Components/Join-Now/Join";
import Spider from "../Components/Spider/Spider";
import Spider3 from "../Components/Spider-Home/Spider3";
import LoginPopup from '../Components/Login-Form/Login';
import SignPopup from '../Components/Signup-Form/Sign';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  //  const [isSignPopupOpen, setSignPopupOpen] = useState(false);
  const navigate = useNavigate();

  const toggleLoginPopup = () => {
    setLoginPopupOpen(!isLoginPopupOpen);
    // setSignPopupOpen(false); // Close signup popup if it's open
    document.body.style.overflow = !isLoginPopupOpen ? 'hidden' : 'auto';
  };

  const onLoginSuccess = () => {
    setLoginPopupOpen(false);
    navigate('/courses');
  };

  // const toggleSignPopup = () => {
  //   // setSignPopupOpen(!isSignPopupOpen);
  //   setLoginPopupOpen(false); // Close login popup if it's open
  //   navigate('/signup')
  //   // document.body.style.overflow = !isSignPopupOpen ? 'hidden' : 'auto';
  // };

  useEffect(() => {
    // Ensure scrolling is enabled when page is first loaded or refreshed
    document.body.style.overflow = 'auto';
  
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  
    return () => {
      clearTimeout(timer);
      // Restore body overflow when component unmounts or during cleanup
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <Fragment>
      {isLoading ? (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="page-content fade-in">
          <Header
            onLoginClick={toggleLoginPopup}
          />
          <Spider />
          <CompanySection />
          <AboutUs />
          <Spider3 />
          <Courses2 />
          <Features />
          <Join />
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

export default Home;
