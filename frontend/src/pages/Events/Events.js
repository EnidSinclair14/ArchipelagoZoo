import React, { useState, useEffect } from 'react'
import HeaderLogo from '../../components/header/HeaderLogo'
import { Footer } from '../../components/footer/Footer'
import '../../styles/Events/events.css' // Style
import '../../styles/font/lexend.css'
import '../../styles/font/poppins.css'
import axios from 'axios'
import EventCard from '../../components/events/EventCard'


const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/events/event');
        setEvents(response.data)
      } catch (error) {
        console.error("Error fetching events:", error)
      }
    }

    fetchEvents()
  }, [])

  const eventListBgColor = ['rgb(185,178,202)', 'rgb(196,158,163)', 'rgb(166,202, 200)', 'rgb(194, 203, 161)', 'rgb(221,186, 126)', 'rgb(178,187,188)']

  const getRandomBgColor = arr => arr[Math.floor(Math.random() * arr.length)];


  return (
    <div className='w-full bg-primary overflow-x-hidden'>
      <main className='pr-20'>
        <HeaderLogo />
        <section className="hero-events">
          <div className="overlay"></div>
          <div className="hero-content">
            <h1>Events</h1>
            <p>Join us for special events that celebrate the magic of wildlife and nature.</p>
          </div>
        </section>

        {/* Event section */}
        <section className="event-schedule lexend-medium">
          <h2 className='pb-8'>Event Schedule</h2>
          {events.map((event) => (
            <EventCard 
              key={event.id}
              event_title={event.event_name}
              img_link={event.pict_link}
              date_start={event.date_time}
              date_end={event.event_date_ended}
              description={event.event_desc}
              bg_color={getRandomBgColor(eventListBgColor)}
              adult_ticket={event.adult_price}
              child_ticket={event.child_price}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Events