import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email";
    }

    if (!formData.password || formData.password.length < 6) {
      formErrors.password = "Weak password";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Log in successful", formData);
      navigate("/Dashboard");
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h1>QUIZZIE</h1>
        <div><span id="signup">Sign Up</span><span id="login">Log in</span></div>
        <form onSubmit={handleSubmit}>
          <div id="email">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={errors.email ? "Invalid email" : ""}
              className={errors.email ? "error-input" : ""}
            />
          </div>
          <div id="pas">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder={errors.password ? "Wrong password" : ""}
              className={errors.password ? "error-input" : ""}
            />
          </div>
          <button type="submit" id="butn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
