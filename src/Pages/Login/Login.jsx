import React from 'react';
import './Login.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Login = () => {
  return (
    
    <div className="form-box">
      <div className="lottie-container">
        <DotLottieReact src="https://lottie.host/df523039-28dd-4fa7-9cb0-cd2d7ebaa242/csTuCiv8rU.lottie" loop autoplay/>
      </div>


      <form className="form">
        <span className="title">Log in</span>
        <div className="form-container">
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <button type="submit">Log in</button>
      </form>
      <div className="form-section">
        <p>
            Don't have an account? <a href="/signup">Sign up</a>
        </p>

      </div>
    </div>
  );
};

export default Login;
