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
console.log(computerPlay());

//get the user's input and save it
const userPlay = prompt("rock, paper or scissors: ").toLowerCase();
console.log(userPlay);

//make a function to compare the two values
function playRound(computer, player){
    if (computer === player){
        return "It's a tie!"
    }else if(computer === "rock"){
        switch(player){
            case "paper":
                return "You win! Paper beats rock.";
                break;
            case "scissors":
                return "You lose! rock beats scissors.";
                break;
            default: return "Oh no! error"
        }
    }else if(computer === "paper"){
        switch(player){
            case "scissors":
                return "You win! scissors beats paper.";
                break;
            case "rock":
                return "You lose! paper beats rock.";
                break;
            default: return "Oh no! error"
        }
    }else{
        switch(player){
            case "rock":
                return "You win! rock beats scissors.";
                break;
            case "paper":
                return "You lose! scissors beats paper.";
                break;
            default: return "Oh no! error"
        }
    }
}

//decide the winner from the comparison)