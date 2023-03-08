import { CardDeck } from '@src/card-two-player-game/card-deck'
import { Card } from '@src/card-two-player-game/card'

describe('CardDeck', () => {
    let cardDeck: CardDeck;

    beforeEach(() => {
        cardDeck = new CardDeck()
    })

    it('should create a deck of 52 cards', () => {
        expect(cardDeck.cards.length).toBe(52);
    });

    it('should shuffle the card deck', () => {
        const shuffledDeck = [...cardDeck.cards];
        cardDeck.shuffleCard();
        expect(shuffledDeck).not.toEqual(cardDeck.cards);
    });

    it('should split the card deck in half', () => {
        const player1Cards: Card[] = [];
        const player2Cards: Card[] = [];

        cardDeck.splitCard(player1Cards, player2Cards);

        expect(player1Cards.length).toBe(26);
        expect(player2Cards.length).toBe(26);
    });
});
