import React from 'react'
import '../../styles/FoodAndDrink/foodAndDrink.css' // style
import HeaderLogo from '../../components/header/HeaderLogo'
import { Footer } from '../../components/footer/Footer'


const FoodAndDrink = () => {
  return (
    <div className='w-full bg-primary overflow-x-hidden pr-20'>
      <HeaderLogo/>
      <main className='main-fnd'>
        <section className="hero-fnd">
          <div className="overlay-fnd"></div>
          <div className="hero-content-fnd">
            <h1>Eat and Drink</h1>
            <p>Discover culinary delights that will satisfy your cravings during your visit.</p>
          </div>
        </section>
        <section className="info-fnd">
          <h2>Archipelago Restaurant</h2>
          <p>Enjoy a refreshing break at our Eat and Drink area in the zoo, with delicious food and beverage options to cater to your taste buds after exploring the amazing natural beauty and wildlife.</p>
          <button class="view-menu-btn-fnd mb-14">View Our Menu</button>

          <div className="cards-fnd">
            <div className="card-fnd">
              <img src="https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Pizza" />
            </div>
            <div className="card-fnd">
              <img src="https://images.unsplash.com/photo-1624772413714-7e1ea3fbfeaf?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hotdog" />
            </div>
            <div className="card-fnd">
              <img src="https://images.unsplash.com/photo-1541363278861-e218a998284f?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Popcorn" />
            </div>
            <div className="card-fnd">
              <img src="https://images.unsplash.com/photo-1598679253544-2c97992403ea?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Fries" className='w-full h-auto object-cover'/>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default FoodAndDrink