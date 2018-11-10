export const shuffleAndDeal = () => dispatch => {
  dispatch({ type: 'SHUFFLE_DECK' })
  dispatch({ type: 'DEAL_CARDS' })
}

export const replaceCards = () => dispatch => {
  dispatch({ type: 'REPLACE_CARDS' })
  dispatch({ type: 'GET_SCORE' })
}

export const toggleCard = id => ({ type: 'TOGGLE_CARD', id })
