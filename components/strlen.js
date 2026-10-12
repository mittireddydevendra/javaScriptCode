// Length
let text = "ABCDEFGHIJKLMNOPQRSTWXYZ";
console.log(text)
let len = text.length;
console.log(len)

//charCodeAt(position) Unicode number
let char =text.charCodeAt(1);
console.log(char)

//charAt() Character
let ch =text.charAt(1);
console.log(ch)

//codePointAt() unicode number position 
let ch1 =text.codePointAt(1)
console.log(ch1)

//at() string method

let ch2 = text.at(1)
console.log(ch2)

//concat() joins two or more strings
let text1 ="Dev"
let txt = text.concat(" ", text1)
console.log(txt)
