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
  let humanMove = 0;

  let userInput = prompt("What is your move?");
  humanMove =
    userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

  if (
    humanMove !== "Rock" &&
    humanMove !== "Paper" &&
    humanMove !== "Scissors"
  ) {
    alert(humanMove + " is not a valid move.");
    return;
  } else {
    console.log("You played " + humanMove);
    return humanMove;
  }
}

// Create score function to keep the score of each round
let humanScore = 0;
let computerScore = 0;

function playRound(humanMove, computerMove) {
  humanMove = getHumanChoice();
  computerMove = getComputerChoice();

  if (
    (computerMove === "Rock" && humanMove === "Scissors") ||
    (computerMove === "Paper" && humanMove === "Rock") ||
    (computerMove === "Scissors" && humanMove === "Paper")
  ) {
    computerScore = computerScore + 1;
    console.log("You lose! " + computerMove + " beats " + humanMove);
    console.log("Human score is " + humanScore);
    console.log("Computer score is " + computerScore);
  } else if (
    (computerMove === "Rock" && humanMove === "Paper") ||
    (computerMove === "Paper" && humanMove === "Scrissors") ||
    (computerMove === "Scissors" && humanMove === "Rock")
  ) {
    humanScore = humanScore + 1;
    console.log("You won! " + humanMove + " beats " + computerMove);
    console.log("Human score is " + humanScore);
    console.log("Computer score is " + computerScore);
  } else {
    console.log("Tie! You both played " + humanMove);
    console.log("Human score is " + humanScore);
    console.log("Computer score is " + computerScore);
  }
}

// Create playGame function for 5 rounds and output final result

function playGame() {
  for (round = 1; round <= 5; round++) {
    console.log("ROUND " + round + "/5:");
    playRound();
  }

  if (humanScore > computerScore) {
    console.log(
      "You WON the game by " + humanScore + "/" + computerScore + "."
    );
  } else if (humanScore < computerScore) {
    console.log(
      "You LOSE the game by " + humanScore + "/" + computerScore + "."
    );
  } else {
    console.log("You are tied by " + humanScore + "/" + computerScore + ".");
  }
}

playGame();
