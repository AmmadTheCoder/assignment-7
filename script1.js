// Objective: Stimulate a light bulb's on/off state.
var userInput=prompt("Enter 0 or 1");
if(userInput == 0 || userInput==1){
    if(userInput==0){
        console.log("The light is OFF");
    }
    else{

        console.log("The light is ON");
    }
}
else{

    console.log("Invalid Input");
}