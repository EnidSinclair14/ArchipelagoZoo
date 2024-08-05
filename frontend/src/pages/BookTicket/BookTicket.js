import React from 'react'
import '../../styles/BookTicket/bookTicket.css' // Main style
import HeaderLogo from '../../components/header/HeaderLogo'
import '../../styles/font/lexend.css'
import '../../styles/font/poppins.css'
import PurchaseTicket from '../../components/ticket/PurchaseTicket'
import TicketList from '../../components/ticket/TicketList'

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
            <TicketList/>
            <TicketList/>
            <TicketList/>
            <TicketList/>
            <TicketList/>
            <TicketList/>
          </div>

          <div class="price-details">
            <h2 className='lexend-medium text-2xl'>Price Details</h2>
            <div class="details ">

              {/* purchase details */}
              <PurchaseTicket/>
              <PurchaseTicket/>
              <PurchaseTicket/>

              <div class="detail-row px-5">
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