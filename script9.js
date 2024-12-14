// Objective: Give Outfits Suggestions based on Weather Conditions
var userInput= prompt("Enter the Weather sunny, rainy or cold");
if (userInput== "sunny" || userInput== "Sunny") {
    console.log("Wear Sunglasses");
}
else if (userInput== "rainy" || userInput== "Rainy") {
    console.log("Take an Umbrella");
}
else if (userInput== "cold" || userInput== "Cold") {
    console.log("Wear a Jacket");
}
else{
    console.log("Invalid Input");
}