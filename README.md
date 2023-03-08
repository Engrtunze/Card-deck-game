# 2-Player Card Game
This is a simple implementation of a 2-player card game using Node.js and TypeScript. The game starts with a shuffled deck of 52 cards that is divided equally between two players. On each turn of the game, both players turn over their top-most card, and the player with the higher-valued card wins the round and gets a point. The game continues until all the cards have been played, and the player with the most points at the end of the game wins.

## Technology used
- Typescript
- nodejs
- jest
- Github

## Installation
1. Clone this repository:
   ````
   https://github.com/Engrtunze/Card-deck-game.git
   ````
2. Navigate to the root directory of the project:
    ````
   cd card-deck-game
   ```` 
3. Install the dependencies:
   ```
   yarn install
   ````
   
## Usage
To play the game, simply run the following command in the terminal:
````
yarn dev
````
To run using start command kindly follow the command below:
````
yarn build
yarn start
````
This yarn build will create a dist file which is useful when deploying to production.

The commands above will start the game and output the results of each round to the console, as well as the final scores and the winner of the game.

## Implementation
The game is implemented using Node.js and TypeScript, and consists of several classes:

### Classes and interface created
- `Card` : This interface represents a single card in the deck, with a unique value and suit.


- `compare-player-card` : This class represents a deck of cards, which can be shuffled and dished out to players.


- `play` : This class represents the game itself, and controls the flow of the game.


## Testing
This project includes a basic test suite created using jest, which can be run using the following command:
````
yarn test
````

The test suite includes tests for the card-deck and play classes, including tests for

- Tested 52 card is being created
- Tested card shuffle
- Tested splitting of card to half.
- Tested increase player point/score by one if a player wins
- Tested Print card of both player per round and show winner for each round.
- Tested displaying the final score and winner of the game.

The tests can be found in the `__test__` directory of the project.

## What can be improved
N:B : These are just some possible areas for improvement.
- **Using enums instead of numbers**: The `Card` interface could be improved by using an enum to represent the card numbers instead of just a number. This would make the code more readable and less prone to errors.


- **Avoiding global state**: The `Play` class should not have to rely on the `console.log` function to output messages to the user. Instead, it should have a separate class or function that is responsible for printing output.


- **Adding error handling**: The `card-deck` class should have error handling in case the `splitCard` method is called with too many players.


- **Improve user interface**: The current implementation of the game does not have a user interface beyond console output. Adding a graphical user interface or web interface would make the game more accessible and enjoyable to a wider range of users.


