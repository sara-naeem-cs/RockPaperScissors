document.addEventListener('DOMContentLoaded', () => {

    //Cashing the DOM: Storing things in variables so it can be used later. 
    var userScore = 0;
    var computerScore = 0;
    var userScore_span = document.getElementById("user-score");
    var computerScore_span = document.getElementById("computer-score");
    var scoreBoard_div = document.querySelector(".score-board");
    var result_div = document.querySelector(".result");
    var rock_div = document.getElementById("rock");
    var paper_div = document.getElementById("paper");
    var scissors_div = document.getElementById("scissors");
    /*
    function computerWins(player, computer){
        if (player == "rock" && computer == "paper"){
            return true;
        } else if (player == "paper" && computer == "scissors"){
            return true;
        } else if (player == "scissors" && computer == "rock"){
            return true;
        } else{
            return false;
        }
    }

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == computerSelection){
            return "Tie! You both made the same choice!";
        }else if (playerSelection == "rock" && computerSelection == "paper"){
            return "You lose! Paper beats rock!";
        }else if (playerSelection == "rock" && computerSelection == "scissors"){
            return "You win! Rock beats scissors!";
        }else if (playerSelection == "paper" && computerSelection == "rock"){
            return "You win! Paper beats rock!";
        }else if (playerSelection == "paper" && computerSelection == "scissors"){
            return "You lose! Scissors beat paper!";
        }else if (playerSelection == "scissors" && computerSelection == "rock"){
            return "You lose! Rock beats scissors!";
        }else if (playerSelection == "scissors" && computerSelection == "paper"){
            return "You win! Scissors beats paper!";
        }else{
            return "Error!";
        }
    }

    function playRoundScore(playerSelection, computerSelection){
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection == computerSelection){
            return 0; //Game ends with a tie! 
        }else if(computerWins(playerSelection, computerSelection)){
            return 1; //Computer wins
        }else{
            return -1; //Player wins
        }
    }

    function game(){
        const GAME_ROUNDS = 5;
        let playerChoice;
        let computerChoice;
        let computerScore = 0;
        let playerScore = 0;
        
        for (let count = 1; count <= GAME_ROUNDS; count++){
            playerChoice = prompt("Choose rock, paper, or scissors:");
            computerChoice = getComputerChoice()
            console.log("You chose " + playerChoice.toLowerCase());
            console.log("The computer chose " + computerChoice);
            console.log("Result: " + playRound(playerChoice, computerChoice));

            if (playRoundScore(playerChoice, computerChoice) == -1){
                //Update player score
                playerScore = playerScore + 1;
            }else if(playRoundScore(playerChoice, computerChoice) == 1){
                //Update computer score
                computerScore = computerScore + 1;
            }
            console.log("Computer score: " + computerScore);
            console.log("Player score: " + playerScore);
        }

        if (computerScore > playerScore){
            console.log("You lose!");
        }else if(computerScore < playerScore){
            console.log("You win!");
        }else{
            console.log("Tie");
        }
    }
    */

    function getComputerChoice(){
        //We are setting up random number generator for three number choices:
        //const MAX = 3;
        //const MIN = 1;

        //var random_num = Math.round(Math.random() * (MAX - MIN + 1)) + MIN;
        var random_num = Math.floor(Math.random() * 3);
        var computerChoice;

        if (random_num == 1){
            computerChoice = "rock";
        }else if (random_num == 2){
            computerChoice = "paper";
        }else{
            computerChoice = "scissors";
        }
        return computerChoice;
    }


    function game(userChoice){
        computerScore_span.attribute = computerScore_span.attribute +1;
        const ComputerChoice = getComputerChoice();
        console.log("User choice " + userChoice);
        console.log("Computer Choice " + ComputerChoice);

        //HTML:  https://youtu.be/jaVNP3nIAv0?t=2803 46:43
    }


    //game("r")

    //When we click on a value we need to take the value and compare it with the computer's choice
    //Check who wins then play the result back to the DOM
    function main(){
        rock_div.addEventListener('click', function() {
            game("rock");
        })
        paper_div.addEventListener('click', function() {
            game("paper");
        })
        scissors_div.addEventListener('click', function() {
            game("scissors");
        })
    }

    main();
})