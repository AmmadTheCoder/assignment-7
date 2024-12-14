// Objective: Stimulate a Coin Toss
var userInput=prompt("Enter 1 to select Heads or Enter 0 to select Tails");
let random= Math.floor( Math.random() * 2);

if (userInput == 0 || userInput ==1) {
    if (random==1) {
        console.log("Heads has come on toss");
    }
    else{
        console.log("Tails has come on toss");  
    }
    
    if (userInput == random) {
        console.log("You Won the Toss");
    }
    else{
        console.log("You loss the Toss");
    }
}
else{
    console.log("Invalid Input");  
}