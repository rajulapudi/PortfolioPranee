var readline = require("readline-sync");


function getRandomInt(max) {
  return Math.floor(Math.random()*100);
}

var myNum = getRandomInt();




/*function takeInput() {
    var input = readline.question("input your guess: ");
    return input;
}

takeInput();*/
var input = readline.question("input your guess: ");


/*switch (input){
    case (input>myNum) : console.log("Your guess is towards the sky!!");
        takeInput();
    case (input<myNum) : console.log("Your guess is touching the ground!!");
        takeInput();
    case (input==myNum) : console.log("Your Amazing!!");
        break;
}*/


for (let i = 0; i < 10; i++) {
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
}
