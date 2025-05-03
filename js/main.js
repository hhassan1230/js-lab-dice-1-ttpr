let dice = {
  sides: 6,
  roll: function () {
    return Math.floor(Math.random() * this.sides) + 1;
  }
};

function printNumber(number) {
  let placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;

  
  const diceImage = document.getElementById("diceImage");
  const words = ["one", "two", "three", "four", "five", "six"];
  diceImage.src = `img/dice-six-faces-${words[number - 1]}.png`;
}

const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};
