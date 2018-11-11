import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, clickHandler, type }) => (
  <button className={`button${type}`} onClick={clickHandler}>
    {children}
  </button>
)

Button.defaultProps = {
  type: ''
}

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default Button
