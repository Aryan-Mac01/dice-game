var randomnumber1 = Math.floor(Math.random()*6)+1;
var randomdiceimage="dice"+randomnumber1+".png";
var randomimagesource="images/"+randomdiceimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomnumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins 😎"
}
else if(randomnumber1<randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 wins 😁"
}
else{
  document.querySelector("h1").innerHTML="It's a tie 🥱"
}
