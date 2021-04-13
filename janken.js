function computerPlay(){
    let options = ["rock","paper","scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    console.log(choice);
    return choice;
}

let result = document.querySelector("#results");

let rock = document.querySelector("#rock");
rock.addEventListener("click", () => {playRound(computerPlay(),"rock");});

let paper = document.querySelector("#paper");
paper.addEventListener("click", () => {playRound(computerPlay(),"paper");});

let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {playRound(computerPlay(),"scissors");});

function playRound(computer, player){
    switch(computer){
        case "rock":
            if(player === "rock"){
                result.textContent = `${computer} and ${player} is a tie`;
            }
            else if(player === "paper"){
                result.textContent = `${player} beats ${computer}, you win!`;
            }
            else{
                result.textContent = `${computer} beats ${player}, you lose`;
            }
        break;

        case "paper":
            if(player === "rock"){
                result.textContent = `${computer} beats ${player}, you lose`;            
            }
            else if(player === "paper"){
                result.textContent = `${computer} and ${player} is a tie`;  
            }
            else{
                result.textContent = `${player} beats ${computer}, you win!`;
            }
        break;

        case "scissors":
            if(player === "rock"){
                result.textContent = `${player} beats ${computer}, you win!`;
            }
            else if(player === "paper"){
                result.textContent = `${computer} beats ${player}, you lose`;
            }
            else{
                result.textContent = `${computer} and ${player} is a tie`;
            }
        break;

        default:
            result.textContent = "Something went wrong";

    }
}
