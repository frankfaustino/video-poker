import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Score = ({ score, totalScore }) => {
  let text = ''
  if (score === 500) text = 'STRAIGHT'
  if (score === 100) text = 'PAIR'

  return (
    <div className="score__container">
      <span className={`score score__top${text.length > 0 ? ' blinking' : ''}`}>
        {text.length > 0 ? text : 'SCORE'}
      </span>
      <span className="score score__left">{totalScore}&nbsp;</span>
      <span className="score score__right">{score}&nbsp;</span>
    </div>
  )
}

Score.defaultProps = { score: null }

Score.propTypes = {
  score: PropTypes.number,
  totalScore: PropTypes.number.isRequired
}

export default connect(
  ({ score, totalScore }) => ({ score, totalScore }),
  {}
)(Score)
