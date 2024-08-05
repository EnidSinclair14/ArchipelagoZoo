import React from 'react'
import '../../styles/Animals/animals.css'

const AnimalCard = ({img_link, animalName}) => {
  return (
    <div class="gallery-item" data-category="mammals">
      <img src={img_link} alt={animalName} />
      <div class="animal-info">
        <h3>{animalName}</h3>
        {/* <p>Mammals</p> */}
        <a href="../Detail Animals/White_Tiger.html" class="detail-link">Selengkapnya</a>
      </div>
    </div>
  )
}

export default AnimalCard