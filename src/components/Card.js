import React from 'react'
import { connect } from 'react-redux'

import { toggleCard } from '../redux/actions'

const Card = ({ toggleCard, id, kept, number, suit }) => (
  <div className="card">
    {kept && <div className="card__state">HELD</div>}
    <div className="card__container" onClick={() => toggleCard(id)}>
      <div className="card__suit">{suit}</div>
      <div className="card__number">{number}</div>
    </div>
  </div>
)

export default connect(null, { toggleCard })(Card)