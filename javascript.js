// console.log(); para dar resposta no console

function getComputerChoice() {
    numRD = Math.random();



    if (numRD < 0.34) {
        return "rock";
    } else if (numRD <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

console.log(getComputerChoice() );