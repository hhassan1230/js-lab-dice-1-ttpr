let dice = {
  sides: 6,
  roll: function () {

  // Write Code Here
  const randomNumber = getRandomIntInclusive(1, 6);
  
  // Generate a random number between 1 and the number of sides and assign it to randomNumber
  
   return (randomNumber);
  }
};

function printNumber(number) {
  let placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}




const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};
