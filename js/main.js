let dice = {
  sides: 6,
  // The number of sides on the dice
  // Would like to get back to this later so be able to change the number of sides
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

const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};
