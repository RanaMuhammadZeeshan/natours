import React from 'react'

import backgroundImageHero from '../../assets/img/hero.jpg'
import logoWhite from '../../assets/img/logo-white.png'

import './header.css'

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(
          to right bottom,
          rgba(126,213,111,0.8),
          rgba(40,180,131,0.8)),
          url(${backgroundImageHero})`,
      }}
      className="header"
    >
      <div className="logo-box">
        <img src={logoWhite} alt="company logo" className="logo" />
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
      </div>
    </header>
  )
}

export default Header
