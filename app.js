// Create playGame on UI
const round = document.querySelector("#round");
const scores = document.querySelector("#scores");
const result = document.querySelector("#result");

let humanScore = 0;
let computerScore = 0;
let roundText = "";

let play = document.querySelector("#play");
play.addEventListener("click", (event) => {
  let target = event.target;
  let HumanMove = "";

  switch (target.id) {
    case "Rock":
      // console.log("You played " + target.id);
      humanMove = target.id;
      break;
    case "Paper":
      // console.log("You played " + target.id);
      humanMove = target.id;
      break;
    case "Scissors":
      // console.log("You played " + target.id);
      humanMove = target.id;
      break;
  }

  let computerMove = getComputerChoice();

  playRound();

  round.textContent = roundText;
  scores.textContent = `You: ${humanScore} - Computer: ${computerScore}`;

  if (computerScore === 5 || humanScore === 5) {
    if (computerScore === 5) {
      result.textContent = "Computer WON the game!";
    } else {
      result.textContent = "You WON the game!";
    }
    humanScore = 0;
    computerScore = 0;
    result.style.display = "block";
  } else result.style.display = "none";
});

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
  // console.log("Computer played " + computerMove);
  return computerMove;
}

// // Create function getHumanChoice

// function getHumanChoice() {
//   let userInput = prompt("What is your move?");
//   if (userInput === null) {
//     console.log("Game cancelled.");
//     return null;
//   }

//   let humanMove =
//     userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();

//   if (
//     humanMove !== "Rock" &&
//     humanMove !== "Paper" &&
//     humanMove !== "Scissors"
//   ) {
//     alert(humanMove + " is not a valid move.");
//     return null;
//   } else {
//     console.log("You played " + humanMove);
//     return humanMove;
//   }
// }

// Create score function to keep the score of each round

function playRound() {
  // let humanMove = getHumanChoice();

  // if (humanMove === null) {
  //   return;
  // }

  let computerMove = getComputerChoice();

  if (
    (computerMove === "Rock" && humanMove === "Scissors") ||
    (computerMove === "Paper" && humanMove === "Rock") ||
    (computerMove === "Scissors" && humanMove === "Paper")
  ) {
    computerScore++;
    // console.log("You lose! " + computerMove + " beats " + humanMove);
    roundText = `You played ${humanMove}. Computer played ${computerMove}. You lose!`;
  } else if (
    (computerMove === "Rock" && humanMove === "Paper") ||
    (computerMove === "Paper" && humanMove === "Scrissors") ||
    (computerMove === "Scissors" && humanMove === "Rock")
  ) {
    humanScore++;
    // console.log("You won! " + humanMove + " beats " + computerMove);
    roundText = `You played ${humanMove}. Computer played ${computerMove}. You won!`;
  } else {
    // console.log("Tie! You both played " + humanMove);
    roundText = `Tie! You both played ${humanMove}.`;
  }
}

// // Create playGame function for 5 rounds and output final result

// function playGame() {
//   for (let round = 1; round <= 5; round++) {
//     console.log("ROUND " + round + "/5:");
//     playRound();
//   }

//   if (humanScore > computerScore) {
//     console.log(
//       "You WON the game by " + humanScore + "/" + computerScore + "."
//     );
//   } else if (humanScore < computerScore) {
//     console.log(
//       "You LOST the game by " + humanScore + "/" + computerScore + "."
//     );
//   } else {
//     console.log(
//       "It's a TIE game with scores " + humanScore + "/" + computerScore + "."
//     );
//   }
// }

// playGame();
