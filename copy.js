function game() {
    let userScore = 0;
    let computerScore = 0;


    function playerChoice(){
      const rock= document.querySelector(".rock");
      rock.addEventListener("click",e=>{
      
      console.log("rock");
      
      });
      
      
      const paper= document.querySelector(".paper");
      paper.addEventListener("click",e=>{
      
      console.log("paper");
      
      });
      
      
      const scissors= document.querySelector(".scissors");
      scissors.addEventListener("click",e=>{
      
      console.log("scissors");
      
      });
      
  };

  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }


  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }




    for (let round = 1; round <= 5; round++) {
      console.log(`Round ${round}:`);
      const userChoice = prompt("Choose rock, paper, or scissors:");
      const computerChoice = getComputerChoice();
  
      if (userChoice) {
        console.log("Your choice:", userChoice);
        console.log("Computer's choice:", computerChoice);
  
        const result = determineWinner(userChoice, computerChoice);
        console.log(result);
  
        if (result === "You win!") {
          userScore++;
        } else if (result === "Computer wins!") {
          computerScore++;
        }
      } else {
        console.log("No input provided. Round canceled.");
      }
    }
  

    console.log("Final Score:");
    console.log(`You: ${userScore} point(s)`);
    console.log(`Computer: ${computerScore} point(s)`);
  

    if (userScore > computerScore) {
      console.log("Congratulations! You win the game!");
    } else if (userScore < computerScore) {
      console.log("Oops! Computer wins the game!");
    } else {
      console.log("It's a tie game!");
    }

  }
  
  
  game();