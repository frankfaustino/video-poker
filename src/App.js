import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Button from './components/Button'
import Hand from './components/Hand'
import Score from './components/Score'
import { replaceCards, shuffleAndDeal } from './redux/actions'

const App = ({ gameStart, replaceCards, round, shuffleAndDeal }) => {
  const drawOrDeal = () => {
    return round ? (
      <Button clickHandler={replaceCards}>DRAW</Button>
    ) : (
      <Button clickHandler={shuffleAndDeal}>DEAL</Button>
    )
  }

  const renderBoard = () => {
    return (
      <>
        <Hand />
        {drawOrDeal()}
        <Score />
      </>
    )
  }

  return (
    <div className="app">
      <header>RETRO VIDEO POKER</header>
      {gameStart ? (
        renderBoard()
      ) : (
        <Button clickHandler={shuffleAndDeal}>DEAL</Button>
      )}
    </div>
  )
}

App.propTypes = {
  gameStart: PropTypes.bool.isRequired,
  round: PropTypes.bool.isRequired,
  replaceCards: PropTypes.func.isRequired,
  shuffleAndDeal: PropTypes.func.isRequired
}

export default connect(
  ({ gameStart, round }) => ({ gameStart, round }),
  { replaceCards, shuffleAndDeal }
)(App)
