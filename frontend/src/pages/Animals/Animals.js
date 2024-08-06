import React, { useEffect, useState } from 'react'
import '../../styles/Animals/animals.css'
import HeaderLogo from '../../components/header/HeaderLogo'
import { Footer } from '../../components/footer/Footer'
import axios from 'axios'
import AnimalCard from '../../components/animal/AnimalCard'

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/animals/animal');
        setAnimals(response.data);
      } catch (error) {
        console.error('Error fetching animals:', error);
      }
    };

    fetchAnimals();
  }, []);

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
            {animals.map((animal) => (
              <AnimalCard animal={animal} />
              // <AnimalCard key={animal.id} img_link={animal.img_link} animalName={animal.name} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Animals
