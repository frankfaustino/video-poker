let id = 1
const suits = ['♣️', '♦️', '♥️', '♠️']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const deck = suits.reduce((arr, suit) => [...arr, ...numbers.map(number => ({ id: id++, number, suit, kept: false }))], [])

const initialState = {
  deck,
  hand: {},
  round: false,
  gameStart: false,
  score: null,
}

const shuffleDeck = deck => {
  deck.forEach((card, i) => {
    const r = Math.floor(Math.random() * (i + 1))
    deck[i] = deck[r]
    deck[r] = card
  })
  return deck
}

const dealCards = deck => deck.splice(0, 5).reduce((obj, card, i) => ({ ...obj, [i]: card }), {})

const replaceCards = (hand, deck) => {
  Object.entries(hand).forEach(([key, obj]) => {
    if (obj.kept) {
      obj.kept = false
    } else {
      const newCard = deck.shift()
      hand[key] = newCard
      deck.push(obj)
    }
  })
  return [deck, hand]
}

const isStraight = hand => {
  let i = 0
  while (i < hand.length - 1 && hand[i].number + 1 === hand[i + 1].number) {
    i++
  }
  return i === 4 ? 500 : 0
}

const isPair = hand => {
  let foundPair = false
  hand.forEach((obj, i) => {
    if (i < hand.length - 1 && obj.number === hand[i + 1].number) {
      foundPair = true
    }
  })
  return foundPair ? 100 : 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SCORE': {
      const hand = Object.values(state.hand)
      hand.sort((a, b) => a.number - b.number)
      let score = Math.max(isStraight(hand), isPair(hand))
      return { ...state, round: false, score }
    }
    case 'SHUFFLE_DECK': {
      const hand = Object.values(state.hand)
      const deck = shuffleDeck([...state.deck, ...hand])
      return { ...state, deck, hand: {} }
    }
    case 'DEAL_CARDS': {
      const deck = [...state.deck]
      const hand = dealCards(deck)
      return { ...state, deck, gameStart: true, round: true, hand }
    }
    case 'REPLACE_CARDS': {
      const [deck, hand] = replaceCards({ ...state.hand }, [...state.deck])
      return { ...state, deck, hand }
    }
    case 'TOGGLE_CARD': {
      const { id } = action
      const hand = { ...state.hand }
      hand[id].kept = !hand[id].kept
      return { ...state, hand }
    }
    default:
      return state
  }
}
