const dice = {
  sides: 6,
  roll: function () {
    const randomNumber = Math.floor(Math.random() * this.sides) + 1;
    const placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = randomNumber;
  },
};

const button = document.getElementById('roll');
button.onclick = function () {
  dice.roll();
};
