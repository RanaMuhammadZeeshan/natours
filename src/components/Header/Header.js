import React from 'react'
import { Link } from 'react-router-dom'

import backgroundImageHero from '../../assets/img/hero.jpg'
import logoWhite from '../../assets/img/logo-white.png'
import LinkButton from '../LinkButton/LinkButton'

const Header = () => {
  const navigationList = [
    'About Natous',
    'Your benfits',
    'Popular tours',
    'Stories',
    'Book now',
  ]

  const renderNavigationList = () => (
    <ul className="navigation__list">
      {navigationList.map((link, index) => (
        <li className="navigation__item" key={index}>
          <Link to="#" className="navigation__link">
            <span>0{index + 1}</span>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <React.Fragment>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">{renderNavigationList()}</nav>
      </div>

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
    </React.Fragment>
  )
}

export default Header
