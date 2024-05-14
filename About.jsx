import React from 'react'
import './About.css'
import play_icon from "../../assets/play-icon.png"
import about from "../../assets/about.png"
const About = ({play,set}) => {
  console.log('play'+ play);
  return (
    <div className='about container'>
      <div className="about-left">
      <img src={about} className='about-img' alt=''/>
        <img src={play_icon} className='play' alt='' onClick={()=>{set(true)}}/>
      </div>
      <div className="about-right">
       <h3>ABOUT UNIVERSITY</h3>
       <h2>Nuturing Tommorrow's Leaders Today</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta rerum facere, ex dolorem doloremque earum 
        libero veritatis omnis voluptatibus sapiente. Cum, rem! Expedita dignissimos, fugiat officiis nobis dolores
         in dolor.</p>
         <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ullam eos maiores perspiciatis consequuntur est cum non, animi ducimus distinctio,
             natus repudiandae. Commodi tenetur autem illo, laborum reprehenderit asperiores itaque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Labore explicabo, rerum quo laboriosam dolorum, repellat excepturi ipsum consectetur,
              impedit ex at aliquid molestias dolor provident eos vitae quisquam eveniet cupiditate!
         </p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing voluptatem error maiores facilis vero aut quam, atque suscipit in consequuntur? Ex, ea.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Sunt, adipisci animi!
         </p>
      </div>
    </div>
    
  )
}

export default About
