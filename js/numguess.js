function getRandomInt(max) {
    return Math.floor(Math.random() * 100);
}
var myNum = getRandomInt();
var i = 10;

function checkGuess() {

    if (i > 0) {

        var guessValue = document.getElementById("inputNum").value;
        document.getElementById("high").style.display = "none";
        document.getElementById("low").style.display = "none";
        document.getElementById("correct").style.display = "none";

        if (guessValue > myNum) {
            document.getElementById("high").style.display = "block";
            i -= 1;

        } else if (guessValue < myNum) {
            document.getElementById("low").style.display = "block";
            var guessValue = document.getElementById("inputNum").value;
            i -= 1

        } else if (guessValue == myNum) {
            document.getElementById("correct").style.display = "block";
            if (i>6){
                alert("You are a Mastermind");}
                else if (i>4){
                    alert("You are brilliant");
                }


        }
        document.getElementById("try").innerHTML = i;


    } else {
        alert("You Loose!!");
        document.location.reload();

    }
};







/*----------------------------------------------------*/
/*var readline = require("readline-sync");


function getRandomInt(max) {
  return Math.floor(Math.random()*100);
}

var myNum = getRandomInt();




/*function takeInput() {
    var input = readline.question("input your guess: ");
    return input;
}

takeInput();*/
//var input = readline.question("input your guess: ");


/*switch (input){
    case (input>myNum) : console.log("Your guess is towards the sky!!");
        takeInput();
    case (input<myNum) : console.log("Your guess is touching the ground!!");
        takeInput();
    case (input==myNum) : console.log("Your Amazing!!");
        break;
}*/


/*for (let i = 0; i < 10; i++) {
    if (input > myNum) {
        console.log("Your guess is towards the sky!!");
        var input = readline.question("input your guess: ");
    } else if (input < myNum) {
        console.log("Your guess is touching the ground!!");
        var input = readline.question("input your guess: ");
    } else if (input == myNum) {
        console.log("Your Amazing!!");
        break;
    }
}*/
