function getComputerChoice(){
    const options=["rock", "paper", "scissors"]
    const randomindex= Math.floor(Math.random()*options.length)
    return options[randomindex];
}

let humanScore=0;
let computerScore=0;

//used for confetti
const canvas=document.querySelector("#confetti");
const jsConfetti = new JSConfetti();

const minScale=0.1;
const maxScale=0.5;

function playRound(humanChoice, computerChoice){
    let finalResult=document.getElementById("final-result");
    const score=document.getElementById("score");
    let choiceMade=document.getElementById("whoiswho")

    if(humanChoice===computerChoice){
        finalResult.textContent="It's a Draw!";
    }
    else if((humanChoice==="paper" && computerChoice==="rock") || (humanChoice==="scissors" && computerChoice==="paper") || (humanChoice==="rock" && computerChoice==="scissors")){
        choiceMade.textContent= `Your choice was ${humanChoice}, while computer choose ${computerChoice}`;
        finalResult.textContent="You Win this round!!";
        humanScore++;
    }
    else{
        choiceMade.textContent= `Your choice was ${humanChoice}, while computer choose ${computerChoice}`;
        finalResult.textContent="You lost this round!!";
        computerScore++;
    }

    score.textContent = `Score: Human ${humanScore} - Computer ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            finalResult.textContent = "Congratulations, you won the game!";
            jsConfetti.addConfetti()
        } else {
            finalResult.textContent = "You lost the game, better luck next time!";
            confetti.create({
                x: 0.5,
                y: 0.45,
                count: 30,
                gravity: 2.7,
                ticks: -1,
                scale: [
                    randomNumber(minScale, maxScale),
                    randomNumber(minScale, maxScale),
                    randomNumber(minScale, maxScale),
                    randomNumber(minScale, maxScale)
                ],
                speed: 50,
                decay: 0.8,
                spread: 250,
                shapes: [ 'emoji' ],
                emojis: [ '😭', '😞', '👎' ]
            })
        }
        humanScore=0;
        computerScore=0;
    } 
}
function handleClick(event) {
    const humanChoice = event.currentTarget.id;
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

document.getElementById("rock").addEventListener("click", handleClick);
document.getElementById("paper").addEventListener("click", handleClick);
document.getElementById("scissors").addEventListener("click", handleClick);

function randomNumber(min, max) {
    return Math.random() * (max - min) + min
} 