import React, { useState } from 'react';
import '../components/Login.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useUserContext } from '../components/UserContext';
import AlertModal from '../components/Alertmodal';

function Login() {
  // Login component that displays the login form
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const { setUsername } = useUserContext();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();


  const handleChange = event => {
    // Update the form data in state when the user types into the form
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const validateForm = () => {
    // Check if both username and password are not empty
    const isValid = formData.username.trim() !== "" && formData.password.trim() !== "";
    setIsFormValid(isValid);
    return isValid;
  };

  const handleSuccessModalClose = () => {
    // Close the success modal
    setShowSuccessModal(false);
  };

  const handleSubmit = async event => {
    // Handle the form submission
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('https://medhound-auth-server-nodejs.uc.r.appspot.com/app/login', formData);

      if (response.data.username) {
        // Set the username in the user context
        // Show the success modal
        // Redirect to the homepage after 3 seconds using navigate()
        setUsername(response.data.username);
        setShowSuccessModal(true);
        console.log('Logged in as:', response.data.username);
        setTimeout(() => {
        // Redirect to the homepage after successful login
        navigate('/');

        }, 3000);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button id="logstyle" onClick={handleSubmit} disabled={isFormValid}>Login</button>
        <p>Don't have an account? <Link to="/signup">signup</Link></p>
      </div>
      {showSuccessModal && (
        <AlertModal message={`login successful`} onClose={handleSuccessModalClose} />
      )}
    </div>
  );
}

export default Login;
