var randomNumber1=Math.floor(6*Math.random()+1);
var randomNumber2=Math.floor(6*Math.random()+1);


document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");


//H1
//Player 1 wins
if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Wins! 🚩";
}
// PLayer 2 wins
else if (randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
// Draw
else{
  document.querySelector("h1").innerHTML="Draw!";
}
