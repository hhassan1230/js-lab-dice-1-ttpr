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

/*
//Code to display only the number of the die
function printNumber(number) {
  let placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}*/

//Function will get source for dice roll based off image array and display that instead of a number
function printNumber(number) {
  let img = document.getElementById("placeholder");
  img.src = imageArray[number-1]; 
}

const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};

//Currently using array of string values returning the file path for each image
let imageArray = ['/img/dice-six-faces-one.png', '/img/dice-six-faces-two.png', '/img/dice-six-faces-three.png',
  '/img/dice-six-faces-four.png', '/img/dice-six-faces-five.png', '/img/dice-six-faces-six.png'];