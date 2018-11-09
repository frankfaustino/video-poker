import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, clickHandler }) => (
  <button className="button" onClick={clickHandler}>
    {children}
  </button>
)

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default Button
