//checking if script is linked properly
console.log("First external javascript!");

/* Creating rock paper scissors game 
between computer and a user */

//make a function to get computer's input and return it
function computerPlay(){
    let options = ["rock","paper","scissors"];
    let choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}
//console.log(computerPlay());

//make a function to compare the two values
function playRound(computer, player){
    switch(computer){
        case "rock":
            if (player == "rock") return "tie";
            else if(player == "paper") return "win";
            else return "loss";
        break;
        case "paper":
            if (player == "rock") return "loss";
            else if(player == "paper") return "tie";
            else return "win";
        break;
        default:
            if (player == "rock") return "win";
            else if(player == "paper") return "loss";
            else return "tie";
    }
}

/*make a function to run the game 
until one player reaches 3 points
then show the score*/
function game(){
    let playerScore = 0;
    let computerScore = 0;
    let counter = 0;
    let userPlay;
    while(counter < 3){
        //get the user's input and save it
        userPlay = prompt("rock, paper or scissors: ").toLowerCase();
        console.log(userPlay);
        //playRound(computerPlay(), userPlay);
        if(playRound(computerPlay(), userPlay) == "win"){
            console.log("you won!");
            playerScore++;
        }else if (playRound(computerPlay(), userPlay) == "loss"){
            console.log("you lost!");
            computerScore++;
        }
        else{
            console.log("round tied");
            counter--;
            playerScore += 0;
            computerScore += 0;
        }
        counter++;
    }
    console.log(playerScore);
    console.log(computerScore);
}