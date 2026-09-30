let body = document.querySelector(".content");

let computerScore = 0;
let userScore = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

let humanThrowVisual = document.querySelector(".human-throw-pic");
let computerThrowVisual = document.querySelector(".computer-throw-pic");

let humanScoreDisplay = document.querySelector(".human-score");
let computerScoreDisplay = document.querySelector(".computer-score");

let roundCount = 0;
let gameWinner = document.createElement("p");


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerThrow;
    if (randomNumber == 1) {
        computerThrow = "rock";
    } else if (randomNumber == 2) {
        computerThrow = "paper"
    } else {
        computerThrow = "scissors"
    }
    return computerThrow
}

// function getHumanChoice() {
//     let humanThrow = prompt("Will you throw rock, paper, or scissors? (entries all in lowercase)")
//     return humanThrow
// }

function playRound(humanChoice, b = getComputerChoice) {
    let human = humanChoice;
    let computer = getComputerChoice();

     if (computer == "rock") {
            computerThrowVisual.textContent = "✊";
        } else if (computer == "scissors") {
            computerThrowVisual.textContent = "✌️";
        } else {
            computerThrowVisual.textContent = "🖐️";
        }

    if (computer == human) {
        computerScore += 0;
        userScore += 0;
        console.log(computer);
    } else if (human == "rock" && computer == "paper") {
        computerScore += 1;
        console.log(computer);
    } else if (human == "scissors" && computer == "paper") {
        userScore += 1;
        console.log(computer);
    }  else if (human == "rock" && computer == "scissors") {
        userScore += 1;
        console.log(computer);
    } else if (human == "paper" && computer == "scissors") {
        computerScore += 1;
        console.log(computer);
    } else if (human == "paper" && computer == "rock") {
        userScore += 1;
        console.log(computer);
    } else if (human == "scissors" && computer == "rock") {
        computerScore += 1;
        console.log(computer);
    }
    humanScoreDisplay.textContent = `Player Score: ${userScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    roundCount++;
}

function roundEnd() {
    if (userScore > computerScore) {
        gameWinner.textContent = `You won the last round ${userScore} to ${computerScore}. The scores have now been reset.`;
        body.appendChild(gameWinner);
        userScore = 0;
        computerScore = 0;
        humanScoreDisplay.textContent = `Player Score: ${userScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    } else if (userScore == computerScore) {
        gameWinner.textContent = `The last round ended as a ${userScore} - ${computerScore} tie. The scores have now been reset.`;
        body.appendChild(gameWinner);
        userScore = 0;
        computerScore = 0;
        humanScoreDisplay.textContent = `Player Score: ${userScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    } else {
        gameWinner.textContent = `You lost the last round ${userScore} to ${computerScore}. The scores have now been reset.`;
        body.appendChild(gameWinner);
        userScore = 0;
        computerScore = 0;
        humanScoreDisplay.textContent = `Player Score: ${userScore}`;
        computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    }
    roundCount = 0;

}


rock.addEventListener("click", () => {
    if (roundCount < 5) {
        playRound("rock");
    } else if (roundCount == 5) {
        roundEnd();
        playRound("rock");
    }
    humanThrowVisual.textContent = "✊"

});

paper.addEventListener("click", () => {
    if (roundCount < 5) {
        playRound("paper");
    } else if (roundCount == 5) {
        roundEnd();
        playRound("paper");
    }
    humanThrowVisual.textContent = "🖐️"
});

scissors.addEventListener("click", () => {
    if (roundCount < 5) {
        playRound("scissors");
    } else if (roundCount == 5) {
        roundEnd();
        playRound("scissors");
    }
    humanThrowVisual.textContent = "✌️";
});
