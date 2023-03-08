import {Card} from "@src/card-two-player-game/card";

export class CardDeck{
    cards: Card[] = [];

    constructor() {
        for (let i = 1; i <= 52; i++){
            this.cards.push({cardNumber: i, player:0});
        }
    }

    shuffleCard(){
        for(let i = this.cards.length -1; i > 0; i--){
            const k = Math.floor(Math.random()* (i + 1));
            [this.cards[i], this.cards[k]] = [this.cards[k], this.cards[i]]
        }
    }

    splitCard(player1 : Card[], player2: Card[]){
        const numCardsPerPlayer = this.cards.length/2;

        for( let i = 0; i < numCardsPerPlayer; i++){
            player1.push(this.cards[i * 2]);
            player2.push(this.cards[i * 2 + 1]);
        }
    }

}