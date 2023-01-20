import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineBook} from 'react-icons/ai'
import {BsChatDots} from 'react-icons/bs'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    // nav tag is a html5 semantic tag
    <nav>
      {/* href="#" refers to top of page */}
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a> 

      {/* #<section> refers to id of the section */}
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a> 
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook/></a> 
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsChatDots/></a> 
    </nav>
  )
}

export default Nav