// Objective: Catagerioze Water Temperature base on Inputs
var userInput=prompt("Enter a Temperature of Water in Celsius");
if(userInput<=0){
    console.log("Freeze");
}
else if(userInput>0 && userInput<=15){
    console.log("Cold");
}
else if(userInput>15 && userInput<=30){
    console.log("Warm");
}
else{
    console.log("Hot");
    
}
