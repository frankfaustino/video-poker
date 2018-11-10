import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { toggleCard } from '../redux/actions'

const switcher = number => {
  switch (number) {
    case 1:
      return 'A'
    case 11:
      return 'J'
    case 12:
      return 'Q'
    case 13:
      return 'K'
    default:
      return number
  }
}

const Card = ({ id, kept, number, suit, toggleCard }) => {
  const color = suit === '♦️' || suit === '♥️' ? ' red' : ''
  const num = switcher(number)

  return (
    <div className="card">
      <div className={`card__state${kept ? '' : ' hidden'}`}>HELD</div>
      <div className={`card__container${color}${kept ? ' kept' : ''}`} onClick={() => toggleCard(id)}>
        <div className="card__top-number">{num}</div>
        <div className="card__suit">{suit}</div>
        <div className="card__bottom-number">{num}</div>
      </div>
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  kept: PropTypes.bool.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  suit: PropTypes.string.isRequired,
  toggleCard: PropTypes.func.isRequired
}

export default connect(
  null,
  { toggleCard }
)(Card)