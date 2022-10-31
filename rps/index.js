const handOptions = {
  "rock": "./assets/Rock.png",
  "paper": "./assets/Paper.png",
  "scissors": "./assets/Scissors.png"
}
const winningMessageElement = document.getElementById('winningMessage')
const restartButton = document.getElementById('restartButton')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')


startGame()
restartButton.addEventListener('click', startGame)
let SCORE = 0;
let BOTSCORE = 0;

function startGame()
{
  winningMessageElement.classList.remove('show')
}

const pickUserHand = (hand) => {
  let hands = document.querySelector(".hands");
  hands.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = handOptions[hand];

  pickComputerHand(hand);
};

const pickComputerHand = (hand) => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * hands.length)];
    
    // set computer image 
    document.getElementById("computerPickImage").src = handOptions[cpHand]
    
    referee(hand, cpHand);
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
    setBotScore(BOTSCORE + 1);
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
    setBotScore(BOTSCORE + 1);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
    setBotScore(BOTSCORE + 1);
  }
  if (userHand == "scissors" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const continueGame = () => {
  if(SCORE != 3 && BOTSCORE != 3)
  {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";

    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
  }
  else{
    if (SCORE >= 5)
    {
      winningMessageTextElement.innerText = `You Win! You get a souvenir!`
    }
    else if (BOTSCORE >= 5)
    {
      winningMessageTextElement.innerText = `Better Luck Next Time!`
    }
    winningMessageElement.classList.add('show')
  }
}

/*function restartGame() {
  if (SCORE >= 3)
  {
    winningMessageTextElement.innerText = `You Win! You get a souvenir!`
  }
  else if (BOTSCORE >= 3)
  {
    winningMessageTextElement.innerText = `Better Luck Next Time!`
  }
  winningMessageElement.classList.add('show')
}*/

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
}

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
}

const setBotScore = (newScore) => {
  BOTSCORE = newScore;
  document.querySelector(".botscore h1").innerText = newScore;
}
