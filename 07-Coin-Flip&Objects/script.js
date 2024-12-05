// Objects in a Coin Flip Mini project

/*
1a. Create a coin flip .html file;
     * Create 2 buttons heads and tails;
     * When clicking 'heads' play the game with guess = 'heads';
     * When clicking 'tails' play the game with guess = 'tails';
     * Create a function 'playGame(guess)' to reuse code.
*/

/*
1b. Create a score object {wins: 0, losses: 0}, update the score each time after playing, and display the score in the console.
*/

/*
1c. Use localStorage to save and load the score (Hint: you'll need to use JSON.stringify to convert the score object to a string).
*/

// Solutions;
let theScore = JSON.parse(localStorage.getItem('theScore')) || {
    wins: 0,
    losses: 0
};

function playGame(guess) {
    const randomNum = Math.random();
    const result = randomNum < 0.5 ? 'heads' : 'tails';

    // Log the result and determine if the guess matches
    console.log(guess === result ? 'Congratulations!' : 'You lose!');

    // Update wins or losses based on the guess
    if (guess === result) {
        theScore.wins++;
    } else {
        theScore.losses++;
    }

    // Display the updated score
    console.log(theScore);
    // Display on pop up
    alert(`Score: Congratulations: ${theScore.wins}, You Loose: ${theScore.losses}`);

    // Save the updated score to localStorage
    localStorage.setItem('theScore', JSON.stringify(theScore));
}

