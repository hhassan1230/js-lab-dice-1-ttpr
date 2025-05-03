let dice = {
  sides: 6,
  roll: function () {
  let randomNumber = Math.floor(Math.random()*this.sides)+1;
  // Write Code Here
  // Generate a random number between 1 and the number of sides and assign it to randomNumber
  
   return (randomNumber);
  }
};

const diceImg = {
  one: "./img/dice-six-faces-one.png",
  two: "./img/dice-six-faces-two.png",
  three: "./img/dice-six-faces-three.png",
  four: "./img/dice-six-faces-four.png",
  five: "./img/dice-six-faces-five.png",
  six: "./img/dice-six-faces-six.png",
}

function printNumber(number) {
  let placeholder = document.getElementById("placeholder");
  // console.log(number);
  placeholder.innerHTML = number;
  // console.log(diceImg.one);
  
  
  let diceImage = document.querySelector("#image img");
  console.log(diceImage);
  // WRAP THIS IN CONDITION BASED ON DICE KEY BASED 
  if (number == 2)
  diceImage.src = diceImg.two; // CHANGE THIS
  if (number == 3)
    diceImage.src = diceImg.three; 
  if (number == 4)
    diceImage.src = diceImg.four; 
  if (number == 5)
    diceImage.src = diceImg.five; 
  if (number == 6)
    diceImage.src = diceImg.six; 
  if (number == 1)
    diceImage.src = diceImg.one; 

}

const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};
