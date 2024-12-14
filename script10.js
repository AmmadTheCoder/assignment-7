// Objective: Test Arithemetic Skills Interactively.
var abc=Math.floor(Math.random() * 100)+50;
var xyz=Math.floor(Math.random() * 100);
var userInput=prompt(`Solve the equation: ${abc} * ${xyz} + ${abc} - ${xyz} / ${xyz} and write the answer`);

var answer=abc * xyz + abc -xyz /xyz;
if (userInput== answer) {
    console.log("Your answer is Correct"); 
}
else{
    console.log("The correct answer is ", answer); 
}