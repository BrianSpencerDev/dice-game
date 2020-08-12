//returns result of rolling a 6 sided die
function randomDice6(){
  var num = Math.floor(Math.random() * 6) + 1;

  return num;
}

function rollDice(){
  var randomNum1 = randomDice6();
  var randomNum2 = randomDice6();
  var diceImg1 = "dice" + randomNum1 + ".png";
  var diceImg2 = "dice" + randomNum2 + ".png";

  document.querySelector(".img1").setAttribute("src", "images/" + diceImg1);
  document.querySelector(".img2").setAttribute("src", "images/" + diceImg2);

  if(randomNum1 === randomNum2)
    document.querySelector("h1").textContent = "Draw";
  else if(randomNum1 > randomNum2)
    document.querySelector("h1").textContent = "Player 1 Wins";
  else
    document.querySelector("h1").textContent = "Player 2 Wins";
}

document.addEventListener("keydown", rollDice);
