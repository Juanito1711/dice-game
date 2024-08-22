///alert("Hi, Welcome to the Dice Game")

var randomDice = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomDice + ".png";

var randomSourceImage1 = "images/" + randomDiceImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomSourceImage1);

var randomDice2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomDice2 + ".png";

var randomSourceImage2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomSourceImage2);

//Conditional Statements

if (randomSourceImage1 > randomSourceImage2) {
    document.querySelector(".refresh").innerHTML = "Player 1 Wins";
} else if (randomSourceImage1 < randomSourceImage2) {
    document.querySelector(".refresh").innerHTML = "Player 2 Wins";
} else {
    document.querySelector(".refresh").innerHTML = "Player 1 and 2 Draw";
}
