// Objective: Check the strength of Passsword
var userInput=prompt("Enter a Password");
var userInputLength=userInput.length ;
if(userInputLength >= 8){
    console.log("Strong Password");
}
else if(userInputLength < 8 && userInputLength >= 5){
    console.log("Moderate Password");
}
else if(userInputLength < 5 && userInputLength > 0){
    console.log("Weak Password");
}
else{
    console.log("Please Enter Password");
}