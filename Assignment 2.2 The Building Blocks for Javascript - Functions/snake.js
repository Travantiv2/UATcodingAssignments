//Travanti Lipson Jr (10/21/24)
// Get references to HTML elements for manipulating them
const canvas = document.getElementById('gameCanvas'); // Reference to the canvas where the game is rendered
const ctx = canvas.getContext('2d'); // Context used to draw on the canvas

const startScreen = document.getElementById('startScreen'); // Start screen, shown at the beginning
const gameArea = document.getElementById('gameArea'); // Game area div, hidden initially, shown when game starts
const startBtn = document.getElementById('startBtn'); // Start button element
const pauseBtn = document.getElementById('pauseBtn'); // Pause button element
const restartBtn = document.getElementById('restartBtn'); // Restart button element, shown after game over
const controls = document.getElementById('controls'); // Container for game controls (pause/restart)
const scoreDisplay = document.getElementById('scoreDisplay'); // Displays the current score
const gameMessage = document.getElementById('gameMessage'); // Displays game messages (game over, etc)

// Game configuration and state
const gridSize = 20; // Size of each tile (snake body part and food) in pixels
const tileCount = canvas.width / gridSize; // Number of tiles along one axis of the canvas
let snake = [{ x: 10, y: 10 }]; // Array representing the snake's body (initial position)
let direction = { x: 0, y: 0 }; // Direction the snake is currently moving
let food = { x: 15, y: 15 }; // Initial position of the food
let score = 0; // The player's score, starts at 0
let isPaused = false; // Tracks whether the game is paused
let gameInterval; // Stores the game loop interval

// Function to start the game
function startGame() {
    startScreen.style.display = 'none'; // Hide the start screen
    gameArea.style.display = 'block'; // Show the game area
    canvas.style.display = 'block'; // Show the canvas where the game is drawn
    controls.style.display = 'block'; // Show the game control buttons (pause/restart)
    resetGame(); // Reset the game state (snake, score, etc.)
    gameInterval = setInterval(gameLoop, 100); // Start the game loop
    gameMessage.innerHTML = ''; // Clear any previous game over message
}

// Main game loop, called repeatedly to update the game state
function gameLoop() {
    if (!isPaused) { // Only update the game if it's not paused
        updateSnake(); // Update the snake's position
        drawGame(); // Render the game (snake and food)
        if (checkCollision()) { // Check if the snake has collided with a wall or itself
            endGame(); // End the game if there's a collision
        }
    }
}

// Update the snake's position and check if it eats the food
function updateSnake() {
    // Create a new head for the snake, based on its current direction
    const newHead = { 
        x: snake[0].x + direction.x, // Update x position based on current direction
        y: snake[0].y + direction.y // Update y position based on current direction
    };
    snake.unshift(newHead); // Add the new head to the front of the snake

    // Check if the snake has eaten the food
    if (snake[0].x === food.x && snake[0].y === food.y) {
        score++; // Increase the score
        placeFood(); // Place new food on the grid
    } else {
        snake.pop(); // Remove the tail of the snake if it hasn't eaten the food
    }

    // Update the score display on the webpage
    scoreDisplay.innerHTML = 'Score: ' + score;
}

// Draw the snake and food on the canvas
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before redrawing

    // Draw the snake
    ctx.fillStyle = 'lime'; // Set the snake's color
    snake.forEach(segment => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize); // Draw each part of the snake
    });

    // Draw the food
    ctx.fillStyle = 'red'; // Set the food's color
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize); // Draw the food
}

// Check if the snake has collided with a wall or itself
function checkCollision() {
    const head = snake[0]; // Get the snake's head

    // Check if the head has hit the walls
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        return true; // Return true if the snake hit the wall
    }

    // Check if the snake has collided with itself
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true; // Return true if the snake hits itself
        }
    }

    return false; // Return false if no collision
}

// Place food randomly on the grid
function placeFood() {
    food = {
        x: Math.floor(Math.random() * tileCount), // Random x position within the grid
        y: Math.floor(Math.random() * tileCount) // Random y position within the grid
    };
}

// Reset the game state (snake position, score, etc.)
function resetGame() {
    snake = [{ x: 10, y: 10 }]; // Reset snake's position
    direction = { x: 0, y: 0 }; // Reset snake's direction
    score = 0; // Reset the score to 0
    placeFood(); // Place food in a new random position
    restartBtn.style.display = 'none'; // Hide the restart button
    gameMessage.innerHTML = ''; // Clear any game over message
}

// End the game by stopping the game loop and showing the game over message
function endGame() {
    clearInterval(gameInterval); // Stop the game loop
    gameMessage.innerHTML = '<h2>Game Over!</h2>'; // Display "Game Over" message on the webpage
    restartBtn.style.display = 'block'; // Show the restart button
    pauseBtn.disabled = true; // Disable the pause button after the game is over
}

// Toggle the game's paused state when the pause button is clicked
function togglePause() {
    isPaused = !isPaused; // Flip the paused state
    pauseBtn.textContent = isPaused ? 'Play' : 'Pause'; // Update the pause button text
}

// Listen for arrow key presses to change the snake's direction
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp': // Up arrow key
            if (direction.y === 0) direction = { x: 0, y: -1 }; // Move up if not already moving vertically
            break;
        case 'ArrowDown': // Down arrow key
            if (direction.y === 0) direction = { x: 0, y: 1 }; // Move down if not already moving vertically
            break;
        case 'ArrowLeft': // Left arrow key
            if (direction.x === 0) direction = { x: -1, y: 0 }; // Move left if not already moving horizontally
            break;
        case 'ArrowRight': // Right arrow key
            if (direction.x === 0) direction = { x: 1, y: 0 }; // Move right if not already moving horizontally
            break;
    }
});

// Event listener for the start button click
startBtn.addEventListener('click', startGame); // Start the game when the Start button is clicked

// Event listener for the pause button click
pauseBtn.addEventListener('click', togglePause); // Toggle pause/play when the Pause button is clicked

// Event listener for the restart button click
restartBtn.addEventListener('click', () => {
    resetGame(); // Reset the game state
    gameInterval = setInterval(gameLoop, 100); // Restart the game loop
    pauseBtn.disabled = false; // Enable the pause button again
});
