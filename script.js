function getComputerChoice(){
    const options=["Rock", "Paper", "Scissors"]
    const randomindex= Math.floor(Math.random()*options.length)
    return options[randomindex];
}

const ai= getComputerChoice();
console.log(ai);
