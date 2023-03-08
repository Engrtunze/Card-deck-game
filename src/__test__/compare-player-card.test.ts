import { Play } from '@src/card-two-player-game/play'

describe('comparePlayersCard', () => {
  let game: Play

  beforeEach(() => {
    game = new Play()
  })

  it('should increase Player 1s score if Player 1 has a higher card', () => {
    const player1Card = {
      cardNumber: 17,
      player: 1
    }
    const player2Card = {
      cardNumber: 5,
      player: 2
    }

    const game = new Play()
    game.player1Cards = [player1Card]
    game.player2Cards = [player2Card]
    game.comparePlayersCard()

    expect(game.player1Score).toBe(1)
  })

  it('should increase Player 2s score if Player 2 has a higher card', () => {
    const player1Card = {
      cardNumber: 2,
      player: 1
    }
    const player2Card = {
      cardNumber: 34,
      player: 2
    }

    const game = new Play()
    game.player1Cards = [player1Card]
    game.player2Cards = [player2Card]

    game.comparePlayersCard()

    expect(game.player2Score).toBe(1)
  })

  it('should print the details of the cards played by both players and the result', () => {
    const logSpy = jest.spyOn(global.console, 'log')
    const player1Card = {
      cardNumber: 10,
      player: 1
    }
    const player2Card = {
      cardNumber: 6,
      player: 2
    }

    game.player1Cards = [player1Card]
    game.player2Cards = [player2Card]
    game.comparePlayersCard()

    expect(logSpy).toHaveBeenCalledWith('Player 1 plays: 10')
    expect(logSpy).toHaveBeenCalledWith('Player 2 plays: 6')
    expect(logSpy).toHaveBeenCalledWith('Player 1 wins 🏆')

    logSpy.mockRestore()

  })

})
