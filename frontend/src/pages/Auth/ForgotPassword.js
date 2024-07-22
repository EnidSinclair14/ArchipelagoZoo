import React from 'react'
import '../../styles/Auth/auth.css'
import { Link } from 'react-router-dom'


const ForgotPassword = () => {
  return (
    <main className='forgot-bg'>
      <div class="wrapper">
      <form action="">
        <h1>Forgot Password</h1>

        <div class="input-box">
          <input type="text" placeholder="Email Address" required />
          <i class="bx bx-envelope"></i>
        </div>

        <div class="input-box">
          <input type="text" placeholder="New Password" required />
          <i class="bx bxs-lock-alt"></i>
        </div>

        <div class="input-box">
          <input type="text" placeholder="Confirm Password" required />
          <i class="bx bxs-lock-alt"></i>
        </div>

        <button type="submit" class="btn">Reset Password</button>

        <div class="link">
          <p>Remember your password? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </div>
    </main>
  )
}

export default ForgotPassword