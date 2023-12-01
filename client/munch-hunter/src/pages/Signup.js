import React, { useState } from 'react';
import '../components/Signup.css';
import axios from 'axios'; // Import axios with correct syntax

function Signup() {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/app/signup', formData);
      console.log('Form Submitted', response.data);
    } catch (error) {
      console.error('Error submitting form', error);
    }
    window.location = '/login'
  };

  return (
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
