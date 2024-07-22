import React from 'react'
import '../../styles/Auth/auth.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <main className='login-bg'>
      <div class="wrapper">
        <form id="loginForm">
          <h1>Login</h1>
          <div class="input-box">
            <input type="text" id="username" placeholder="Username" required />
            <i class="bx bxs-user"></i>
          </div>

          <div class="input-box">
            <input type="password" id="password" placeholder="Password" required />
            <i class="bx bxs-lock-alt"></i>
          </div>

          <div class="remember-forget">
            <label><input type="checkbox" />Remember me</label>
            <Link to="/forgot_password">forget-password?</Link>
          </div>

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