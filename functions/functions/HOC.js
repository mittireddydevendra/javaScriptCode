function calculate(a,b,operation){
    return operation(a,b);
}
const add =(x,y)=> x + y;
//console.log(calculate(10,12,add));

// hoc: A function that takes another function as an argument or returns a function.

function cal(a,b,operator){
    return operator(a,b)
}
const mul =(x,y)=> x * y;
console.log(cal(10,12,mul))

// fun3

function calc(x,y,oper){
    return oper(x,y)
}
const mull =(a,b)=> a * b;
console.log(calc(10,15,mull))