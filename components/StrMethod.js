/*
    slice(start, end)--> Extracts a string using start and end positions
    substring(start, end)
    substr(start, length)
*/
const phone ="9876543215";
console.log(phone.slice(0,5)); //It supports negative indexes
console.log(phone.substring(0,5));//It does not supports negative indexes
console.log(phone.substr(0,5)); // it is deprecated.

let x = new String("Dev");
console.log(x);

// concat(): method can be used instead of plus operator.
let text = "Apple";
let text2 = "Banana";
let text3 = text.concat(" ", text2); 
console.log(text3)

// toUpperCase():
let txt1 = "Hello World!";
let txt2 = txt1.toUpperCase();
console.log(txt2);

//toLowerCase():
let txt3 = txt1.toLowerCase();
console.log(txt3);

// isWellFormed(): method returns true if a string is well formed.

let result =txt1.isWellFormed();
console.log(result); //true

//toWellFormed(): returns a new string replaced with the unicode replacement character (U + FFFD)
let t1 = "Hello World is \uD800";
let res =t1.toWellFormed();
console.log(res);

// trim(): remove whitespace form both sides of a string.
let t = "   Hi Dev   "
let t2 = t.trim();
console.log(t2);

// trimeStrat(): method works like trim(), 
// but removes whitespace only from  the start of a string.

let t3 = t.trimStart();
console.log(t3);

// trimEmd(): End of a string.

let t4 = t.trimEnd();
console.log(t4);