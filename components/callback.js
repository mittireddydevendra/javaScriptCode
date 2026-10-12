//call back function
function meet(name,callback){
    console.log("Hello" + ' '+name)
    callback()
}
function callme(){
    console.log("i am a callback function");
}
meet('dev',callme)

//callback fun1

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function callback(a,b,call){
   return call(a,b);
}
console.log(callback(20,10,sub))
// console.log(add(10,20))
// console.log(sub(30,20))

//callback fun2

function circleArea(r){
    return Math.PI * r*r;
}
function Square(side){
    return side *side;
}
function AreaTrigle(side){
    return Math.sqrt((3)/4) * side * side;
}
function calc(r,side,calback){
   return calback(r,side)
}
console.log(calc(10,3,circleArea))

// 