// Get references to the elements
const trainElement = document.getElementById('train');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let animationId = null; // Stores the ID of the animation frame

// Function to move the train
function moveTrain() {
  const currentPosition = parseInt(trainElement.style.left) || 0;
  const newPosition = currentPosition + 5;
  trainElement.style.left = newPosition + 'px';

  if (newPosition < window.innerWidth - trainElement.offsetWidth) {
    // If the train hasn't reached the end of the screen, request the next frame
    animationId = requestAnimationFrame(moveTrain);
  }
}

// Function to start the train animation
function startAnimation() {
  if (animationId === null) {
    moveTrain();
  }
}

// Function to stop the train animation
function stopAnimation() {
  if (animationId !== null) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
}

// Add event listeners to the buttons
startButton.addEventListener('click', startAnimation);
stopButton.addEventListener('click', stopAnimation);
