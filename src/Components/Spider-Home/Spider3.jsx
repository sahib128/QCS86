import React from 'react';
import { FaBook, FaPhone } from 'react-icons/fa'; // Importing icons from react-icons
import './Spider3.css'; // Importing the CSS file

const Spider3 = () => {
    return (
        <section className="call-to-action">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10 text-center">
                        <div className="cta-content">
                            <h2>Discover the Easiest Way to Learn Everything</h2>
                            <p>
                                Join us on this venture of constant learning and growing where the sky is the limit!
                            </p>
                            <div className="cta-buttons">
                                <button className="primary-button">
                                    <FaBook /> See Courses
                                </button>
                                <button className="primary-button">
                                    <FaPhone /> Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Spider3;
