let humanScore = 0;
let computerScore = 0;

document.addEventListener('DOMContentLoaded', function() {

    function getComputerChoice() {
        let choice = ["Rock", "Paper", "Scissors"];

        return choice[Math.floor(Math.random() * 3)];
    }

    function playRound(humanChoice, computerChoice) {
 
        const p = document.getElementById('roundResultText');
        console.log(p.textContent);

        const winner = {"Paper":"Rock",
                        "Rock":"Scissors",
                        "Scissors":"Paper"
                        }
        
        let messageWinner;
        let pcChoice = document.querySelector("#computerScreen");
        pcChoice.querySelector('p').textContent = `The computer chose ${computerChoice}`;

        if (humanChoice === computerChoice) {
            messageWinner = "That's a tie";
        } 
        else if (winner[humanChoice] === computerChoice) {
            humanScore++;
            messageWinner = "You have won this round! 1+ point for you";
        } 
        else {
            computerScore++;
            messageWinner = "The computer has won this round! 1+ point for the computer"
        }

        if (humanScore + computerScore === 5) {
            if (humanScore > computerScore) {
                document.querySelector("#roundResultText").textContent = "You have won!";
                alert("You have won!");
            } else if (computerScore > humanScore) {
                document.querySelector("#roundResultText").textContent = "The computer has won!";
                alert("The computer has won!")
            } else {
                document.querySelector("#roundResultText").textContent = "That's a tie!";
                alert("That's a tie!")
            }
    
            humanScore = 0;
            computerScore = 0;
    
            playGame();
        }

        document.querySelector("#playerScore").innerText = `Your score is: ${humanScore}`;
        document.querySelector("#computerScore").innerText = `The computer's score is: ${computerScore}`;

        p.textContent = messageWinner;
    }


    function playGame() {

        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            button.addEventListener("click", () => {`   `
                playRound(button.value, getComputerChoice())
            })  
        })

    }

    playGame(); 
})