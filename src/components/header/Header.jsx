import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      {/* uses the general container class in index.css */}
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1> Lian Kok Hai</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        {/* use a self closing tag */}
        <CTA />

      </div>
    </header>
  )
}

export default Header