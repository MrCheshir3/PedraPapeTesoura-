// console.log(); para dar resposta no console

// escolha do CP
function getComputerChoice() {
    numRD = Math.random();
    if (numRD < 0.34) {
        CpChoice = "rock";
        console.log(CpChoice);
        return CpChoice;
    } else if (numRD <= 0.67) {
        CpChoice = "paper";
        console.log(CpChoice);
        return CpChoice;
    } else {
        CpChoice = "scissors";
        console.log(CpChoice);
        return CpChoice;
    }
}
// escolha do H
function getHumanChoice(){
    let Hchoice = prompt();
    HchoiceL = Hchoice.toLowerCase;
    return HchoiceL
}

// placar
let HScore = 0;
let CpScore = 0;

// validação
function playround(){
if (HchoiceL == "paper" && CpChoice =="rock"){
    HScore += 1;
}else if (HchoiceL == "scissors" && CpChoice == "paper"){
    HScore += 1;
}else if (HchoiceL == "rock" && CpChoice == "paper"){
    HScore
}else {
    CpScore += 1;
}
}


// tudo feito
function playgame(){
    let round =1 
    while (round<6){
        console.log("Round " + round);
        let Pc = getComputerChoice();
        let Hm = getHumanChoice();
        playround (Pc, Hm);
        round += 1;
    }
    if (HScore>CpScore){
        return"perdeu, que triste"
    }else if (HScore=CpScore){
        return"você empatou, incrivel só que não"
    }else{
        return"ganhou, que um parabéns????"
    }
}

console.log(playgame());