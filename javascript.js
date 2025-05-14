function getComputerChoice() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
