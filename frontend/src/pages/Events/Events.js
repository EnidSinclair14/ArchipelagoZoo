import React from 'react'
import HeaderLogo from '../../components/header/HeaderLogo'
import { Footer } from '../../components/footer/Footer'
import '../../styles/Events/events.css'
import '../../styles/font/lexend.css'
import '../../styles/font/poppins.css'

const Events = () => {
  return (
    <div className='w-full bg-primary overflow-x-hidden'>
      <main className='pr-20'>
        <HeaderLogo/>
        <section class="hero-events">
          <div class="overlay"></div>
          <div class="hero-content">
            <h1>Events</h1>
            <p>Join us for special events that celebrate the magic of wildlife and nature.</p>
          </div>
        </section>
        <section class="event-calendar">
          <h2>Event Calendar</h2>
          <div class="calendar">
            <div class="calendar-header">
              <span>Event Calendar</span>
            </div>
            <div class="calendar-body">
              <table>
                <thead>
                  <tr>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section class="event-schedule poppins-regular">
          <h2>Event Schedule</h2>
          <div class="event">
            <img src="https://images.unsplash.com/photo-1518013895739-f7b24b50adf9?q=80&w=2304&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Elephant Feeding"/>
              <div class="event-details">
                <h3>Elephant Feeding</h3>
                <p>Date: July 10 2024</p>
                <p>Time: 10:00AM - 15:00PM</p>
                <p>The elephant feeding attraction allows visitors to interact directly with the elephants, feeding them food such as fruits and vegetables while learning about the feeding habits, behavior and conservation of these large animals from experienced guides.</p>
              </div>
          </div>
          <div class="event poppins-regular">
            <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Night Safari"/>
              <div class="event-details">
                <h3>Night Safari</h3>
                <p>Date: July 10 2024</p>
                <p>Time: 17:00AM - 21:00PM</p>
                <p>The night safari attraction takes visitors on a unique adventure in the zoo after sunset, providing the opportunity to see nocturnal animals in their natural activity with guides providing educational information along the way.</p>
              </div>
          </div>
          <div class="event poppins-regular">
            <img src="https://images.unsplash.com/photo-1594768816441-1dd241ffaa67?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Night Safari"/>
              <div class="event-details">
                <h3>Night Safari</h3>
                <p>Date: July 10 2024</p>
                <p>Time: 17:00AM - 21:00PM</p>
                <p>The night safari attraction takes visitors on a unique adventure in the zoo after sunset, providing the opportunity to see nocturnal animals in their natural activity with guides providing educational information along the way.</p>
              </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Events