//Callback function:
//   A function passed as an argument to another function.

function Square(side){
    return side *side;
}
function AreaTrigle(side){
    return Math.sqrt((3)/4) * side * side;
}
function calc(r,side,callback){
    return callback(r,side)
}
console.log(calc(10,3,AreaTrigle))
console.log(calc(10,3,Square))

// function:

function add(a,b){
    return a + b;
}
function mul(a,b){
    return a*b;
}
function sub(a,b){
    return a-b;
}
function calculate(a,b,callback){
    return callback(a,b)
}
console.log(calculate(20,10,mul))
console.log(calculate(20,10,add))

//IIFE
// (function(){
//     console.log("hi Dev")
// }) ();

//HOC:
function add2(a,b,opert){
    return opert(a,b)
}
const calca = (x,y)=> x + y;
console.log(add2(11,12,calca))