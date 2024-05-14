import React from 'react'
import './Title.css'
const Title = (props) => {
  return (
    <div className='title container'>
        <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
      
    </div>
  )
}

export default Title
