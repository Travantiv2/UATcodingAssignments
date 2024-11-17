/* Travanti Lipson Jr (11/11/2024) */

/* This variable stores the interval for moving the meme */
let memeInterval;  // starts and stop the movement

/* This  moves the meme  to random places on the screen */
function moveMeme()
 {
    // Get the meme image element
    let meme = document.getElementById('memeImage');
    
    // Makes sure the meme can move freely
    meme.style.position = 'absolute';

    // Generates a random x position
    let x = Math.random() * (window.innerWidth - meme.offsetWidth);
    
    // Generates a random y position
    let y = Math.random() * (window.innerHeight - meme.offsetHeight);

    // Move the meme to the new x and y position
    meme.style.left = x + 'px';
    meme.style.top = y + 'px';
}

/* This  starts the movement of the meme */
function startMeme() 
{
    // Disable the Start button so it can't be clicked again
    document.getElementById('startButton').disabled = true;
    
    // Enable the Stop button so it can stop the movement
    document.getElementById('stopButton').disabled = false;

    // Call the moveMeme function every second (1000 milliseconds)
    memeInterval = setInterval(moveMeme, 1000);
}

/* This  stops the meme from moving */
function stopMeme() 
{
    // Enable the Start button so the user can start again
    document.getElementById('startButton').disabled = false;
    
    // Disable the Stop button because the meme is already stopped
    document.getElementById('stopButton').disabled = true;

    // Stop the meme from moving by clearing the interval
    clearInterval(memeInterval);
}

/* These lines attach the functions to the buttons */

/* When the Start button is clicked, call startMeme */
document.getElementById('startButton').onclick = startMeme;

/* When the Stop button is clicked, call stopMeme */
document.getElementById('stopButton').onclick = stopMeme;
