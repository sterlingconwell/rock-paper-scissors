console.log("Hello World");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log(getComputerChoice());

let humanScore = 0;
let computerScore = 0;

// Get DOM elements
const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector("#roundResult");
const scoreDisplay = document.querySelector("#score");
const winnerDisplay = document.querySelector("#winner");

// Add click event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.id;
    playRound(humanChoice);
  });
});

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();
  let result;

  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  // Update the display
  roundResult.textContent = result;
  scoreDisplay.textContent = `Score - Human: ${humanScore}, Computer: ${computerScore}`;

  // Check for game winner
  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5 ? "You win the game!" : "Computer wins the game!";
    winnerDisplay.textContent = winner;
    // Disable buttons after game is won
    buttons.forEach((button) => (button.disabled = true));
  }
}

console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
    console.log(
      `Current Score - Human: ${humanScore}, Computer: ${computerScore}`
    );
  }

  // Add final score and winner announcement
  console.log("\n=== Game Over ===");
  console.log(`Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
