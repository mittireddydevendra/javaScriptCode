//typeof operator

let name = "Dev";
console.log(typeof name); //string

let x =25;
console.log(typeof x);//number

let x1;
console.log(x1); //undifined

let age = 25;
if (typeof age ==="number"){
    console.log("Age is a number"); 
}

/*Checking API data
   When working with APIs, you may want to check 
   whether a value exists and what type it is: 
*/
let userName = "Dev";
if (typeof userName ==="string"){
    console.log("Username is valid")
}

// callbacks: this is useful when you are working.

function calculate(a,b,callback){
    
    if(typeof callback ==="function"){
        console.log(callback(a,b))
    }else{
        console.log("Callback is not a function");
    }
}
function add2(a,b){
    return a + b;
}
calculate(10,20,add2)

let age1=16;
let text = (age1 < 18) ? "Minor" : "Adult";
console.log(text)

//continue
for (let i = 0; i < 10; i++) {

    if (i === 3) {
        continue;
    }
    console.log(i);
}

//continue

let txt = " ";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; }
    txt += i;
   }
}
console.log(txt);