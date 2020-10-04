  var player1= "Player 1";
  var player2="Player 2";

//for changing names
function editNames(){

 player1= prompt ("What is Player 1 name ?");
player2= prompt("What is Player 2 name ?");

document.querySelector("p.Player1").innerHTML= player1;
document.querySelector("p.Player2").innerHTML= player2;
}

function rollTheDice(){
    var randomNumber1 = Math.floor(Math.random()*6)+1;

    var randomNumber2 = Math.floor(Math.random()*6)+1;

    document.querySelector(".image1").setAttribute("src", "dice" + randomNumber1 + ".png");

    document.querySelector(".image2").setAttribute("src", "dice" + randomNumber2 + ".png");


    if (randomNumber1 === randomNumber2) { 
        document.querySelector("h1").innerHTML = "Draw!"; 
    } 

    else if (randomNumber1 < randomNumber2) { 
        document.querySelector("h1").innerHTML  = (player2 + " WINS!"); 
    } 

    else { 
        document.querySelector("h1").innerHTML = (player1 + " WINS!"); 
    } 
} 




