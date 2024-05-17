let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = ["Rock", "Paper", "Scissors"];

    return choice[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let userChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    
    return userChoice;
}


function playRound(humanChoice, computerChoice) {
    const winner = {"Paper":"Rock",
                    "Rock":"Scissors",
                    "Scissors":"Paper"
                    }

    if (humanChoice === computerChoice) {
        alert(`You chose ${humanChoice} and the Computer chose ${computerChoice}`);
        console.log("That's a tie");
    } 
    else if (winner[humanChoice] === computerChoice) {
        alert(`You chose ${humanChoice} and the Computer chose ${computerChoice}`);
        humanScore++;
        console.log(`${humanChoice} beats ${computerChoice}! 1+ point for you pal!`)
    } 
    else {
        alert(`You chose ${humanChoice} and the Computer chose ${computerChoice}`);
        computerScore++;
        console.log(`${computerChoice} beats ${humanChoice}! 1+ point for the computer!`)
    }

    console.log(`Your Score: ${humanScore}`);
    console.log(`The Computer's Score: ${computerScore}`);
}


function playGame() {
    humanScore = 0;
    computerScore = 0;

    alert("Let's play a new game!");

    for (let i = 0; i < 5; i++) {
       playRound(getHumanChoice(), getComputerChoice()); 
    }

    if (humanScore > computerScore) {
        alert("You have won!");
    } else if (computerScore > humanScore) {
        alert("The computer has won!")
    } else {
        alert("That's a tie!")
    }
}

playGame();
