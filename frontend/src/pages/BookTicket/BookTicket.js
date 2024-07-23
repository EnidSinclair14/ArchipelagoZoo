import React from 'react'
import '../../styles/BookTicket/bookTicket.css'
import HeaderLogo from '../../components/header/HeaderLogo'
import '../../styles/font/lexend.css'
import '../../styles/font/poppins.css'

const BookTicket = () => {
  return (
    <div className='w-full bg-primary overflow-x-hidden'>
      <main className='pr-20'>
        <HeaderLogo />
        <section class="hero-book">
          <div class="overlay-book"></div>
          <div class="hero-content-book">
            <h1>Booking Ticketing</h1>
            <p>Secure your adventure today! Purchase tickets online for a seamless and enjoyable visit to our zoo.</p>
          </div>
        </section>
        <div class="container-book">
          <h1 className='lexend-semi-bold text-3xl p-5'>Online Ticket Booking</h1>
          <div class="ticket-options">
            <div class="ticket-option">
              <p>Animal Safari</p>
              <span>Rp 100.000</span>
              <button class="add-btn">+</button>
            </div>
            <div class="ticket-option">
              <p>Animal Show</p>
              <span>Rp 100.000</span>
              <button class="add-btn">+</button>
            </div>
            <div class="ticket-option">
              <p>Sea Safari</p>
              <span>Rp 100.000</span>
              <button class="add-btn">+</button>
            </div>
            <div class="ticket-option">
              <p>Reptile Exploration</p>
              <span>Rp 100.000</span>
              <button class="add-btn">+</button>
            </div>
          </div>
          <div class="price-details">
            <h2 className='lexend-medium text-2xl'>Price Details</h2>
            <div class="details">
              <div class="detail-row">

                <div>
                  <label>Date</label>
                  <input type="text" value="10 July 2024" readonly />
                </div>

                <div>
                  <label>Adult</label>
                  <input type="number" value="2" readonly />
                </div>
                <div>
                  <label>Child</label>
                  <input type="number" value="2" readonly />
                </div>

              </div>

              {/* purchase details */}
              <div class="detail-summary-container">
                <span>Animal Safari</span>
                <div className='detail-summary poppins-medium'>
                  <span>Adult x2</span>
                  <span>Child x2</span>
                </div>
              </div>
              <div class="detail-row">
                <span>Total</span>
                <span>Rp 400.000</span>
              </div>
            </div>
            <button class="book-btn">Book Now</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BookTicket