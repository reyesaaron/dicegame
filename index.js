// document.querySelector(".header-text").textContent = "Player 1 Wins";

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
document.querySelector("#playerOne").setAttribute("src", "./images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelector("#playerTwo").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
    document.querySelector(".header-text").textContent = "Player 1 Wins! 🚩";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector(".header-text").textContent = "We don't have a winner!";
}
else {
    document.querySelector(".header-text").textContent = "Player 2 Wins! 🚩";
}