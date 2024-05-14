import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonial/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'

const App = () => {
  const [playState,setPlayState]=useState(false);
 
  return (
  
    <div>
      <Navbar/>
      <Hero/>
      <Title title='OUR PROGRAM' subtitle='What we offer'/>
      <Programs/>
     <About play={playState} set={setPlayState}/>
     <Title title='GALLERY' subtitle='Campus Photos'/>
     <Campus/>
     <Testimonials/>
     <Title title='Contact Us' subtitle='Get in Touch'/>
     <Contact />
     <Footer/>
    <Video play={playState} set={setPlayState} />
    </div>
  )
}

export default App
