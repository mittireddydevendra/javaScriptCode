const greeting = "Good Morning!";
console.log("Hello", greeting);

function printMessage() {
  console.log("Have a nice day!");
}
printMessage();

const { add, subtract } = require("./app");

const { currentDate, currentYear } = require("./logger");

// Use functions
console.log(add(20, 30));
console.log(currentDate(), currentYear());