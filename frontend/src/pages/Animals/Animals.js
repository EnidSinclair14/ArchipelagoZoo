import React from 'react'
import '../../styles/Animals/animals.css'
import HeaderLogo from '../../components/header/HeaderLogo'
import { Footer } from '../../components/footer/Footer'

const Animals = () => {
  return (
    <div className='w-full bg-primary overflow-y-hidden overflow-x-hidden'>
      <main className='pr-20'>
        <HeaderLogo />
        <section class="hero-animal">
          <div class="overlay-animal"></div>
          <div class="hero-content-animal">
            <h1>Our Wildlife</h1>
            <p>Discover the fascinating world of wildlife through our extensive photo and video gallery.</p>
          </div>
        </section>

        <section class="animal-gallery">
          <h2 class="gallery-title lexend-semi-bold">Meet Our Family!</h2>
          <nav class="filter-nav">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="mammals">Mammals</button>
            <button class="filter-btn" data-filter="reptiles">Reptiles</button>
            <button class="filter-btn" data-filter="birds">Birds</button>
            <button class="filter-btn" data-filter="aquatic">Aquatic</button>
          </nav>
          <div class="gallery">
            <div class="gallery-item" data-category="mammals">
              <img src="https://images.unsplash.com/photo-1606365897364-7651dee063da?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="White Tiger" />
              <div class="animal-info">
                <h3>White Tiger</h3>
                <p>Mammals</p>
                <a href="../Detail Animals/White_Tiger.html" class="detail-link">Selengkapnya</a>
              </div>
            </div>
            <div class="gallery-item" data-category="mammals">
              <img src="https://images.unsplash.com/flagged/photo-1557650454-65194af63bf9?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rhino" />
              <div class="animal-info">
                <h3>Rhino</h3>
                <p>Mammals</p>
                <a href="../Detail Animals/Rhino.html" class="detail-link">Selengkapnya</a>
              </div>
            </div>
            <div class="gallery-item" data-category="aquatic">
              <img src="https://plus.unsplash.com/premium_photo-1709565677032-d6d11e27046a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Stingray" />
              <div class="animal-info">
                <h3>Stingray</h3>
                <p>Aquatic</p>
                <a href="../Detail Animals/stingray.html" class="detail-link">Selengkapnya</a>
              </div>
            </div>
            <div class="gallery-item" data-category="reptiles">
              <img src="https://images.unsplash.com/photo-1601536292433-5cfadb6eeabf?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bearded Dragon" />
              <div class="animal-info">
                <h3>Bearded Dragon</h3>
                <p>Reptiles</p>
                <a href="../Detail Animals/bearded_dragon.html" class="detail-link">Selengkapnya</a>
              </div>
            </div>
            <div class="gallery-item" data-category="birds">
              <img src="https://images.unsplash.com/photo-1612302068078-ec456c5dacae?q=80&w=2562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bald Eagle" />
              <div class="animal-info">
                <h3>Bald Eagle</h3>
                <p>Birds</p>
                <a href="../Detail Animals/bald_Eagle.html" class="detail-link">Selengkapnya</a>
              </div>
            </div>
            <div class="gallery-item" data-category="mammals">
              <img src="https://images.unsplash.com/photo-1591786232470-1fd2adbe6b42?q=80&w=2760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hippopotamus" />
              <div class="animal-info">
                <h3>Hippopotamus</h3>
                <p>Mammals</p>
                <a href="../Detail Animals/Hippopotamus.html" class="detail-link">Selengkapnya</a>
              </div>
            </div>
            <div class="gallery-item" data-category="aquatic">
              <img src="https://images.unsplash.com/photo-1630771072853-dc3d03ba5da3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Lion Fish" />
              <div class="animal-info">
                <h3>Lion Fish</h3>
                <p>Aquatic</p>
                <a href="../Detail Animals/Lion_Fish.html" class="detail-link">Selengkapnya</a>
              </div>
            </div>
            <div class="gallery-item" data-category="aquatic">
              <img src="https://images.unsplash.com/photo-1544552866-d3ed42536cfd?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Clown Fish" />
              <div class="animal-info">
                <h3>Clown Fish</h3>
                <p>Aquatic</p>
                <a href="../Detail Animals/Clown_Fish.html" class="detail-link">Selengkapnya</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Animals