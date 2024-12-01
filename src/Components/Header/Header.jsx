import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Container } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaCog } from "react-icons/fa"; // Import the settings icon
import "./header.css";
import logo from '../../assets/logo.png';
import home from '../../assets/home_drop.jpg';
import coursesImg from '../../assets/home_drop.jpg'; // Assuming you have a courses image

const Header = ({ onLoginClick }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false); // State for settings dropdown

  // Function to check for the authToken cookie
  const checkAuthToken = () => {
    const token = Cookies.get('authToken');
    setIsLoggedIn(!!token); // Update isLoggedIn based on token presence
  };

  // Check for authToken on component mount
  useEffect(() => {
    checkAuthToken();
  }, [isLoggedIn]);

  const handleSettingsClick = () => {
    console.log("Settings clicked");
    navigate('/settings'); // Navigate to the profile page
  };

  const handleLogout = () => {
    Cookies.remove('authToken');
    checkAuthToken();
    navigate('/'); // Redirect to home after logout
  };

  const handlesignup = () => {
    navigate('/signup');
  };

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo d-flex align-items-center gap-2">
            <img src={logo} alt="Logo" style={{ height: "70px", marginLeft: "-50px" }} />
            <h2 className="mb-0">QCs86</h2>
          </div>

          <div className="nav d-flex align-items-center">
            <ul className="nav__list d-flex align-items-center">
              <li className="nav__item home__dropdown">
                <Link to="/">Home</Link>
                <div className="dropdown__container home-dropdown__container">
                  <div className="dropdown__content d-flex align-items-center">
                    <div className="dropdown__items">
                      <div className="dropdown__item">
                        <Link to="/">Main Home</Link>
                      </div>
                      <div className="dropdown__item">
                        <Link to="#">Online Courses <span className="label">Popular</span></Link>
                      </div>
                      <div className="dropdown__item">
                        <Link to="#">Courses Hub</Link>
                      </div>
                    </div>
                    <img src={home} alt="Home Graphic" className="dropdown__image" />
                  </div>
                </div>
              </li>

              {/* Courses Dropdown Menu */}
              <li className="nav__item courses__dropdown">
                <Link to="/courses">Courses</Link>
                <div className="dropdown__container courses-dropdown__container">
                  <div className="dropdown__content d-flex align-items-center">
                    <div className="dropdown__items">
                      <div className="dropdown__item">
                        <Link to="/courses">All Courses</Link>
                      </div>
                      <div className="dropdown__item">
                        <Link to="/popular-courses">Popular Courses</Link>
                      </div>
                      <div className="dropdown__item">
                        <Link to="/new-courses">New Courses</Link>
                      </div>
                    </div>
                    <img src={coursesImg} alt="Courses Graphic" className="dropdown__image" />
                  </div>
                </div>
              </li>

            </ul>
          </div>

          <div className="search-bar-container">
            <input type="text" className="search-bar" placeholder="Search..." />
            <button className="search-button">Search</button>
          </div>

          <div className="nav__right d-flex align-items-center">
            {isLoggedIn ? (
              <div 
                className="settings-icon-container" 
                onMouseEnter={() => setShowSettingsDropdown(true)} 
                onMouseLeave={() => setShowSettingsDropdown(false)}
              >
                <FaCog className="settings-icon" size={24} title="Settings" />
                {showSettingsDropdown && (
                  <div className="dropdown__container settings-dropdown__container">
                    <div className="dropdown__item" onClick={handleSettingsClick}>User Panel</div>
                    <div className="dropdown__item" onClick={handleLogout}>Logout</div>
                  </div>

                )}
              </div>
            ) : (
              <>
                <button className="btn btn-login" onClick={onLoginClick}>Login</button>
                <button className="btn btn-signup" onClick={handlesignup}>Signup</button>
              </>
            )}
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
