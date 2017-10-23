let x = window.prompt("How many games do you wish to play?");
let maxGames = parseInt(x);
let gameCounter = 0;
let computerWins = 0;
let playerWins = 0;
let drawCounter = 0;

class RPSgame {

    constructor(decision) {
        this.humanchoice = decision;
        this.computerchoice = this.computerDecision();
    }
    computerDecision() {
        let computerLogic = Math.floor(Math.random() * 3) + 1;
        if (computerLogic == 1) {
            return "rock";
        } else if (computerLogic == 2) {
            return "paper";
        } else {
            return "scissors";
        }
        return this.computerchoice;
    }
    playGame() {

        let finalStatement = "You chose: " + this.humanchoice + " , the Computer chose: " + this.computerchoice;
        if (this.computerchoice == 'rock' && this.humanchoice == 'rock') {
            console.log("It's a tie!");
            drawCounter = drawCounter + 1;
        }
        if (this.computerchoice == 'rock' && this.humanchoice == 'paper') {
            console.log("The user won");
            playerWins = playerWins + 1;
        }
        if (this.computerchoice == 'rock' && this.humanchoice == 'scissors') {
            console.log("The computer won");
            computerWins = computerWins + 1;
        }
        if (this.computerchoice == 'paper' && this.humanchoice == 'rock') {
            console.log("The computer won");
            computerWins = computerWins + 1;
        }
        if (this.computerchoice == 'paper' && this.humanchoice == 'paper') {
            console.log("It's a tie!");
            drawCounter = drawCounter + 1;
        }
        if (this.computerchoice == 'paper' && this.humanchoice == 'scissors') {
            console.log("The player won!");
            playerWins = playerWins + 1;
        }
        if (this.computerchoice == 'scissors' && this.humanchoice == 'rock') {
            console.log("The player won");
            playerWins = playerWins + 1;
        }
        if (this.computerchoice == 'scissors' && this.humanchoice == 'paper') {
            console.log("The computer won");
            computerWins = computerWins + 1;
        }
        if (this.computerchoice == 'scissors' && this.humanchoice == 'scissors') {
            console.log("It's a tie");
            drawCounter = drawCounter + 1;
        }
        console.log(finalStatement);
    }
}

let i = 0;
while (i < maxGames) {
    let input = window.prompt("Type in 'rock', 'paper', or 'scissors' to play")
    let rps = new RPSgame(input);
    gameCounter = gameCounter + 1;
    let currentGames = maxGames - gameCounter;
    console.log("There are " + currentGames + " rounds left")
    if (computerWins - playerWins > currentGames) {
        console.log("The computer won!")
        break
    }
    if (playerWins - computerWins > currentGames) {
        console.log("The player won!")
        break
    }
    rps.playGame();
    i++;
    console.log(computerWins)
    console.log(playerWins)
    console.log(drawCounter)
    console.log(currentGames)
}
console.log("You won " + playerWins + " rounds, the computer won " + computerWins + " rounds, and there were " + drawCounter + " draws")




/*
humanDecision = console.log("Type in 'r', 'p', or 's' to play");
let rock = 'r';
let paper = 'p';
let scissors = 's';
aiDecision = Math.floor(Math.random() * 3) + 1;

*/