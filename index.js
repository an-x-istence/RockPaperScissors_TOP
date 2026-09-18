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
    // return humanThrow
    console.log(humanThrow)
}

getHumanChoice()