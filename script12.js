// Objective: Maximum of Two Numbers
var userInput1=+ prompt("Enter a Number");
var userInput2=+ prompt("Enter a Number");
if (userInput1 > userInput2) {
    console.log(`${userInput1} is greater than ${userInput2}`); 
}
else if (userInput2 > userInput1) {
    console.log(`${userInput2} is greater than ${userInput1}`); 
}
else{
    console.log( "Equal Numbers"); 
}