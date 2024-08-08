import React from 'react'
import HeaderLogo from '../../components/header/HeaderLogo'
import { Footer } from '../../components/footer/Footer'
import '../../styles/Activity/activity.css'

const Activity = () => {
  return (
    <div className='w-full bg-primary'>
      <HeaderLogo/>
      <main className='main-activity pr-20'>
        <section className="hero-activity">
          <div className="overlay-activity"></div>
          <div className="hero-content-activity">
            <h1>Activity</h1>
            <p>Explore a variety of engaging activities and experiences throughout the zoo.</p>
          </div>
        </section>
        <section className="info-activity">
          <h2>Available Activities</h2>
          <p>Explore the diverse world of animals at our amazing zoo! Discover an unforgettable experience with your family and friends.</p>
          <div className="cards-activity">
            <div className="card-activity">
              <img src="https://plus.unsplash.com/premium_photo-1682091968155-3828011a883e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Animal feeding"/>
            </div>
            <div className="card-activity">
              <img src="https://images.unsplash.com/photo-1616895727759-dd84a2690433?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Zoo tour"/>
            </div>
            <div className="card-activity">
              <img src="https://images.unsplash.com/photo-1719697466745-7b8d5c480572?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Animal show"/>
            </div>
            <div className="card-activity">
              <img src="https://images.unsplash.com/photo-1542332606-b2d1c52a6c33?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Night zoo"/>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default Activity