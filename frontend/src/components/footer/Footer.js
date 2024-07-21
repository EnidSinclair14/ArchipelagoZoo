import React from 'react'
import '../../styles/Footer/footer.css'

export const Footer = () => {
  return (
    <footer className='pr-16'>
      <div class="footer-content">
        <div class="footer-section address">
          <h3>Address</h3>
          <p>Jl. Meranti No. 14 Kalasey, Papua Barat, Indonesia</p>
        </div>
        <div class="footer-section contact">
          <h3>Contact Us</h3>
          <p>archipelagoZoo@gmail.com</p>
          <p>+6287777777777</p>
        </div>
        <div class="footer-section links">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Activities</a></li>
            <li><a href="#">Animals</a></li>
            <li><a href="#">Eat & Drink</a></li>
            <li><a href="#">Zoo Information</a></li>
          </ul>
        </div>
        <div class="footer-section hours">
          <h3>Operational Hours</h3>
          <p>We're open every day of the year.</p>
          <p>Opening Time: <span class="highlight">09:00 am</span></p>
          <p>Closing Time: <span class="highlight">05:00 pm</span></p>
          <p>Last Entry: <span class="highlight">04:00 pm</span></p>
          <p>Ticketing: 09:00 am - 4:30 pm</p>
        </div>
      </div>
      <div class="footer-bottom pr-12">
        <p>&copy; 2024 Archipelago Zoo. All rights reserved.</p>
        <div class="socials">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">TikTok</a>
        </div>
      </div>
    </footer>
  )
}
