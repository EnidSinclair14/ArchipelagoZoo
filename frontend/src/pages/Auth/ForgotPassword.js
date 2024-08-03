import React, { useState } from 'react';
import '../../styles/Auth/auth.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();


  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/auth/forgot_password', {
        username,
        email,
        new_password: newPassword,
      });
      setMessage(response.data.message);
      navigate('/login');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <main className='forgot-bg'>
      <div className="wrapper">
        <form onSubmit={handleForgotPassword}>
          <h1>Reset Password</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className="bx bx-envelope"></i>
          </div>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email Address"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bx-envelope"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="New Password"
              required
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button type="submit" className="btn">Reset Password</button>

          {message && <p>{message}</p>}
        </form>
      </div>
    </main>
  );
};

export default ForgotPassword;
