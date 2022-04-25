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
    if (handOne == "rock" && handTwo == "scissors"){
        return ("You win! Scissors gets smashed by rock.");
    }else if (handOne == "rock" && handTwo == "paper"){
        return ("You lose. Paper covers rock.");
    }else if (handOne == "rock" && handTwo == "rock"){
        return ("It's a tie.");
    }else if (handOne == "scissors" && handTwo == "rock"){
        return ("You lose. Rock smashes paper.");
    }else if (handOne == "scissors" && handTwo == "paper"){
        return ("You Win! Scissors cuts paper.");
    }else if (handOne == "scissors" && handTwo == "scissors"){
        return ("It's a tie.");
    }else if (handOne == "paper" && handTwo == "scissors"){
        return ("You lose. Paper gets cut by scissors.");
    }else if (handOne == "paper" && handTwo == "paper"){
        return ("It's a tie.");
    }else if (handOne == "paper" && handTwo == "rock"){
        return ("You win! Paper covers rock.");
    }else{
        return ("Error: Invalid input.");
    }
}

console.log(playRound(playerPlay(), computerPlay()));