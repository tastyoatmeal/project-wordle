import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function GuessResults({guesses, answer, setWin}) {

  const checkGuessBaby = (guess) => {
    const result = checkGuess(guess, answer);

    if(result?.every((letter) => letter.status === "correct")) {
      setWin(true);
    }

    return result;
  }

  const getCells = (index) => {
    const guess = guesses[index]?.guess;

    const validatedGuess = checkGuessBaby(guess);
    
    const cells = (
      range(5).map((charIndex) => {
        const letter = guess ? validatedGuess[charIndex]?.letter : "";
        const status = guess ? validatedGuess[charIndex]?.status : "";
        return guess ? <span className={`cell ${status}`} key={charIndex}>{letter}</span> : <span className="cell" key={charIndex}></span>
      })
    );

    return <>{cells}</>;
  }
 
  return (
  <div className="guess-results">
    {
      range(NUM_OF_GUESSES_ALLOWED).map((i) => {
        return <p key={i} className="guess">{getCells(i)}</p>;
      })
    }
  </div>
  );
}

export default GuessResults;
