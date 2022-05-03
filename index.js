function computerPlay(){
    let answers = ["rock","paper","scissors"]
    return answers[Math.floor(Math.random() * 3)];
}
function playerPlay(){
    let choice = prompt("Rock, paper, or scissors?");
    choice = choice.toLowerCase();
    return choice;
}
function playRound(handOne,handTwo){
    console.log(handOne);
    console.log(handTwo);
    if (handOne == "rock" && handTwo == "scissors"){
        return [2,("You win! Scissors gets smashed by rock.")];
    }else if (handOne == "rock" && handTwo == "paper"){
        return [1,("You lose. Paper covers rock.")];
    }else if (handOne == "rock" && handTwo == "rock"){
        return [0,("It's a tie.")];
    }else if (handOne == "scissors" && handTwo == "rock"){
        return [1,("You lose. Rock smashes paper.")];
    }else if (handOne == "scissors" && handTwo == "paper"){
        return [2,("You Win! Scissors cuts paper.")];
    }else if (handOne == "scissors" && handTwo == "scissors"){
        return [0,("It's a tie.")];
    }else if (handOne == "paper" && handTwo == "scissors"){
        return [1,("You lose. Paper gets cut by scissors.")];
    }else if (handOne == "paper" && handTwo == "paper"){
        return [0,("It's a tie.")];
    }else if (handOne == "paper" && handTwo == "rock"){
        return [2,("You win! Paper covers rock.")];
    }else{
        return [-1,("Error: Invalid input.")];
    }
}

const buttons = document.getElementsByClassName('gameBtn');
const gameInfo = document.querySelector('.result');
const humanScore = document.querySelector('.scoreHuman');
const pcScore = document.querySelector('.scorePC');
let scoreLeft = 0;
let scoreRight = 0;
let result = "";
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        result = playRound(buttons[i].value,computerPlay());
        console.log(result);
        gameInfo.textContent = result[1];
        if (result[0] == 2){
            scoreLeft++;
            humanScore.textContent = `Human: ${scoreLeft}`;
            if (scoreLeft == 5){
                gameInfo.textContent = "You win!";
                document.querySelectorAll('.game').forEach(el => el.remove());
            }
            else if (scoreRight == 5){
                gameInfo.textContent = "PC wins.";
                document.querySelectorAll('.game').forEach(el => el.remove());
            }            
            }
        else if (result[0] == 1){
            scoreRight++;
            pcScore.textContent = `PC: ${scoreRight}`;
            if (scoreLeft == 5){
                gameInfo.textContent = "You win!";
                document.querySelectorAll('.game').forEach(el => el.remove());
            }
            else if (scoreRight == 5){
                gameInfo.textContent = "PC wins.";
                document.querySelectorAll('.game').forEach(el => el.remove());
            }
            
        }
        else{
            return 0;
        }
    });    
}

/* function game(){
    let playerScore = 0;
    let pcScore = 0;
    // for (i = 0; i < 5; i++){
        let round = playRound(playerPlay(),computerPlay());
        // console.log(`Round ${i+1}.`)
        if (round[0] == 2){
            console.log(round[1]);
            playerScore++;
            console.log(`Score is Player: ${playerScore} - PC: ${pcScore}`);
        }
        else if (round[0] == 1){
            console.log(round[1]);
            pcScore++;
            console.log(`Score is Player: ${playerScore} - PC: ${pcScore}`);
        }
        else if (round[0] == -1){
            console.log(round[1]);
        }
        else{
            console.log(round[1]);
        }
    // }
}

game(); */ 