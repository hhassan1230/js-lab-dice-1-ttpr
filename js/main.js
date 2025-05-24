let dice = {
  sides: 6,
  roll: function () {
    let randomNumber = Math.floor(Math.random() * this.sides + 1);
    // Write Code Here
    // Generate a random number between 1 and the number of sides and assign it to randomNumber
    return randomNumber;
  },
};

function printNumber(number) {
  let placeholder = document.getElementById("placeholder");
  // placeholder.innerHTML = number;
  switch (number) {
    case 1: 
      placeholder.innerHTML = "<img src='img/dice-six-faces-one.png'>";
    break;
    case 2: 
      placeholder.innerHTML = "<img src='img/dice-six-faces-two.png'>";
    break;
    case 3: 
      placeholder.innerHTML = "<img src='img/dice-six-faces-three.png'>";
    break;
    case 4: 
      placeholder.innerHTML = "<img src='img/dice-six-faces-four.png'>";
    break;
    case 5: 
      placeholder.innerHTML = "<img src='img/dice-six-faces-five.png'>";
    break;
    case 6: 
      placeholder.innerHTML = "<img src='img/dice-six-faces-six.png'>";
    break;
  }
}

const button = document.getElementById("button");

button.onclick = function () {
  let result = dice.roll();
  printNumber(result);
};
