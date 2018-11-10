let id = 1
const suits = ['♣', '♦', '❤', '♠']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king']
const deck = suits.reduce((arr, suit) => [...arr, ...numbers.map(number => ({ id: id++, number, suit, kept: false }))], [])

const initialState = {
  deck,
  hand: {},
  go: false,
  score: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SCORE': {
      return { ...state, go: false }
    }
    case 'SHUFFLE_DECK': {
      const deck = [...state.deck]
      deck.forEach((card, i) => {
        const r = Math.floor(Math.random() * (i + 1))
        deck[i] = deck[r]
        deck[r] = card
      })
      return { ...state, deck }
    }
    case 'DEAL_CARDS': {
      const deck = [...state.deck]
      const keys = Object.keys(state.hand)
      let hand

      if (keys.length) {
        hand = { ...state.hand }
        keys.forEach(i => {
          if (hand[i].kept) {
            hand[i].kept = false
          } else {
            const tmp = hand[i]
            const newCard = deck.shift()
            hand[i] = newCard
            deck.push(tmp)
          }
        })
      } else {
        const cards = deck.splice(0, 5)
        hand = cards.reduce((obj, card, i) => ({ ...obj, [i]: card }), {})
      }
      return { ...state, deck, hand }
    }
    case 'TOGGLE_CARD': {
      const hand = { ...state.hand }
      hand[action.id].kept = !hand[action.id].kept
      return { ...state, hand, go: true }
    }
    default:
      return state
  }
}