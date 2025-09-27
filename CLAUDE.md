# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a complete Rock Paper Scissors web game built with vanilla HTML, CSS, and JavaScript. The implementation uses functional programming patterns and is designed to be simple, responsive, and interactive.

## Architecture

### Core Files
- **index.html**: Complete game interface with semantic HTML structure
- **style.css**: Modern responsive design with CSS animations and gradient styling
- **script.js**: Functional programming approach with modular game logic
- **GAME_DESIGN.md**: Comprehensive game design documentation

### Code Structure
The JavaScript follows a functional programming pattern with:
- **Global state management**: `gameState` object holds player/computer scores
- **Constants module**: `constants.js` exports `CHOICES`, `CHOICE_EMOJIS`, `WIN_CONDITIONS`, `RESULT_MESSAGES`, and `RESULT_CLASSES`
- **Utilities module**: `utils.js` provides helper functions like `capitalizeFirst()`
- **DOM management**: `elements` object for cached DOM references
- **Pure functions**: Each function has single responsibility (determineWinner, updateScores, etc.)
- **Event-driven**: Click handlers for game interaction and reset functionality

### Game Flow
1. Player clicks choice button → `playRound(choice)`
2. Computer generates random choice → `getComputerChoice()`
3. Winner determined → `determineWinner(playerChoice, computerChoice)`
4. Scores updated → `updateScores(result)`
5. UI updated → `displayResult()` + `addAnimation()`

## Development Commands

Since this is a vanilla web project with no build system:

```bash
# Run the game
open index.html
# or
python -m http.server 8000  # For local server if needed
```

## Key Implementation Details

### State Management
- Uses single `gameState` object instead of class properties
- DOM elements cached in `elements` object on initialization
- No external state management libraries required

### Responsive Design
- CSS Grid/Flexbox layout with mobile-first approach
- Media queries handle mobile layout (vertical button stacking)
- Smooth animations using CSS transitions and keyframes

### Game Logic
- Win conditions stored in `WIN_CONDITIONS` object mapping in constants.js
- Computer AI uses `Math.random()` for equal probability choices
- Result display uses `RESULT_MESSAGES` functions and `RESULT_CLASSES` mappings from constants.js

## Testing the Game
- Open index.html in any modern browser
- Test all three choice buttons (rock, paper, scissors)
- Verify score tracking increments correctly
- Test reset functionality clears scores and displays
- Check responsive behavior on mobile/desktop viewports

## Project History
The implementation was completed following a 4-step structured development approach documented in `plan_project/`. All 11 planned tasks have been completed as tracked in `plan_project/implementation_tracker.md`.
