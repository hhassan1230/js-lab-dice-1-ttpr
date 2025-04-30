let dice = {
  sides: 6,
  roll: function () {
  //let randomNumber;
  // Write Code Here
  // Generate a random number between 1 and the number of sides and assign it to randomNumber
  let randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return (randomNumber);

   return (randomNumber);
  },
};

function printNumber(number) {
  

  let diceImage = document.getElementById("dice-image");
  const numberNames = ["one", "two", "three", "four", "five", "six"];
  let imageName = "dice-six-faces-" + numberNames[number - 1] + ".png";
  diceImage.src = "img/" + imageName;
}

const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};
