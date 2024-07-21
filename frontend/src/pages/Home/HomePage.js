import React from 'react'
import HeaderLogo from '../../components/header/HeaderLogo'
import { Footer } from '../../components/footer/Footer'
import '../../styles/Home/main.css'  // main css
import '../../styles/font/lexend.css' // font family

const HomePage = () => {
  return (
    <div className='w-full bg-primary overflow-x-hidden'>

      <main className='bg-primary pr-20'>
        <HeaderLogo />
        <section class="hero lexend-bold">
          <div class="overlay"></div>
          <div class="hero-content">
            <h1>DISCOVER THE WILD</h1>
            <p>Unveil the wonders of nature and encounter wildlife from around the globe at our zoo.</p>
          </div>
        </section>

        <section class="info">
          <h2>A Place to Learn & Enjoy Nature</h2>
          <div class="cards">
            <div class="card">
              <img src="https://plus.unsplash.com/premium_photo-1682091968155-3828011a883e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Feed The Animals" />
              <h3>Feed The Animals</h3>
              <p>Animal feeding allows visitors to interact directly with the animals, providing an educational and fun experience about their natural feeding habits and behaviors.</p>
            </div>
            <div class="card">
              <img src="https://images.unsplash.com/photo-1616895727759-dd84a2690433?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Zoo Tour" />
              <h3>Zoo Tour</h3>
              <p>The zoo gives visitors the opportunity to see various animals up close in an environment that resembles their natural habitat, while enjoying informative explanations from our professional tour guide.</p>
            </div>
            <div class="card">
              <img src="https://images.unsplash.com/photo-1532639766504-227d1fd0f2ff?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Animal Show" />
              <h3>Animal Show</h3>
              <p>Animal shows feature trained animals performing a variety of exciting stunts, while educating visitors about natural behavior and the importance of conservation.</p>
            </div>
          </div>
          <h2>Various Animal Species</h2>
          <div class="cards">
            <div class="card">
              <img src="https://images.unsplash.com/photo-1718312424234-572615e37ead?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Birds" />
              <h3>Birds</h3>
              <p>The zoo's birdlife area showcases a variety of exotic bird species in stunning colors, providing insight into their habits and habitats.</p>
            </div>
            <div class="card">
              <img src="https://images.unsplash.com/photo-1514907401407-a4bbd5aeb55e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sea Aquarium" />
              <h3>Sea Aquarium</h3>
              <p>The sea animal aquarium showcases a variety of underwater life, offering a spectacular and educational view of the marine ecosystem and the importance of preserving its habitat.</p>
            </div>
            <div class="card">
              <img src="https://images.unsplash.com/photo-1603676554283-efe0116cbfa6?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Reptile" />
              <h3>Reptile</h3>
              <p>The reptile animal zone features a variety of exotic reptile species, providing an insight into their habits, habitats and the importance of protecting these unique animals.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
