// Objective: Simulate traffic light behavior
var userInput=prompt("Enter colour Red, Green, Yellow");
if(userInput=="Red" || userInput=="red" || userInput=="green" || userInput=="Green" ||userInput=="yellow" || userInput=="Yellow"){
    if(userInput=="Red" || userInput=="red" ){
        console.log("Stop");
    }
    else if(userInput=="Green" || userInput=="green"){
        console.log("Go");
    }
    else{
        console.log("Slow Down");
    }
}
else{
    console.log("Invalid Colour");
}