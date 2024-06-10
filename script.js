function getComputerChoice(){
    const options=["rock", "paper", "scissors"]
    const randomindex= Math.floor(Math.random()*options.length)
    return options[randomindex];
}

function getHumanChoice(){
    const options=["rock", "paper", "scissors"]
    let humanInput

    while(true){
        humanInput=prompt("Enter Rock, Paper, or Scissors:").toLowerCase();
        
        if(options.includes(humanInput)){
            break;
        }
        else{
            alert("Invalid Input. Please Try Again!!")
        }
    }
    
    return humanInput;
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice){
    if(humanChoice===computerChoice){
        console.log(`Your choice was ${humanChoice}, while computer choose ${computerChoice}`);
        console.log("It's a tie");
    }
    else if((humanChoice==="paper" && computerChoice==="rock") || (humanChoice==="scissors" && computerChoice==="paper") || (humanChoice==="rock" && computerChoice==="scissors")){
        console.log(`Your choice was ${humanChoice}, while computer choose ${computerChoice}`);
        console.log("You Win this round!!");
        humanScore++;
    }
    else{
        console.log("Computer Wins this round, You Lost!");
        console.log(`Your choice was ${humanChoice}, while computer choose ${computerChoice}`);
        computerScore++;
    }
    console.log(`Score is ${humanScore}-${computerScore}`)
}

function playGame(){
    for(let i=0; i<5; i++){
        const computerChoice= getComputerChoice();
        const humanChoice= getHumanChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log(`Final Score is ${humanScore}-${computerScore}`)
    if(humanScore>computerScore){
        console.log("Congratulations, You Won!!");
    }
    else if(humanScore===computerScore){
        console.log("Well Played, it was a tie!!")
    }
    else{
        console.log("You lost!, Better Luck Next Time");
    }
    
}

playGame();




