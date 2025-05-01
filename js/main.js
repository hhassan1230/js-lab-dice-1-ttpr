let dice = {
  sides: 6,
  roll: function () {
  let randomNumber;
  // Write Code Here
  randomNumber = Math.floor(Math.random() * this.sides) + 1;
  // Generate a random number between 1 and the number of sides and assign it to randomNumber
   return (randomNumber);
  }
};

function printNumber(number) {
  let placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

/*
//Currently appendChild does display the dice roll but not within the bounds of the display box 
//and does not reset previous dice roll images
//NEED TO: Get images to fit within box and remove previous rolls from page upon rerolling
function printNumber(number) {
  let placeholder = document.getElementById("placeholder");
  let img = new Image();
  img.src = imageArray[number]; 
  placeholder.appendChild(img);
}*/

const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};

//Currently using array of string values returning the file path for each image
let imageArray = ['/img/dice-six-faces-one.png','/img/dice-six-faces-two.png','/img/dice-six-faces-three.png',
  '/img/dice-six-faces-four.png','/img/dice-six-faces-five.png','/img/dice-six-faces-size.png'];