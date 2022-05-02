import React from 'react'

import backgroundImageHero from '../../assets/img/hero.jpg'
import logoWhite from '../../assets/img/logo-white.png'
import LinkButton from '../LinkButton/LinkButton'

import './header.scss'

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
      <div className="header__logo-box">
        <img src={logoWhite} alt="company logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <LinkButton
          linkTo={'#'}
          classNames="btn--white btn--animated"
          content="Discover our tours"
        />
      </div>
    </header>
  )
}

export default Header
