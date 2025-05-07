let dice = {
  sides: 6,
  roll: function () {
  let randomNumber;
  // Write Code Here
  // Generate a random number between 1 and the number of sides and assign it to randomNumber

randomNumber = Math.floor(Math.random() * this.sides);
  
   return (randomNumber);
  }
};

const img = [
  "img/dice-six-faces-five.png",
  "img/dice-six-faces-four.png",
  "img/dice-six-faces-one.png",
  "img/dice-six-faces-six.png",
  "img/dice-six-faces-three.png",
  "img/dice-six-faces-two.png"
]

function printNumber(number) {
  let placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = `<img src=${img[number]} alt=>`;
}

const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};
