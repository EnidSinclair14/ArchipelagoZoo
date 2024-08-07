import React from 'react';
import '../../styles/BookTicket/bookTicket.css'; // Main style

const PurchaseTicket = ({ ticket, onRemove, onQuantityChange }) => {
  const list_style = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
  };

  const input_style = {
    border: '1px solid #ddd',
    padding: '5px',
    borderRadius: '5px'
  };

  return (
    <div className="flex justify-between border-b border-b-border_color p-5 my-2">
      <span className='poppins-medium'>{ticket.event_name}</span>
      <ul className='poppins-regular list-none flex justify-between gap-12 w-fit'>
        <li style={list_style}>Date <input className="" style={input_style} type='date' required /></li>
        <li style={list_style}>
          Adult
          <input
            className="w-14"
            style={input_style}
            type='number'
            required
            placeholder='0'
            value={ticket.quantity.adult}
            onChange={(e) => onQuantityChange(ticket.uuid, 'adult', e.target.value)}
          />
        </li>
        <li style={list_style}>
          Child
          <input
            className="w-14"
            style={input_style}
            type='number'
            required
            placeholder='0'
            value={ticket.quantity.child}
            onChange={(e) => onQuantityChange(ticket.uuid, 'child', e.target.value)}
          />
        </li>
        <li style={list_style}>
          Total
          <p>{(ticket.adult_price * ticket.quantity.adult) + (ticket.child_price * ticket.quantity.child)}</p>
        </li>
      </ul>
      <button className="remove-btn" onClick={onRemove}>Remove</button>
    </div>
  );
};

export default PurchaseTicket;

