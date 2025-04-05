function getComputerChoice() {
  const choices = ["paper", "rock", "scissors"];

  let pc = choices[Math.floor(Math.random() * choices.length)];

  return pc;
}

function getHumanChoice() {
  let text = prompt("Choose your weapon");

 return text
}

let human_score = 0;
let computer_score = 0;
function playRound(human, computer) {
  if (human === computer) {
    console.log("It's a tie!");
  } else if (
    (human === "rock" && computer === "scissors") ||
    (human === "paper" && computer === "rock") ||
    (human === "scissors" && computer === "paper")
  ) {
    human_score++;
    console.log(
      `You Win! The computer chose ${computer} and you chose ${human}`
    );
  } else {
    computer_score++;
    console.log(
      `You lose! The computer chose ${computer} and you chose ${human}`
    );
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    playRound(getHumanChoice(), getComputerChoice());
    let totalHumanScore = human_score;
    let totalComputerScore = computer_score;

    console.log(
      `Score: Human: ${totalHumanScore} - Computer: ${totalComputerScore}`
    );
  }

  console.log("\nGame Over!");
  if (human_score > computer_score) {
    console.log("🏆 You won the game!");
  } else if (computer_score > human_score) {
    console.log("💻 The computer wins this time.");
  } else {
    console.log("🤝 It's a tie overall!");
  }
}

console.log(playGame());
