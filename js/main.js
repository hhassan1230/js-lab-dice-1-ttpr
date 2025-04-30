let numberLookup = ["one", "two", "three", "four", "five", "six"];

let dice = {
  sides: 6,
  roll: function () {
  let randomNumber;
  // Write Code Here
  // Generate a random number between 1 and the number of sides and assign it to randomNumber
  randomNumber = Math.floor(Math.random() * 6) + 1; 
  return (randomNumber);
  }
};

function printNumber(number) {
  let placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = '<img src= /img/dice-six-faces-' + numberLookup[number - 1] + '.png width = 150>';
}

const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};
