import React from 'react'
import '../../styles/BookTicket/bookTicket.css' // Main style


const PurchaseTicket = () => {
  const list_style = {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '14px',
  }

  const input_style = {
    border: '1px solid #ddd',
    padding: '5px',
    borderRadius: '5px'
  }

  return (
    <div class="flex justify-between border-b border-b-border_color  p-5 my-2">
      <span className='poppins-medium'>Animal Safari</span>
      <ul className='poppins-regular list-none flex justify-between gap-12 w-fit'>

        <li style={list_style}>Date <input className="" style={input_style} type='date' required /></li>
        <li style={list_style}>Adult <input className="w-14" style={input_style} type='number' required placeholder='0'/></li>
        <li style={list_style}>Child <input className="w-14" style={input_style} type='number' required placeholder='0'/></li>


      </ul>
    </div>
  )
}

export default PurchaseTicket