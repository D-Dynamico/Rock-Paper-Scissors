function getComputerChoice(){
    const options=["rock", "paper", "scissors"]
    const randomindex= Math.floor(Math.random()*options.length)
    return options[randomindex];
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice){
    const finalResult=document.getElementById("final-result");
    const score=document.getElementById("score");

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

    score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            finalResult.textContent = "Congratulations, you won the game!";
        } else {
            finalResult.textContent = "You lost the game, better luck next time!";
        }
        humanScore=0;
        computerScore=0;
    } 
}
function handleClick(event) {
    const humanChoice = event.target.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

document.getElementById("rock").addEventListener("click", handleClick);
document.getElementById("paper").addEventListener("click", handleClick);
document.getElementById("scissors").addEventListener("click", handleClick);




