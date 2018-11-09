import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Card from './Card'

const Hand = ({ hand }) => (
  <div className="hand">
    {Object.keys(hand).map(i => <Card key={i} {...hand[i]} id={i} />)}
  </div>
)

Hand.propTypes = {
  hand: PropTypes.object.isRequired,
}

export default connect(({ hand }) => ({ hand }))(Hand)
