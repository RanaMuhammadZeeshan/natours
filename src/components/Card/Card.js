import React from 'react'
import Popup from '../Popup/Popup'

const Card = ({
  cardType,
  image,
  heading,
  lightColor,
  darkColor,
  detailList,
  price,
  popupContent,
}) => {
  const renderDetailList = () => {
    return (
      <ul>
        {detailList.map((detail, index) => (
          <React.Fragment key={index}>
            <li>{detail}</li>
          </React.Fragment>
        ))}
      </ul>
    )
  }

  return (
    <React.Fragment>
      <div className="card">
        <div className="card__side card__side--front">
          <div
            style={{
              backgroundImage: `linear-gradient(
            to right bottom,
            ${lightColor},
            ${darkColor}),
            url(${image})`,
            }}
            className={`card__picture card__picture--${cardType}`}
          >
            &nbsp;
          </div>

          <h4 className="card__heading">
            <span
              style={{
                backgroundImage: `linear-gradient(
            to right bottom,
            ${lightColor},
            ${darkColor}
            )`,
              }}
              className={`card__heading-span card__heading-span--${cardType}`}
            >
              {heading}{' '}
            </span>
          </h4>

          <div className="card__details">{renderDetailList()}</div>
        </div>
        <div
          style={{
            backgroundImage: `linear-gradient(
            to right bottom,
            ${lightColor},
            ${darkColor}
            )`,
          }}
          className={`card__side card__side--back card__side--back-${cardType}`}
        >
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">${price}</p>
            </div>
            <a href="#popup" className="btn btn--white btn--animate">
              Book now
            </a>
          </div>
        </div>
      </div>
      <Popup content={popupContent} />
    </React.Fragment>
  )
}

export default Card
