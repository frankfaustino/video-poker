import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Score = ({ round, score }) => {
  let text = ''
  if (score === 500) text = 'STRAIGHT'
  if (score === 100) text = 'PAIR'

  return (
    <div className={`score${round ? ' hidden' : ''}`}>
      <span className="score__text">{text}</span>
      <span className="score__text">{score}</span>
    </div>
  )
}

Score.defaultProps = { score: null }

Score.propTypes = {
  round: PropTypes.bool.isRequired,
  score: PropTypes.number
}

export default connect(({ round, score }) => ({ round, score }), {})(Score)
