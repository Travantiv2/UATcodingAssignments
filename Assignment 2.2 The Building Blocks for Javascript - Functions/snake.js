// Travanti Lipson Jr (10/21/24)
// Grab references to the HTML elements to manipulate them in the game
const canvas = document.getElementById('gameCanvas'); // This is where the game is drawn
const ctx = canvas.getContext('2d'); // Set up the drawing context for the canvas

const startScreen = document.getElementById('startScreen'); // Initial screen, visible at the beginning
const gameArea = document.getElementById('gameArea'); // Main game area, hidden until game starts
const startBtn = document.getElementById('startBtn'); // Start button to begin the game
const pauseBtn = document.getElementById('pauseBtn'); // Pause button to pause/resume the game
const restartBtn = document.getElementById('restartBtn'); // Restart button, shows after game ends
const controls = document.getElementById('controls'); // Holds game controls like pause/restart
const scoreDisplay = document.getElementById('scoreDisplay'); // Shows the score
const gameMessage = document.getElementById('gameMessage'); // Shows messages like "Game Over"

// Game setup and state variables
const gridSize = 20; // Size of each game tile in pixels
const tileCount = canvas.width / gridSize; // How many tiles fit along one axis
let snake = [{ x: 10, y: 10 }]; // Snake's initial position
let direction = { x: 0, y: 0 }; // Snake's current direction
let food = { x: 15, y: 15 }; // Food's initial position
let score = 0; // Starting score
let isPaused = false; // Game's paused status
let gameInterval; // To store the game loop interval

// Start the game when called
function startGame() 
{
    startScreen.style.display = 'none'; // Hide the start screen
    gameArea.style.display = 'block'; // Show the main game area
    canvas.style.display = 'block'; // Display the game canvas
    controls.style.display = 'block'; // Show game controls like pause/restart
    resetGame(); // Reset game state for a fresh start
    gameInterval = setInterval(gameLoop, 100); // Game loop runs every 100ms
    gameMessage.innerHTML = ''; // Clear any previous game message
}

// Game loop function for updating game state repeatedly (I struggled here)
function gameLoop() 
{
    if (!isPaused) 
    { // Only update if not paused
        updateSnake(); // Move the snake
        drawGame(); // Draw game objects
        if (checkCollision()) 
        { // Check for collisions
            endGame(); // Stop the game if a collision is detected
        }
    }
}

// Update the snake's position and handle food collection
function updateSnake() 
{
    const newHead = 
    { 
        x: snake[0].x + direction.x, 
        y: snake[0].y + direction.y 
    };
    snake.unshift(newHead); // Add the new head position

    if (snake[0].x === food.x && snake[0].y === food.y) 
    { // Check if the snake eats the food
        score++; // Increase score
        placeFood(); // Place food in a new position
    } else
    {
        snake.pop(); // Remove the snake's tail if food isn't eaten
    }

    scoreDisplay.innerHTML = 'Score: ' + score; // Update score display
}

// Draw the snake and food on the game canvas
function drawGame() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before redrawing

    ctx.fillStyle = 'lime'; // Set snake color
    snake.forEach(segment => 
    {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize); // Draw each snake segment
    });

    ctx.fillStyle = 'red'; // Set food color
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize); // Draw the food
}

// Check for collisions with walls or the snake itself
function checkCollision() 
{
    const head = snake[0]; // Get the snake's head position

    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) 
    {
        return true; // Collision with wall
    }

    for (let i = 1; i < snake.length; i++) 
    { // Check for collision with itself
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
}

// Place food at a random location on the grid
function placeFood() 
{
    food = 
    {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
    };
}

// Reset game state for a new game
function resetGame() 
{
    snake = [{ x: 10, y: 10 }]; // Reset snake position
    direction = { x: 0, y: 0 }; // Reset direction
    score = 0; // Reset score
    placeFood(); // Place new food
    restartBtn.style.display = 'none'; // Hide restart button
    gameMessage.innerHTML = ''; // Clear any game message
}

// End the game and display game over message
function endGame() 
{
    clearInterval(gameInterval); // Stop the game loop
    gameMessage.innerHTML = '<h2>Game Over!</h2>'; // Show game over message
    restartBtn.style.display = 'block'; // Show restart button
    pauseBtn.disabled = true; // Disable pause button
}

// Toggle the game's pause state
function togglePause() 
{
    isPaused = !isPaused; // Flip paused status
    pauseBtn.textContent = isPaused ? 'Play' : 'Pause'; // Update button text
}

// Change snake direction based on arrow key input
window.addEventListener('keydown', (event) => 
{
    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) direction = { x: 0, y: -1 }; // Move up if not moving vertically
            break;
        case 'ArrowDown':
            if (direction.y === 0) direction = { x: 0, y: 1 }; // Move down if not moving vertically
            break;
        case 'ArrowLeft':
            if (direction.x === 0) direction = { x: -1, y: 0 }; // Move left if not moving horizontally
            break;
        case 'ArrowRight':
            if (direction.x === 0) direction = { x: 1, y: 0 }; // Move right if not moving horizontally
            break;
    }
});

// Start the game when the start button is clicked
startBtn.addEventListener('click', startGame);

// Pause or resume the game when pause button is clicked
pauseBtn.addEventListener('click', togglePause);

// Restart the game when restart button is clicked
restartBtn.addEventListener('click', () => 
{
    resetGame(); // Reset game state
    gameInterval = setInterval(gameLoop, 100); // Restart game loop
    pauseBtn.disabled = false; // Re-enable pause button
});
