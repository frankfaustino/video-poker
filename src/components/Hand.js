import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Card from './Card'

const Hand = ({ hand, round }) => (
  <div className="hand">
    <div className={`overlay${round ? ' hidden' : ''}`}></div>
    {Object.keys(hand).map(i => <Card key={i} {...hand[i]} id={i} />)}
  </div>
)

Hand.propTypes = {
  hand: PropTypes.object.isRequired,
  round: PropTypes.bool.isRequired
}

export default connect(({ hand, round }) => ({ hand, round }))(Hand)
