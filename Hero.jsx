import React from 'react'
import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='containerr container'>
      <div className="hero-text">
      <h1>We Ensure Better Education For Better World</h1>
      <p>Our cutting edge curriculum is designed to empower students with tha knowledge,
        skills,and experiences needed to excel in the needed to xcel in the dynamic field of education
      </p>
      <button className='btn'>Explore More <img src={darkArrow} alt=''/></button>
      </div>
    </div>
  )
}

export default Hero
