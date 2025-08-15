import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './AuthLayout.css';

const AuthLayout = ({ children }) => {
  return (
    <div className="auth-container">
      {/* Left column */}
      <div className="lottie-section">
        <div className="lottie-text">
          <h1>VUnity</h1>
          <p>From Freshers to Final-Year Legends — Everyone’s Here.</p>
        </div>
        <DotLottieReact
          src="https://lottie.host/584f37a3-ad6e-45bd-a95d-8f76f8b83d07/uArKuBe1ta.lottie"
          loop
          autoplay
        />
      </div>

      {/* Right column */}
      <div className="form-section">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
