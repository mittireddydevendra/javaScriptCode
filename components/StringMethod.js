//String Method

//Length
const text ="abcdefghijklmnopqrstwxyz"; //index position start from 0,1,2...n
const length =text.length;
console.log(length)

//at - position method
console.log((text.at(8))) //i

//charat
console.log(text.charAt(8)) //i returns the character at a specified index in a string.

//charCodeAt (position Method) //0=97
console.log(text.charCodeAt(0)) //The method returns a UTF-16 code (0-65535).

//codePointAt
console.log(text.codePointAt(0))
console.log(text.charAt(text.length-1)); //position and length

// Sloppy mode
"using strict"
let tex = "HELLO WORLD";

// Try to change the first letter to "A"
try {
  tex[0] = "A";
} catch(err) {
  tex = err.message
}
console.log(tex)

// instanceOf: an operator used to check whether 
// an object was create from particular constructor or class.
let today = new Date();
console.log(today instanceof Date);

let x =new String();
console.log(x instanceof String);

let arr = [10,20,30];
console.log(arr instanceof Object);

let a = "John";
let b = new String("John");
console.log(b instanceof String);
console.log(a instanceof String);
