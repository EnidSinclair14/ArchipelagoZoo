import '../../styles/Auth/auth.css' // styling
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/auth/login', {
        username,
        password
      });
      setMessage(response.data.message);
      setIsLoggedIn(true)
      navigate('/')
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };


  return (
    <main className='login-bg'>
      <div class="wrapper">
        <form id="loginForm" onSubmit={handleLogin}>
          <h1>Login</h1>
          <div class="input-box">
            <input type="text" id="username" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
            <i class="bx bxs-user"></i>
          </div>

          <div class="input-box">
            <input type="password" id="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            <i class="bx bxs-lock-alt"></i>
          </div>
          <div class="remember-forget">
            <label><input type="checkbox" />Remember me</label>
            <Link to="/forgot_password">forget-password?</Link>
          </div>

          {/* Login Button */}
          <button type="submit" class="btn">Login</button>
          
          <div class="link">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </main>
  )
}

export default Login