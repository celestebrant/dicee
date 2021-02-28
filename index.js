function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

function winner(player1Value, player2Value) {
    if (player1Value > player2Value) {
        return "👈 Player 1 wins!";
    } else if (player2Value > player1Value) {
        return "Player 2 wins! 👉";
    } else {
        return "Draw!";
    }
}


var p1 = randomNumber(6);
var p2 = randomNumber(6);

document.querySelector(".img1").setAttribute("src", "images/dice" + p1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + p2 + ".png");
document.querySelector("h1").innerHTML = winner(p1, p2);