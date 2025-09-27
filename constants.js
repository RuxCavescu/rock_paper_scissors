// Import utilities
import { capitalizeFirst } from "./utils.js";

// Game constants
export const CHOICES = ["rock", "paper", "scissors"];

export const CHOICE_EMOJIS = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️",
};

export const WIN_CONDITIONS = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

export const RESULT_MESSAGES = {
  win: (playerChoice, computerChoice) =>
    `You win! ${capitalizeFirst(playerChoice)} beats ${computerChoice}`,
  lose: (playerChoice, computerChoice) =>
    `You lose! ${capitalizeFirst(computerChoice)} beats ${playerChoice}`,
  tie: (playerChoice) => `It's a tie! Both chose ${playerChoice}`,
};

export const RESULT_CLASSES = {
  win: "win",
  lose: "lose",
  tie: "tie",
};
