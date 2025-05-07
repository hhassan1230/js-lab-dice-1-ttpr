let dice = {
  sides: 6,
  roll: function () {
    let randomNumber = Math.floor(Math.random() * 6) + 1; 
    // Write Code Here
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
