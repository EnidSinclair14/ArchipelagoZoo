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
        <section className="hero-animal">
          <div className="overlay-animal"></div>
          <div className="hero-content-animal">
            <h1>Our Wildlife</h1>
            <p>Discover the fascinating world of wildlife through our extensive photo and video gallery.</p>
          </div>
        </section>

        <section className="animal-gallery">
          <h2 className="gallery-title lexend-semi-bold pb-10">Meet Our Family!</h2>
          <div className="gallery">
            {animals.map((animal) => (
              <AnimalCard animal={animal} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Animals
