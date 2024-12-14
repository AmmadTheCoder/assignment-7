// Objective: Convert the Temperature from Celsius to Fahrenheit and Vice versa
var userInput=prompt("Enter 1 to Convert the Temperature from Celsius to Fahrenheit or Enter 2 to Convert the Temperature from Fahrenheit to Celsius");
if(userInput==1){
    var temperatureInCelsius=prompt("Enter the Temperature in Celsius");
    var temperatureInFahrenheit=(temperatureInCelsius * 9/5) + 32;
    console.log(temperatureInFahrenheit);
}

else if(userInput== 2){
    var temperatureInFahrenheit=prompt("Enter the Temperature in Fahrenheit");
    var temperatureInCelsius=(temperatureInFahrenheit - 32) * 5/9;
    console.log(temperatureInCelsius);
}

else{
    console.log("Invalid Input");
    
}