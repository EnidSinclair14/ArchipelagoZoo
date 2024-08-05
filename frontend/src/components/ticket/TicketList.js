import React from 'react'
import '../../styles/BookTicket/bookTicket.css' // Main style


const TicketList = () => {
  return (
    <div className="ticket-option">
      <div className='ticket-option-inner'>

        <p>Animal Safari</p>

        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quibusdam dolore aspernatur recusandae.</p> */}

        <span>Rp 100.000</span>
      </div>
      <button className="add-btn">+</button>
    </div>
  )
}

export default TicketList