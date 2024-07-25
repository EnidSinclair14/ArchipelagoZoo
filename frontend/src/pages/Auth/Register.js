import React, { useState } from 'react';
import '../../styles/Auth/auth.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await axios.post('http://127.0.0.1:5000/auth/register', {
          username,
          email,
          password
        });
        setMessage(response.data.message);
      } catch (error) {
        console.error("Error during registration:", error);

        // Check if error.response and error.response.data are defined
        if (error.response && error.response.data) {
          setMessage(error.response.data.message || 'Something went wrong');
        } else {
          setMessage('An unexpected error occurred');
        }
      }
    } else {
      setMessage('Passwords do not match');
    }
  };


  return (
    <main className='register-bg'>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bx-envelope"></i>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
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

          <button type="submit" className="btn">Create New Account</button>

          <div className="link">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </main>
  );
}

export default Register;
