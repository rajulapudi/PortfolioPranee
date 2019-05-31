/*var square1 = document.createElement("div");
square1.id = "square1";
square1.attributes =""


document.getElementById("rect").appendChild(div);*/


function randomize() {
    document.getElementById("square0").style.background = randomColors();
    document.getElementById("square1").style.background = randomColors();
    document.getElementById("square2").style.background = randomColors();
    document.getElementById("square3").style.background = randomColors();
    document.getElementById("square4").style.background = randomColors();
    document.getElementById("square5").style.background = randomColors();
    document.getElementById("square5").style.background = randomColors();
}

function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
