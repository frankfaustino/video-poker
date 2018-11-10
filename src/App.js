import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Button from './components/Button'
import Hand from './components/Hand'
import Score from './components/Score'
import { dealCards, replaceCards, getScore, shuffleDeck } from './redux/actions'

class App extends PureComponent {
  componentDidMount() {
    const { dealCards, shuffleDeck } = this.props
    shuffleDeck()
    dealCards()
  }

  render() {
    const { dealCards, getScore, go, replaceCards } = this.props
    return (
      <div className="app">
        <Hand />
        {/* <Button clickHandler={go ? getScore : dealCards}>
          {go ? 'Go' : 'Deal'}
        </Button> */}
        <Button clickHandler={dealCards}>
          Deal Cards
        </Button>
        <Button clickHandler={getScore}>
          Get Score
        </Button>
        <Button clickHandler={replaceCards}>
          Replace
        </Button>
        <Score />
      </div>
    )
  }
}

App.propTypes = {
  dealCards: PropTypes.func.isRequired,
  shuffleDeck: PropTypes.func.isRequired
}

export default connect(
  ({ go }) => ({ go }),
  { dealCards, getScore, replaceCards, shuffleDeck }
)(App)
