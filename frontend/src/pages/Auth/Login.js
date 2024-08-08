import '../../styles/Auth/auth.css' // styling
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = ({ setIsLoggedIn, setUser, setUserId }) => {
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
      setUserId(response.data.user_id); // get user id from backend

      setIsLoggedIn(true)
      setUser(username)
      navigate('/')
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };


  return (
    <main className='login-bg'>
      <div className="wrapper">
        <form id="loginForm" onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" id="username" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
            <i className="bx bxs-user"></i>
          </div>

          <div className="input-box">
            <input type="password" id="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <div className="remember-forget">
            {/* <label><input type="checkbox" />Remember me</label> */}
            <Link to="/forgot_password">forget-password?</Link>
          </div>

          {/* Login Button */}
          <button type="submit" className="btn">Login</button>
          
          <div className="link">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </main>
  )
}

export default Login