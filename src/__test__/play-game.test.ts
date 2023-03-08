describe('play()', () => {
  it('should display final score and winner of the game ', () => {
    const play = (player1Cards: number[], player2Cards: number[], player1Score: number, player2Score: number) => {
      console.log(`Player 1 final score: ${player1Score}`)
      console.log(`Player 2 final score: ${player2Score}`)

      if (player1Score > player2Score) {
        console.log(`Player 1 wins the game! 🎉 with ${player1Score - player2Score} points`)
      } else if (player2Score > player1Score) {
        console.log(`Player 2 wins the game! 🎉 with ${player2Score - player1Score} points`)
      } else {
        console.log('The game is a tie!')
      }
    }
    const mockPlayer1Cards = [1, 2, 3, 4]
    const mockPlayer2Cards = [5, 6, 7, 8]

    play(mockPlayer1Cards, mockPlayer2Cards, 0, 4)

  })
})


