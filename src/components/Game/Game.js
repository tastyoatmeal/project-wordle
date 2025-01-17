import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import EndGameBanner from '../EndGameBanner/EndGameBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [win, setWin] = React.useState(false);

  const handleAddGuess = (nextGuess) => {
    setGuesses([...guesses, nextGuess]);

    if (guesses.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setGameOver(true);
    }

    if (nextGuess.guess === answer) {
      setWin(true);
      setGameOver(true);
    }
  }

  return <>
  <GuessResults guesses={guesses} answer={answer} setWin={() => setWin} />
  <GuessInput addGuess={handleAddGuess} disabled={gameOver} />
  {gameOver && <EndGameBanner win={win} answer={answer} numOfGuesses={guesses.length} />}
  </>;
}

export default Game;
