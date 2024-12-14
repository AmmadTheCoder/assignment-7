// Objective: Stimulate a Simple Game
var userInput1=prompt("Player1 select Rock, Paper or Scissors");
var userInput2=prompt("Player2 select Rock, Paper or Scissors");
console.log("Player1 selected" , userInput1);
console.log("Player2 selected" , userInput2);
if(userInput1=="Rock" || userInput1=="rock"){
    if(userInput2=="Rock" || userInput2=="rock"){
        console.log("Draw");        
    }
    else if(userInput2=="Paper" || userInput2=="paper"){
        console.log("Player2 Wins");      
    }
    else if(userInput2=="Scissors" || userInput2=="scissors"){
        console.log("Player1 Wins");
    }
    else{
        console.log("Invalid Input");
    }
}

else if(userInput1=="Paper" || userInput1=="paper"){
    if(userInput2=="Rock" || userInput2=="rock"){
        console.log("Player1 Wins");        
    }
    else if(userInput2=="Paper" || userInput2=="paper"){
        console.log("Draw");      
    }
    else if(userInput2=="Scissors" || userInput2=="scissors"){
        console.log("Player2 Wins");
    }
    else{
        console.log("Invalid Input");
    }
}

else if(userInput1=="Scissors" || userInput1=="scissors"){
    if(userInput2=="Rock" || userInput2=="rock"){
        console.log("Player2 Wins");        
    }
    else if(userInput2=="Paper" || userInput2=="paper"){
        console.log("Player1 Wins");      
    }
    else if(userInput2=="Scissors" || userInput2=="scissors"){
        console.log("Draw");
    }
    else{
        console.log("Invalid Input");
    }
}

else{
    console.log("Invalid Input");
}