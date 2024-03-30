let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Game was draw";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("WIn");
    // userwin++;
    msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
  } else {
    console.log("lose");
    msg.innerText = `You lost!! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "Red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice=", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice=", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("Id");
    // console.log("choice was clicked", choiceID);
    playGame(userChoice);
  });
});
