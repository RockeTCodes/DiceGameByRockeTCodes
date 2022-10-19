
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

var randSource1 = "images/dice"+randomNumber1+".png";
var randSource2 = "images/dice"+randomNumber2+".png";


document.querySelectorAll("img")[0].setAttribute("src",randSource1);
document.querySelectorAll("img")[1].setAttribute("src",randSource2);


if(randomNumber1>randomNumber2){

document.querySelector("h1").textContent = "🚩Player 1 Wins!🚩"

}



else if(randomNumber2>randomNumber1){

document.querySelector("h1").textContent = "🚩Player 2 Wins!🚩"

}


else if(randomNumber2 == randomNumber1){

document.querySelector("h1").textContent = "🏳️Match Draw!🏳️"

}
