import React from 'react';
import AuthLayout from '../../Components/AuthLayout/AuthLayout';
import './Signup.css';

const Signup = () => {
  return (
    <AuthLayout>
      <div className="form-box">
        <form className="form">
          <span className="title">Sign up</span>
          <div className="form-container">
            <input type="text" className="input" placeholder="Full Name" />
            <input type="email" className="input" placeholder="Email" />
            <input type="password" className="input" placeholder="Password" />
            <input type="password" className="input" placeholder="Confirm Password" />
          </div>
          <button type="submit">Sign up</button>
        </form>
        <div className="form-section">
          <p>
            Already have an account? <a href="/">Log in</a>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
