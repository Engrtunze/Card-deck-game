import {Card} from "@src/card-two-player-game/card";
import {CardDeck} from "@src/card-two-player-game/card-deck";

export class Play {
    player1Cards: Card[] = [];
    player2Cards: Card[] = [];
    player1Score = 0;
    player2Score = 0;


    constructor() {
        const deck = new CardDeck();
        deck.shuffleCard();
        deck.splitCard(this.player1Cards, this.player2Cards);
    }

    comparePlayersCard(){
        const  player1Card = this.player1Cards.shift();
        const  player2Card = this.player2Cards.shift();

        if( player1Card && player2Card != undefined){
            console.log(`Player 1 plays: ${player1Card.cardNumber}`);
            console.log(`Player 2 plays: ${player2Card.cardNumber}`);

            if(player1Card.cardNumber > player2Card.cardNumber){
                console.log("Player 1 wins 🏆");
                this.player1Score++;
            }else if(player1Card.cardNumber < player2Card.cardNumber){
                console.log("Player 2 wins 🏆");
                this.player2Score++;
            }else {
                console.log("This round is a tie");
            }
        }


    }

    play(){
        while (this.player1Cards.length > 0 && this.player2Cards.length > 0){
            this.comparePlayersCard();
        }

        console.log(`Player 1 final score: ${this.player1Score}`);
        console.log(`Player 2 final score: ${this.player2Score}`);

        if (this.player1Score > this.player2Score) {
            console.log(`Player 1 wins the game! 🎉 with ${this.player1Score - this.player2Score} points`);
        } else if (this.player1Score < this.player2Score) {
            console.log(`Player 2 wins the game! 🎉 with ${this.player2Score - this.player1Score} points`);
        } else {
            console.log("The game is a tie!");
        }

    }
}