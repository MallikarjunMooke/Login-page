import React, { useState } from 'react';
import img1 from '../images/img1.png'
import img4 from '../images/img4.png'
import img3 from '../images/img3.png'
import img2 from '../images/img2.png'
import img5 from '../images/img5.png'
import Error from '../images/Error.svg'

import './login.css';



// ... (your imports)

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Clear email error if validation passes
    setEmailError('');

    // Here you can handle the login logic, e.g., send the data to a server
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div id="main-div" className='img2' style={{ backgroundImage: `url(${img2})` }}>
      <div className="form-container">
        <div className="logo-container">
          <h4 className='img5'>Amazon</h4>
        </div>
        <h4 className='h1'>Login</h4>
        <img src={img3} alt='photo' className='img3' />
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              required=""
              name="email"
              placeholder="Email"
               id="email"
              type="email"
              className="input-field"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          {emailError && (
            <p style={{color: "#EE2D6E",margin:"auto"}}>
              <img src={Error} alt="error" style={{
                top: "391px",
                left: "491px",
                width: "16px",
                height: "16px",
                background: "no - repeat padding- box",
                opacity: "1",
                margin: 'auto',
              }} />

              {emailError}
            </p>
          )}

          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              required=""
              name="password"
              placeholder="Password"
              id="password"
              type="password"
              className="input-field"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit" className="form-submit-btn">Sign In</button>
        </form>
        <a className="forgot-password-link link" href="#">Forgot Password ?</a>
        <p className="signup-link"> <a href="#" className='signup-link'>New User?Sign up</a></p>
        <div className="social-buttons">
          <button className="social-button apple">
            <img src={img1} alt='photo' className='img1' />
            <span style={{ fontSize: '20px' }}>Sign in with Google</span>
          </button>
          <button className="social-button facebook">
            <img src={img4} alt='photo' className='img4' />
            <span style={{ fontSize: '20px' }}>Sign in with Facebook</span>
          </button>
        </div>
      </div>
    </div >
  );
};

export default Login;
