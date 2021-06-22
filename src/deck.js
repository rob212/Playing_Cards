
const SUIT = ['H', 'C', 'D', 'S']
const RANK = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

export const getDeck = () => {
  const deck = []
  for (let i = 0; i < SUIT.length; i++) {
    for (let k = 0; k < RANK.length; k++) {
      deck.push({ Rank: RANK[k], Suit: SUIT[i] })
    }
  }
  return deck
}

export const shuffle = (deck) => {
  // Randomly generate a number between 1 - 1000
  const numberOfShuffles = Math.floor((Math.random() + 1) * 1000)
  // for each numberOfShuffles swap the positions of 2 cards in the deck
  for (let i = 0; i < numberOfShuffles; i++) {
    const locationOne = Math.floor(Math.random() * deck.length)
    const locationTwo = Math.floor(Math.random() * deck.length)
    const temp = deck[locationOne]

    deck[locationOne] = deck[locationTwo]
    deck[locationTwo] = temp
  }
  return deck
}
