import React from "react";
import "./LoginForm.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const LoginForm = () => {
  const handleGoogleLogin = () => {
    alert("Google Login clicked!");
    // Add your Google login logic here
  };

  const handleGithubLogin = () => {
    alert("GitHub Login clicked!");
    // Add your GitHub login logic here
  };

  return (
    <LoginForms>
      <div className="login-container">
        <div className="login-card">
          <div className="user-image">
            <img src="https://via.placeholder.com/100" alt="User Avatar" />
          </div>
          <h2>Welcome Back!</h2>
          <form>
            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="btn-primary">
              Login
            </button>
          </form>
          <p>----------------OR----------------</p>
          <div className="social-login">
            <button className="btn-google" onClick={handleGoogleLogin}>
              <FaGoogle /> Login with Google
            </button>
            <button className="btn-github" onClick={handleGithubLogin}>
              <FaGithub /> Login with GitHub
            </button>
          </div>
        </div>
      </div>
    </LoginForms>
  );
};

export default LoginForm;

const LoginForms =styled.div`


`