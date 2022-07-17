var randomNumber1=Math.ceil(Math.random()*6);
document.querySelector(".dplayer1 img").setAttribute("src","./images/dice"+randomNumber1+".png");
var randomNumber2=Math.ceil(Math.random()*6);
document.querySelector(".Player2dice img").setAttribute("src","./images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.querySelector(".winner").innerHTML="Player 1 wins!";
}
else if(
    randomNumber2>randomNumber1
){
    document.querySelector(".winner").innerHTML="Player 2 wins!";
}
else{
    document.querySelector(".winner").innerHTML="Match Draw!";
}