// Objective: Stimulate an alarm trigered basesd on conditions
var userInput1=prompt("Is the door open?(yes or no)");
var userInput2=prompt("Is motion detected?(yes or no)");
if(userInput1=="yes" || userInput1=="Yes" || userInput2=="yes" || userInput2=="Yes"){
    console.log("Alarm Trigered");
}
else if(userInput1=="no" || userInput1=="No" && userInput2=="no" || userInput2=="No"){
    console.log("All Safe");
}
else{
    console.log("Invalid Inputs");
    
}