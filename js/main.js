let dice = {
  sides: 6,
  roll: function () {
  let randomNumber = Math.floor(Math.random()*this.sides)+1;
  // Write Code Here
  // Generate a random number between 1 and the number of sides and assign it to randomNumber
  

   return (randomNumber);
  }
};
const dicedImg = {
  one: '.img/dice-six-faces-one.png',
  two: '.img/dice-six-faces-two.png',
  three:'.img/dice-six-faces-three.png',
  four: '.img/dice-six-faces-four.png',
  five: '.img/dice-six-faces-five.png',
  six: '.img/dice-six-faces-six.png',
 }

function printNumber(number) {
  let placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;


let diceImage = document.querySelector("#image img");

if (number == 1)
diceImage.src = dicedImg.one;
if (number == 2)
diceImage.src =dicedImg.two;
if (number == 3)
diceImage.src = dicedImg.three;
if (number == 4)
diceImage.src = dicedImg.four;
if (number == 5)
diceImage.src = dicedImg.five;
if (number == 6)
diceImage.src = dicedImg.six;

}
const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};
