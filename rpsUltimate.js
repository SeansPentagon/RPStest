class rpsGame {
    constructor(humanDecision) {
        this.humanDecision = humanDecision;
        this.computerDecision = this.computerDecision();
        this.winner = "t";
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

    result() {
        let result = "";
        if (this.humanDecision == 'rock') {
            if (this.computerDecision == "paper") {
                result = "The user won by choosing " + this.humanDecision + "! The computer chose " + this.computerDecision;
                this.winner = "u";
            } else if (this.computerDecision == "scissors") {
                result = "The computer won by choosing " + this.computerDecision + "! The user lost by choosing " + this.humanDecision;
                this.winner = "c";
            } else {
                result = "It's a tie! The computer chose " + this.computerDecision + " and the user chose" + this.humanDecision;
            }

        } else if (this.humanDecision == 'paper') {
            if (this.computerDecision == 'rock') {
                result = "The user won by choosing " + this.humanDecision + "! The computer chose " + this.computerDecision;
                this.winner = "u";
            } else if (this.computerDecision == 'scissors') {
                result = "The computer won by choosing " + this.computerDecision + "! The user lost by choosing " + this.humanDecision;
                this.winner = "c";
            } else {
                result = "It's a tie! The computer chose " + this.computerDecision + " and the user chose " + this.humanDecision;
            }

        } else if (this.humanDecision == "scissors") {
            if (this.computerDecision == "paper") {
                result = "The user won by choosing " + this.humanDecision + "! The computer chose " + this.computerDecision;
                this.winner = "u";
            } else if (this.computerDecision == "rock") {
                result = "The computer won by choosing " + this.computerDecision + "! The user lost by choosing " + this.humanDecision;
                this.winner = "c";
            } else {
                result = "It's a tie! The computer chose " + this.computerDecision + " and the user chose " + this.humanDecision;
            }
        }
        return result;
    }
    winner() {
        return this.winner;
    }
}

class sprGame {
    constructor(howMany) {
        this.howMany = howMany;
        this.winCounter = 0;
        this.lossCounter = 0;
        this.tieCounter = 0;
        this.roundsLeft = this.howMany;
        this.currentRound = 0;


    }
    gamePlay() {
        for (let i = 0; i < this.howMany; i++) {
            let x = prompt("rock, paper, or scissors")
            let game = new rpsGame(x);
            console.log(game.result());
            if (game.winner === 'u') {
                this.winCounter = this.winCounter + 1;
            } else if (game.winner === 'c') {
                this.lossCounter = this.lossCounter + 1;
            } else {
                this.tieCounter = this.tieCounter + 1;
            }
            this.roundsLeft = this.howMany - i - 1;
            this.currentRound = i + 1;
            let oneMore = this.finalDecision();
            console.log(oneMore);
            if (oneMore == -1) {
                break
            } else if (oneMore == 0) {
                break
            }
            console.log("Loss Counter: " + this.lossCounter + " / Win Counter: " + this.winCounter)
            console.log("Current round: " + this.currentRound)
            console.log("Rounds left: " + this.roundsLeft)

        }
        if (this.lossCounter - this.winCounter > 0) {
            console.log("The computer won!");
        } else if (this.lossCounter - this.winCounter < 0) {
            console.log("The player won!");
        } else {
            console.log("It's a tie");
        }
    }
    finalDecision() {
        let j = 1;
        if (this.lossCounter - this.winCounter > this.roundsLeft) {
            console.log("The computer won!");
            j = -1;
        } else if (this.winCounter - this.lossCounter > this.roundsLeft) {
            console.log("The player won!")
            j = 0;
        }
        return j;
    }
}

let z = prompt("How many rounds do you wish to play?");
let playerCount = parseInt(z);
let rps = new sprGame(playerCount);
rps.gamePlay();

console.log("Yes")