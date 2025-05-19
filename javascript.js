// console.log(); para dar resposta no console

// escolha do CP
function getComputerChoice() {
    numRD = Math.random();
    if (numRD < 0.34) {
        computerChoice = "rock";
        console.log(computerChoice);
        return computerChoice;
    } else if (numRD <= 0.67) {
        computerChoice = "paper";
        console.log(computerChoice);
        return computerChoice;
    } else {
        computerChoice = "scissors";
        console.log(computerChoice);
        return computerChoice;
    }
}
// escolha do Human
function getHumanChoice(){
    let humanChoiceLower = prompt();
    humanChoiceLower = humanChoiceLower.toLowerCase();
    return humanChoiceLower
}

// placar
let humanScore = 0;
let computerScore = 0;

// validação
function playround(humanChoiceLower, computerChoice){
    if (humanChoiceLower == "paper" && computerChoice =="rock"){
        humanScore += 1;
        return "Winner: Player";
    }else if (humanChoiceLower == "scissors" && computerChoice == "paper"){
        humanScore += 1;
        return "Winner: Player";
    }else if (humanChoiceLower == "rock" && computerChoice == "scissors"){
        humanScore +=1;
        return "Winner: Player";
    }else if (humanChoiceLower == computerChoice){
        return "Empate";
    }else {
        computerScore += 1;
        return "Winner: bot";
    }
}

function setBoard(humanChoiceLower, computerChoice, winner){
    let player = document.getElementById("player");
    player.innerHTML = "player: " + humanChoiceLower;
    let bot  = document.getElementById("bot");
    bot.innerHTML = "Bot: " + computerChoice;
    if (winner == "Winner: bot"){
        player.style.color = "green";
        bot.style.color = "red";
    } else if (winner == "Winner: Player"){
        player.style.color = "red";
        bot.style.color = "green";
    } else {
        player.style.color = "grey";
        bot.style.color = "grey";
}
document.getElementeById("result").innerHTML = winner;
document.getElementById("humanScore").innerHTML = "Player: " + humanScore;
document.getElementById("computerScore").innerHTML = "Computer: " + computerScore
}

// tudo feito
function playgame(){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let winner = playround(computerChoice, humanChoice);
        setBoard (humanChoice, computerChoice, winner);
}


