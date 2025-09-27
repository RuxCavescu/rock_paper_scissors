// Import constants
import {
  CHOICES,
  CHOICE_EMOJIS,
  WIN_CONDITIONS,
  RESULT_MESSAGES,
  RESULT_CLASSES,
} from "./constants.js";

// Game state
let gameState = {
  playerScore: 0,
  computerScore: 0,
};

// DOM elements
let elements = {};

// Initialize DOM elements
function initializeElements() {
  elements = {
    playerScoreEl: document.getElementById("player-score"),
    computerScoreEl: document.getElementById("computer-score"),
    playerChoiceDisplay: document.getElementById("player-choice-display"),
    computerChoiceDisplay: document.getElementById("computer-choice-display"),
    gameResult: document.getElementById("game-result"),
    choiceButtons: document.querySelectorAll(".choice-btn"),
    resetButton: document.getElementById("reset-btn"),
  };
}

// Bind event listeners
function bindEvents() {
  elements.choiceButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const choice = e.currentTarget.dataset.choice;
      playRound(choice);
    });
  });

  elements.resetButton.addEventListener("click", resetGame);
}

// Main game logic
function playRound(playerChoice) {
  // Clear previous button states
  elements.choiceButtons.forEach((btn) => btn.classList.remove("selected"));

  // Highlight selected choice
  const selectedButton = document.querySelector(
    `[data-choice="${playerChoice}"]`
  );
  selectedButton.classList.add("selected");

  const computerChoice = getComputerChoice();

  // Update display
  updateChoiceDisplays(playerChoice, computerChoice);

  // Determine winner
  const result = determineWinner(playerChoice, computerChoice);

  // Update scores
  updateScores(result);

  // Display result
  displayResult(result, playerChoice, computerChoice);

  // Add animation
  addAnimation();
}

// Generate computer choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
}

// Update choice displays
function updateChoiceDisplays(playerChoice, computerChoice) {
  elements.playerChoiceDisplay.textContent = CHOICE_EMOJIS[playerChoice];
  elements.computerChoiceDisplay.textContent = CHOICE_EMOJIS[computerChoice];
}

// Determine round winner
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "tie";
  }

  return WIN_CONDITIONS[playerChoice] === computerChoice ? "win" : "lose";
}

// Update game scores
function updateScores(result) {
  if (result === "win") {
    gameState.playerScore++;
    elements.playerScoreEl.textContent = gameState.playerScore;
  } else if (result === "lose") {
    gameState.computerScore++;
    elements.computerScoreEl.textContent = gameState.computerScore;
  }
}

// Display round result
function displayResult(result, playerChoice, computerChoice) {
  let message;

  if (result === "win") {
    message = RESULT_MESSAGES.win(playerChoice, computerChoice);
  } else if (result === "lose") {
    message = RESULT_MESSAGES.lose(playerChoice, computerChoice);
  } else {
    message = RESULT_MESSAGES.tie(playerChoice);
  }

  elements.gameResult.textContent = message;
  elements.gameResult.className = RESULT_CLASSES[result];
}

// Add bounce animation
function addAnimation() {
  elements.playerChoiceDisplay.classList.add("animate");
  elements.computerChoiceDisplay.classList.add("animate");

  setTimeout(() => {
    elements.playerChoiceDisplay.classList.remove("animate");
    elements.computerChoiceDisplay.classList.remove("animate");
  }, 600);
}

// Reset game state
function resetGame() {
  gameState.playerScore = 0;
  gameState.computerScore = 0;
  elements.playerScoreEl.textContent = "0";
  elements.computerScoreEl.textContent = "0";
  elements.playerChoiceDisplay.textContent = "?";
  elements.computerChoiceDisplay.textContent = "?";
  elements.gameResult.textContent = "";
  elements.gameResult.className = "";

  // Clear button selection
  elements.choiceButtons.forEach((btn) => btn.classList.remove("selected"));
}

// Initialize game when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeElements();
  bindEvents();
});
