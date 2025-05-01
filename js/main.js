let dice = {
  sides: 6,
  roll: function () {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * this.sides) + 1

    return randomNumber;
  }
};

const diceNumbers = {
  1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six"
}

function displayDiceFace(number) {
  let diceFace = document.getElementById("diceFace");
  diceFace.src = "img/dice-six-faces-" + diceNumbers[number] + ".png";
}

const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  displayDiceFace(result);
};
