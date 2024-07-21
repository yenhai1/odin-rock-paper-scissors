// Create function getComputerChoice

function getComputerChoice() {
  let computerMove = 0;

  let randomNumber = Math.random();
  if (randomNumber < 0.33) {
    computerMove = "Rock";
  } else if (0.33 <= randomNumber < 0.66) {
    computerMove = "Paper";
  } else {
    computerMove = "Scissors";
  }
  console.log("Computer played " + computerMove);
  return computerMove;
}

// Create function getHumanChoice

function getHumanChoice() {
  let userInput = prompt("What is your move?");
  if (userInput === null) {
    console.log("Game cancelled.");
    return null;
  }

  let humanMove =
    userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

  if (
    humanMove !== "Rock" &&
    humanMove !== "Paper" &&
    humanMove !== "Scissors"
  ) {
    alert(humanMove + " is not a valid move.");
    return null;
  } else {
    console.log("You played " + humanMove);
    return humanMove;
  }
}

// Create score function to keep the score of each round
let humanScore = 0;
let computerScore = 0;

function playRound() {
  let humanMove = getHumanChoice();

  if (humanMove === null) {
    return;
  }

  let computerMove = getComputerChoice();

  if (
    (computerMove === "Rock" && humanMove === "Scissors") ||
    (computerMove === "Paper" && humanMove === "Rock") ||
    (computerMove === "Scissors" && humanMove === "Paper")
  ) {
    computerScore++;
    console.log("You lose! " + computerMove + " beats " + humanMove);
  } else if (
    (computerMove === "Rock" && humanMove === "Paper") ||
    (computerMove === "Paper" && humanMove === "Scrissors") ||
    (computerMove === "Scissors" && humanMove === "Rock")
  ) {
    humanScore++;
    console.log("You won! " + humanMove + " beats " + computerMove);
  } else {
    console.log("Tie! You both played " + humanMove);
  }
  console.log("Human score: " + humanScore);
  console.log("Computer score: " + computerScore);
}

// Create playGame function for 5 rounds and output final result

function playGame() {
  for (let round = 1; round <= 5; round++) {
    console.log("ROUND " + round + "/5:");
    playRound();
  }

  if (humanScore > computerScore) {
    console.log(
      "You WON the game by " + humanScore + "/" + computerScore + "."
    );
  } else if (humanScore < computerScore) {
    console.log(
      "You LOST the game by " + humanScore + "/" + computerScore + "."
    );
  } else {
    console.log(
      "It's a TIE game with scores " + humanScore + "/" + computerScore + "."
    );
  }
}

playGame();
