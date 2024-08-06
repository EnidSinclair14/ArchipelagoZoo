import React from 'react'
import '../../styles/Animals/animals.css'
import { Link } from 'react-router-dom'

const AnimalCard = ({ animal }) => {
  return (
    <div class="gallery-item" data-category="">
      <img src={animal.img_link} alt={animal.name} />
      <div class="animal-info">
        <h3>{animal.name}</h3>
        {/* <p>Mammals</p> */}
        <Link to={`/animals/${animal.name}`} class="detail-link">Selengkapnya</Link>
      </div>
    </div>
  )
}

export default AnimalCard