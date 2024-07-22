import React from 'react'
import '../../styles/Auth/auth.css'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <main className='register-bg'>
      <div class="wrapper">
        <form action="">
          <h1>Register</h1>

          <div class="input-box">
            <input type="text" placeholder="Username" required />
            <i class="bx bxs-user"></i>
          </div>

          <div class="input-box">
            <input type="text" placeholder="Email" required />
            <i class="bx bx-envelope"></i>
          </div>

          <div class="input-box">
            <input type="text" placeholder="Password" required />
            <i class="bx bxs-lock-alt"></i>
          </div>

          <div class="input-box">
            <input type="text" placeholder="Confirm Password" required />
            <i class="bx bxs-lock-alt"></i>
          </div>

          <button type="submit" class="btn">Create New Account</button>

          <div class="link">
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
        </form>
      </div>
    </main>
  )
}

export default Register