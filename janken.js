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

//make a function to set the user's input and return it
function userplay(selection){
    selection = selection.toLowerCase();
    return selection;
}
console.log(userplay("ROck"));

//make a function to compare the two values
//decide the winner from the comparison)