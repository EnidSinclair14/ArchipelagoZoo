import React, { useEffect } from 'react'
import '../../styles/Footer/footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {

    // Function to reset scroll position
    const resetScrollPosition = () => {
      window.scrollTo(0, 0)
    }
  
    // Use useEffect to reset scroll when navigating to the page
    useEffect(() => {
      resetScrollPosition()
    }, [])

  return (
    <footer className='pr-16'>
      <div className="footer-content">
        <div className="footer-section address">
          <h3>Address</h3>
          <p>Jl. Meranti No. 14 Kalasey, Papua Barat, Indonesia</p>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>archipelagoZoo@gmail.com</p>
          <p>+6287777777777</p>
        </div>
        <div className="footer-section links">
          <h3>Useful Links</h3>
          <ul>
          <li><Link to='/' className='list_hover' onClick={() => { resetScrollPosition() }}>Home</Link></li>
            <li><Link to='/events' className='list_hover' onClick={() => { resetScrollPosition() }}>Events</Link></li>
            <li><Link to='/activities' className='list_hover' onClick={() => { resetScrollPosition() }}>Activities</Link></li>
            <li><Link to='/animals' className='list_hover' onClick={() => { resetScrollPosition() }}>Animals</Link></li>
            <li><Link to='/eat_and_drink' className='list_hover' onClick={() => { resetScrollPosition() }}>Eat & Drink</Link></li>
          </ul>
        </div>
        <div className="footer-section hours">
          <h3>Operational Hours</h3>
          <p>We're open every day of the year.</p>
          <p>Opening Time: <span className="highlight">09:00 am</span></p>
          <p>Closing Time: <span className="highlight">05:00 pm</span></p>
          <p>Last Entry: <span className="highlight">04:00 pm</span></p>
          <p>Ticketing: <span className='highlight'>09:00 am - 4:30 pm</span></p>
        </div>
      </div>
      <div className="footer-bottom pr-12">
        <p>&copy; 2024 Archipelago Zoo. All rights reserved.</p>
        <div className="socials">
          <Link to="https://www.instagram.com/">Instagram</Link>
          <Link to="https://www.facebook.com/">Facebook</Link>
          <Link to="https://x.com/">Twitter</Link>
          <Link to="https://www.tiktok.com/">TikTok</Link>
        </div>
      </div>
    </footer>
  )
}
