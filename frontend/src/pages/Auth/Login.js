import React, { useState } from 'react'
import '../../styles/Auth/auth.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/auth/login', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      // const data = await response.json();
      // localStorage.setItem('access_token', data.access_token);
      setIsLoggedIn(true); // user already login
      navigate('/'); // navigate to home
    } else {
      alert('Login failed. Please check your credentials.');
    }

  }


  return (
    <main className='login-bg'>
      <div class="wrapper">
        <form id="loginForm" onSubmit={() => handleSubmit()}>
          <h1>Login</h1>
          <div class="input-box">
            <input type="text" id="username" placeholder="Username" required onChange={(e) => setUsername(e.target.value)}/>
            <i class="bx bxs-user"></i>
          </div>

          <div class="input-box">
            <input type="password" id="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
            <i class="bx bxs-lock-alt"></i>
          </div>

          {/* <div class="remember-forget">
            <label><input type="checkbox" />Remember me</label>
            <Link to="/forgot_password">forget-password?</Link>
          </div> */}

          {/* Login Button */}
          <button type="submit" class="btn">Login</button>

          <div class="link">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Login