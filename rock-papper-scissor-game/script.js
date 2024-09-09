const buttons = document.querySelectorAll("button");
const resultEl = document.querySelector("#result");
let userScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    console.log(result);
    //resultEl.textContent = result;
    //console.log("user choice:", button.id, "computer play:", computerPlay());
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(id, computerPlay) {
  if (id === computerPlay) {
    document.getElementById("result").textContent = "It's a tie!";
  } else if ((id === "rock" && computerPlay === "scissors") || computerPlay === "paper") {
    document.getElementById("result").textContent = "You win!";
    userScore++;
    document.getElementById("user-score").textContent = userScore;
  } else {
    document.getElementById("result").textContent = "You lose!";
    computerScore++;
    document.getElementById("computer-score").textContent = computerScore;
  }
}
