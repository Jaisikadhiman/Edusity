import React, { useState ,useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu-icon.png'
const Navbar = () => {
  const[sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50?setSticky(true):setSticky(false)
    })
  },[])
const [mobilemenu ,setMobilemenu]=useState(false);
  const togglemenu=()=>{
mobilemenu?setMobilemenu(false):setMobilemenu(true);
  }
  return (
    <nav className={`container ${sticky?'dark':''}`}>
        <img src={logo} alt="" className='logo' /> 
        <ul className={mobilemenu?'':'menu-mobile'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li className='btn'><Link to='contact' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
        </ul>
        <img src={menu} alt="" className="menu" onClick={togglemenu}/>
    </nav>
  )
}

export default Navbar
