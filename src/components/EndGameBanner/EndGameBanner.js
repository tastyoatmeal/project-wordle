import React from 'react';

function EndGameBanner({win, answer, numOfGuesses}) {
  const bannerType = win ? "happy" : "sad";
  const bannerText = (
    win ? 
    <p>
      <strong>Congratulations!</strong> Got it in {" "}
      <strong>{numOfGuesses} guesses</strong>.
    </p> 
    : 
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  );
  return (
    <div className={`${bannerType} banner`}>
      {bannerText}
    </div>
  );
}

export default EndGameBanner;
