import React from 'react'
import '../../styles/Animals/animals.css'
import { Link } from 'react-router-dom'

const AnimalCard = ({ animal }) => {
  return (
    <div className="gallery-item" data-category="">
      <img src={animal.img_link} alt={animal.name} />
      <div className="animal-info">
        <h3>{animal.name}</h3>
        <Link to={`/animals/${animal.name}`} className="detail-link">Selengkapnya</Link>
      </div>
    </div>
  )
}

export default AnimalCard