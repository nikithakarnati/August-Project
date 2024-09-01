import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Main.css";

const Main = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Use useNavigate for programmatic navigation
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Invalid name";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email";
    }

    if (!formData.password || formData.password.length < 6) {
      formErrors.password = "Weak password";
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Password doesn't match";
    }

    setErrors(formErrors);

    // Return true if there are no errors
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // If the form is valid, navigate to the Login page
      console.log("Sign up successful", formData);
      navigate('/login'); // Programmatic navigation
    } else {
      // If the form is invalid, it will not navigate and errors will be shown
      console.log("Form has errors, fix them before submitting");
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1>QUIZZIE</h1>
        <div><span id="sign">Sign Up</span><span id="log">Log in</span></div>
        <form onSubmit={handleSubmit}>
          <div id="name">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={errors.name ? "Invalid name" : ""}
              className={errors.name ? "error-input" : ""}
            />
            {/* {errors.name && <p className="error-text">{errors.name}</p>} */}
          </div>
          <div id="mail">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={errors.email ? "Invalid email" : ""}
              className={errors.email ? "error-input" : ""}
            />
            {/* {errors.email && <p className="error-text">{errors.email}</p>} */}
          </div>
          <div id="pass">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder={errors.password ? "Weak password" : ""}
              className={errors.password ? "error-input" : ""}
            />
            {/* {errors.password && <p className="error-text">{errors.password}</p>} */}
          </div>
          <div id="pass2">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder={
                errors.confirmPassword ? "Password doesn't match" : ""}
              className={errors.confirmPassword ? "error-input" : ""}
            />
            {/* {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword}</p>
            )} */}
          </div>
          <button type="submit" id="btn">Sign-Up</button>
        </form>
        
      </div>
    </div>
  );
};

export default Main;
