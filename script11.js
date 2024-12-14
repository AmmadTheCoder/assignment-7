// Objective: Eligibility for Voting
var userInput=prompt("Enter your age");
if (userInput>=18) {
    console.log("You are eligible to vote");
}
else if (userInput<18 && userInput > 0) {
    console.log("You are not eligible to vote");
}
else{
    console.log("Invalid age"); 
}