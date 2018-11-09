import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { toggleCard } from '../redux/actions'

const Card = ({ id, kept, number, suit, toggleCard }) => (
  <div className="card">
    {kept && <div className="card__state">HELD</div>}
    <div className="card__container" onClick={() => toggleCard(id)}>
      <div className="card__suit">{suit}</div>
      <div className="card__number">{number}</div>
    </div>
  </div>
)

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
