import React from 'react'
import { Link } from 'react-router-dom'

import footerLogo from '../../assets/img/logo-green-2x.png'

const Footer = () => {
  const footerLinks = [
    'Company',
    'Contact us',
    'Careers',
    'Privacy policy',
    'Terms',
  ]

  const renderFooterLinks = () => (
    <ul className="footer__list">
      {footerLinks.map((link) => (
        <li className="footer__item" key={link}>
          <Link to={'#'} className="footer__link">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={footerLogo} alt="full logo" className="footer__logo" />
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">{renderFooterLinks()}</div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{'  '}
            <Link to={'#'} className="footer__link">
              Rana Muhammad Zeeshan
            </Link>
            . Copyright &copy; by Zeeshan. You are 100% allowed to use this
            webpage for both commercial and personal use, but NOT to claim it as
            your own. A credit to the original author, Jonas Schmedtmann, is
            ofcourse highly appreciated!
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
