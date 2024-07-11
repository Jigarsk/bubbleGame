# Bubble Pop Game

A simple and fun web-based game where players pop bubbles with matching numbers to score points against the clock.

## Game Description

Bubble Pop is a fast-paced game where players must click on bubbles containing numbers that match the "hit value" displayed. The game features:

- A 30-second timer
- Randomly generated bubbles with numbers from 0 to 9
- A score tracker that increases by 10 points for each correct hit
- A dynamic "hit value" that changes after each correct hit

## How to Play

1. The game starts automatically when the page loads.
2. Look at the "hit value" displayed.
3. Find and click on bubbles with numbers matching the hit value.
4. Score points by clicking on the correct bubbles before time runs out.
5. The game ends after 30 seconds, displaying "Game Over".

## Code Structure

The game is built using HTML, CSS (not provided in the snippet), and JavaScript. Key functions include:

- `increaseScore()`: Updates the score
- `newHit()`: Generates a new hit value
- `generateBubbles()`: Creates new bubbles with random numbers
- `runTimer()`: Manages the game timer
- Event listener for bubble clicks

## Setup and Running

1. Clone this repository.
2. Open the HTML file in a web browser.
3. The game should start automatically.

## Customization

You can easily customize the game by modifying the following variables:
- `timer`: Change the game duration
- Number of bubbles generated (currently set to 152)
- Scoring system (currently 10 points per correct hit)
