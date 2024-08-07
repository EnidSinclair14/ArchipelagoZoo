import React from 'react';
import '../../styles/BookTicket/bookTicket.css'; // Main style

const TicketList = ({ event, onAddTicket }) => {
  const startDate = new Date(event.date_time).toLocaleDateString();
  const endDate = new Date(event.event_date_ended).toLocaleDateString();

  return (
    <div className="ticket-option">
      <div className='ticket-option-inner flex flex-col'>
        <p>{event.event_name}</p>
        <span>Start Date: {startDate}</span>
        <span>End Date: {endDate}</span>
        <span>Adult: Rp {event.adult_price}</span>
        <span>Child: Rp {event.child_price}</span>
      </div>
      <button className="add-btn" onClick={() => onAddTicket(event)}>+</button>
    </div>
  );
};

export default TicketList;
