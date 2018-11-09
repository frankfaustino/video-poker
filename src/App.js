import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Card from './components/Card'
import { dealCards, shuffleDeck } from './redux/actions'

class App extends Component {
  componentDidMount() {
    const { dealCards, shuffleDeck } = this.props
    shuffleDeck()
    dealCards()
  }

  render() {
    const { dealCards, go, hand } = this.props

    return (
      <div className="app">
        <div className="hand">
          {Object.keys(hand).map(i => <Card key={i} {...hand[i]} id={i} />)}
        </div>
        <button className="button" onClick={dealCards}>{go ? 'Go' : 'Deal'}</button>
      </div>
    )
  }
}

App.propTypes = {
  dealCards: PropTypes.func.isRequired,
  deck: PropTypes.array.isRequired,
  hand: PropTypes.object.isRequired,
  shuffleDeck: PropTypes.func.isRequired
}

export default connect(
  ({ go, deck, hand }) => ({ go, deck, hand }),
  { dealCards, shuffleDeck }
)(App)
