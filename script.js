let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Func that return random int as secretNumber between 0 - 9
const generateTarget = () => {
  return Math.floor(Math.random() * 9 + 1);
};

// console.log(generateTarget());

//Determines which player wins (human/computer) based which is close to targetGuees
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);

  //   if (humanDifference <= computerDifference) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  //return true if human wins & false if computer wins - ShortHand
  return humanDifference <= computerDifference;
};

//Update the scores of the winner dynamically
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

//Updates the round num by 1 after each round
const advanceRound = () => {
  currentRoundNumber++;
};
