import React, { useState } from 'react';
import '../components/Signup.css';
import axios from 'axios'; // Import axios with correct syntax

function Signup() {
  // Signup component that displays the signup form and handles form submission
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: ""
  });

const handleChange = event => {
    // Update the form data in state when the user types into the form
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async event => {
    // Handle the form submission
    event.preventDefault();

    try {
      const response = await axios.post('https://medhound-auth-server-nodejs.uc.r.appspot.com/app/signup', formData);
      console.log('Form Submitted', response.data);
    } catch (error) {
      console.error('Error submitting form', error);
    }
    window.location = '/login'
};

return (
  // Signup component that displays the signup form
    <div className="login-container">
      <div className="login-form">
        <h2>Sign up</h2>
        <input
          type="text"
          placeholder="Full Name"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="User Name"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button id='logstyle' onClick={handleSubmit}>Sign up</button>
      </div>
    </div>
  );
}

export default Signup;
