import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Score = ({ score }) => (
  <div className="score">{score}</div>
)

Score.defaultProps = { score: null }

Score.propTypes = { score: PropTypes.number }

export default connect(({ score }) => ({ score }), {})(Score)
