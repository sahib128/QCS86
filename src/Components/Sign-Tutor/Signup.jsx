import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
        about: '',
        picture: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, picture: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append('first_name', formData.firstName);
        formDataToSend.append('last_name', formData.lastName);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('password', formData.password);
        formDataToSend.append('isqcx86', 'false');
        formDataToSend.append('isapproved', 'false');
        formDataToSend.append('about', formData.about);
        if (formData.picture) {
            formDataToSend.append('picture', formData.picture);
        }

        try {
            const response = await axios.post('http://localhost:3000/myapp/createuser', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                console.log('Sign-up successful:', response.data);
                // Navigate to the "/courses" route
                navigate("/");
            } else {
                console.error('Sign-up failed:', response.data);
            }
        } catch (error) {
            console.error('Error during sign-up:', error);
        }
    };

    return (
        <div className="signup-screen">
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number (Optional)"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group">
                        <textarea
                            name="about"
                            placeholder="About (Optional)"
                            value={formData.about}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="input-group file-upload">
                        <label htmlFor="file-upload" className="custom-file-upload">+</label>
                        <input
                            id="file-upload"
                            type="file"
                            name="picture"
                            accept="image/*"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        <span className="file-upload-label">Profile Picture</span>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;