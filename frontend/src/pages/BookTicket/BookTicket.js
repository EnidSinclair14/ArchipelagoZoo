import React, { useState, useEffect } from 'react';
import '../../styles/BookTicket/bookTicket.css'; // Main style
import HeaderLogo from '../../components/header/HeaderLogo';
import '../../styles/font/lexend.css';
import '../../styles/font/poppins.css';
import TicketList from '../../components/ticket/TicketList';
import PurchaseTicket from '../../components/ticket/PurchaseTicket';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const BookTicket = ({ userId }) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/events/event');
        const currentDate = new Date();

        // Filter out past events
        const upcomingEvents = response.data.filter(event => {
          const eventEndDate = new Date(event.event_date_ended);
          return eventEndDate >= currentDate;
        });

        console.log('Fetched Events:', response.data); 
        console.log('Upcoming Events:', upcomingEvents); 

        setEvents(upcomingEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleAddTicket = (event) => {
    setSelectedTickets([...selectedTickets, { ...event, uuid: uuidv4(), quantity: { adult: 0, child: 0 } }]);
  };

  const handleRemoveTicket = (ticketToRemove) => {
    setSelectedTickets(selectedTickets.filter(ticket => ticket.uuid !== ticketToRemove.uuid));
  };

  const handleQuantityChange = (ticketUuid, type, value) => {
    const quantity = Math.max(0, parseInt(value, 10) || 0); 

    setSelectedTickets(selectedTickets.map(ticket =>
      ticket.uuid === ticketUuid ? { ...ticket, quantity: { ...ticket.quantity, [type]: quantity } } : ticket
    ));
  };

  const handleSubmit = async () => {
    if (!userId) {
      alert('Please log in before booking tickets.');
      navigate('/login');
      return;
    }

    const ticketsToSend = selectedTickets.map(ticket => ({
      user_id: userId,
      event_id: ticket.id,
      quantity_adult: ticket.quantity.adult,
      quantity_children: ticket.quantity.child,
      total_price: (ticket.adult_price * ticket.quantity.adult) + (ticket.child_price * ticket.quantity.child),
    }));

    try {
      const response = await axios.post('http://127.0.0.1:5000/booking/book', {
        tickets: ticketsToSend
      });

      alert(response.data.message);
      setSelectedTickets([])
    } catch (error) {
      console.error('Error booking tickets:', error);
      alert('Booking failed!');
    }
  };

  return (
    <div className='w-full bg-primary overflow-x-hidden'>
      <main className='pr-20'>
        <HeaderLogo />
        <section className="hero-book">
          <div className="overlay-book"></div>
          <div className="hero-content-book">
            <h1>Booking Ticketing</h1>
            <p>Secure your adventure today! Purchase tickets online for a seamless and enjoyable visit to our zoo.</p>
          </div>
        </section>
        <div className="container-book">
          <h1 className='lexend-semi-bold text-3xl p-5'>Online Ticket Booking</h1>

          <div className="ticket-options">
            {events.map(event => (
              <TicketList key={event.id} event={event} onAddTicket={handleAddTicket} />
            ))}
          </div>

          <div className="price-details">
            <h2 className='lexend-medium text-2xl'>Price Details</h2>
            <div className="details">
              {selectedTickets.map(ticket => (
                <PurchaseTicket
                  key={ticket.uuid}
                  ticket={ticket}
                  onRemove={() => handleRemoveTicket(ticket)}
                  onQuantityChange={handleQuantityChange}
                />
              ))}

              <div className="detail-row px-5">
                <span>Total</span>
                <span>
                  Rp {selectedTickets.reduce((total, ticket) =>
                    total + (ticket.adult_price * ticket.quantity.adult) + (ticket.child_price * ticket.quantity.child), 0)}
                </span>
              </div>
            </div>
            <button className="book-btn" onClick={handleSubmit}>Book Now</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookTicket;
