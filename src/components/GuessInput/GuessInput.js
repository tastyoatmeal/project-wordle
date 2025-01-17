import React from 'react';

const GUESS_DEFAULT_VALUE = ''
const GUESS_PATTERN="[a-zA-Z]{5}"

const GUESS_MAX_LENGTH = 5

function GuessInput({addGuess, disabled}) {
  const [guess, setGuess] = React.useState(GUESS_DEFAULT_VALUE);

  return (
  <form 
    onSubmit={(event) => {
      event.preventDefault()
      const nextGuess = { 
        id: crypto.randomUUID(), 
        guess: guess 
      };
      console.log(nextGuess)
      addGuess(nextGuess)
      setGuess(GUESS_DEFAULT_VALUE)
    }} 
    className='guess-input-wrapper'>
    <label htmlFor='guess-input'>Enter guess:</label>
    <input 
      id='guess-input'
      type='text'
      value={guess}
      onChange={(e) => {
        const formattedValue = e.target.value.toLocaleUpperCase()
        setGuess(formattedValue)
      }}
      required
      pattern={GUESS_PATTERN}
      maxLength={GUESS_MAX_LENGTH}
      title="5 letters word"
      disabled={disabled}
    />
  </form>
  );
}

export default GuessInput;
