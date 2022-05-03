import React from 'react'

const Story = ({ image, authorName, title, content }) => {
  return (
    <div className="story">
      <figure className="story__shape">
        <img src={image} alt="person on a tour" className="story__img" />
        <figcaption className="story__caption">{authorName}</figcaption>
      </figure>

      <div className="story__text">
        <h3 className="heading__tertiary u-margin-bottom-small">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Story
