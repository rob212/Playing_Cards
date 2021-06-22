import { getDeck, shuffle } from './deck'

test('a new deck has 52 cards', () => expect(getDeck().length).toBe(52))

test('the first card in a new deck is Ace of Hearts', () => {
  const cards = getDeck()
  expect(cards[0]).toEqual({ Rank: 'A', Suit: 'H' })
})

test('shuffle changes the order of the cards', () => {
  const cards = shuffle(getDeck())
  expect(cards[0]).not.toEqual({ Rank: 'A', Suit: 'H' })
})
