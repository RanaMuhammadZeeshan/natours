import React from 'react'
import { Link } from 'react-router-dom'

import storyImage1 from '../../assets/img/nat-8.jpg'
import storyImage2 from '../../assets/img/nat-9.jpg'

const Popup = ({ content }) => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={storyImage1} alt="tour story" className="popup__img" />
          <img src={storyImage2} alt="tour story" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">{content}</p>
          <Link to={'#'} className="btn btn--green">
            Book now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Popup
