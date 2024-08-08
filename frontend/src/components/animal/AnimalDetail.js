import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../styles/Animals/animalDetail.css'
import '../../styles/font/poppins.css'
import axios from 'axios'

const AnimalDetail = () => {

  const { animalName } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5000/animals/animal/${animalName}`);
        setAnimal(response.data);
      } catch (error) {
        console.error('Error fetching animal:', error);
      }
    };

    fetchAnimal();
  }, [animalName]);

  if (!animal) {
    return <div>Loading...</div>;
  }

  const heroBackground = {
    background: `url(${animal.img_link})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  return (
    <main className='main-animal-details poppins-regular'>
      <section className="hero-animal-detail" style={heroBackground}>
        <div className="overlay-animal-detail"></div>
        <div className="hero-content-animal-detail">
          <h1 className='poppins-bold'>{animal.name}</h1>
        </div>
      </section>

      <section className="content-animal-detail">
        <div className="image-animal-detail">
          <img src={animal.img_link} alt={animal.name} />
        </div>
        <div className="info-animal-detail">
          <div className="info-header-animal-detail">
            <div>
              {/* animal name */}
              <h2>Name</h2>
              <p>{animal.name}</p>
            </div>
            <div>
              {/* scientific name */}
              <h2>Scientific Name</h2>
              <p>{animal.scientific_name}</p>
            </div>
            <div>
              <h2>Habitats</h2>
              <p>{animal.habitats}</p>
            </div>
            <div>
              <h2>Diets</h2>
              <p>{animal.diets}</p>
            </div>
          </div>
          <div className="info-content-animal-detail">
            {/* general description */}
            <h3>General Description</h3>
            <p className='pb-5'>{animal.general_desc}</p>
            {/* behavior */}
            <h3>Behavior</h3>
            <p className='pb-5'>{animal.behavior}</p>
            {/* size and weight */}
            <h3>Size and Weight</h3>
            <p className='pb-5'>{animal.size_weight}</p>
            {/* conversation status */}
            <h3>Conservation Status</h3>
            <p className='pb-5'>{animal.conversation_stats}</p>
            <h3>Conservation Efforts</h3>
            <p className='pb-5'>{animal.conversation_efforts}</p>
          </div>
          <div className="info-species-animal-detail">
            {/* reproduction */}
            <h3>Reproduction</h3>
            <p className='pb-5'>{animal.reproduction}</p>
          </div>
          <div className="info-fact-animal-detail">
            <p className='text-left'>
              <strong className='poppins-bold'>Fun Fact: <br /></strong >{animal.funfact}
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}

export default AnimalDetail