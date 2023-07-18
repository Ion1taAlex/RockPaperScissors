const buttons=document.querySelectorAll("button")

    let userScore = 0;
    let computerScore = 0;


function play(playerChoice){

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
      }
    

      function disableButtons() {
        buttons.forEach(elem => {
            elem.disabled = true
        })
    }

let computerChoice=getComputerChoice();


if(
(playerChoice=="rock"&&computerChoice=="scissors")||
(playerChoice=="paper"&&computerChoice=="rock")||
(playerChoice=="scissors"&&computerChoice=="paper")
){
    score=("You win!"+" "+playerChoice+" "+"beats"+" "+computerChoice+"");
    userScore=userScore+1;

    if(userScore==5)
    {
        score=("YOU WON THE GAME!  Reload the page to play again");
       disableButtons();
    }
}
else if(playerChoice==computerChoice){
   score=("It's a tie!");

}else {

score=("You lose!"+" "+computerChoice+" "+"beats"+" "+playerChoice+"");
computerScore=computerScore+1;
if(computerScore==5)
{
    score=("YOU LOST THE GAME :((((  Reload the page to play again");
   disableButtons();
}

 }

xd=("Player:"+userScore+"-"+"Computer:"+computerScore);

 
document.getElementById("score").innerHTML=score;
document.getElementById("xd").innerHTML=xd;

}

buttons.forEach(button=>
    button.addEventListener('click',e=>{
        play(button.value);
    }));


