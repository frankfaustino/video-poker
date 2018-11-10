export const dealCards = () => ({ type: 'DEAL_CARDS' })

export const replaceCards = () => ({ type: 'REPLACE_CARDS' })

export const getScore = () => ({ type: 'GET_SCORE' })

export const shuffleDeck = () => ({ type: 'SHUFFLE_DECK' })

export const toggleCard = id => ({ type: 'TOGGLE_CARD', id })
