import React from 'react'

const FeatureCard = ({ icon, title, content }) => {
  return (
    <div className="feature-box">
      <i className={`feature-box__icon ${icon}`}></i>

      <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
      <p className="feature-box__text">{content}</p>
    </div>
  )
}

export default FeatureCard
