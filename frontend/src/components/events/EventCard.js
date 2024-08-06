import React from 'react'
import '../../styles/font/poppins.css'
import '../../styles/Events/events.css' // Style


const EventCard = ({ event_title, img_link, date_start, date_end, description, bg_color, adult_ticket, child_ticket }) => {

  const styling = {
    backgroundColor: bg_color,
  }

  return (
    <div class="event gap-3" style={styling} >
      <img src={img_link} alt={event_title} className='min-w-64 max-w-64 min-h-64 max-h-64' />
      <div class="event-details">
        <h3 className='poppins-medium py-2'>{event_title}</h3>
        {/* date */}
        <p className='poppins-light flex items-center pb-2'>Date:
          <p className='poppins-medium ml-2'>{date_start} - {date_end}</p>
        </p>
        {/* description */}
        <p className='py-1 pt-2 poppins-regular text-md'>{description}</p>
        <br />
        {/* pricing */}
        <div className='w-full flex gap-12 text-sm '>
          <div className='poppins-regular'>
            <p>Adult Ticket Price</p>
            <p className='poppins-medium'>Rp. {adult_ticket}</p>
          </div>
          <div className='poppins-regular'>
            <p>Children Ticket Price</p>
            <p className='poppins-medium'>Rp. {child_ticket}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard