import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({ linkTo, classNames, content }) => {
  return (
    <Link to={linkTo} className={`btn ${classNames}`}>
      {content}
    </Link>
  )
}

export default LinkButton
