// Attach an event listener to the button with id 'rollBtn'
document.getElementById("rollBtn").addEventListener("click", function() {
  // Generate a random number between 1 and 6
  const diceNumber = Math.floor(Math.random() * 6) + 1; // Generates a number between 1 and 6
  
  // Build the path to the image based on the random number
  const diceImage = "img/dice" + diceNumber + ".png";  // Dynamically builds the image path
  
  // Set the src attribute of the image to the new dice image path
  document.getElementById("dice").src = diceImage;  // This changes the dice image
});
