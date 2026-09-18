let computerScore = 0;
let userScore = 0;

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

function getHumanChoice() {
    let humanThrow = prompt("Will you throw rock, paper, or scissors? (entries all in lowercase)")
    return humanThrow
}

function playRound(a = getHumanChoice, b = getComputerChoice) {
    let human = getHumanChoice();
    let computer = getComputerChoice();
    if (computer == human) {
        computerScore += 0;
        userScore += 0;
        console.log("The computer threw: " + computer);
        console.log("You threw: " + human);
        console.log("Computer's score: " + computerScore)
        console.log("User's score: " + userScore)
    } else if (human == "rock" && computer == "paper") {
        computerScore += 1;
        console.log("The computer threw: " + computer);
        console.log("You threw: " + human);
        console.log("Computer's score: " + computerScore);
        console.log("User's score: " + userScore);
    } else if (human == "scissors" && computer == "paper") {
        userScore += 1;
        console.log("The computer threw: " + computer);
        console.log("You threw: " + human);
        console.log("Computer's score: " + computerScore);
        console.log("User's score: " + userScore);
    }  else if (human == "rock" && computer == "scissors") {
        userScore += 1;
        console.log("The computer threw: " + computer);
        console.log("You threw: " + human);
        console.log("Computer's score: " + computerScore);
        console.log("User's score: " + userScore);
    } else if (human == "paper" && computer == "scissors") {
        computerScore += 1;
        console.log("The computer threw: " + computer);
        console.log("You threw: " + human);
        console.log("Computer's score: " + computerScore);
        console.log("User's score: " + userScore);
    } else if (human == "paper" && computer == "rock") {
        userScore += 1;
        console.log("The computer threw: " + computer);
        console.log("You threw: " + human);
        console.log("Computer's score: " + computerScore);
        console.log("User's score: " + userScore);
    } else if (human == "scissors" && computer == "rock") {
        computerScore += 1;
        console.log("The computer threw: " + getComputerChoice);
        console.log("You threw: " + human);
        console.log("Computer's score: " + computerScore);
        console.log("User's score: " + userScore);
    }
}

