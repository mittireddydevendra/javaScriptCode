//callback function

function addNumber(a,b){
    return a + b
}

function sub(a,b){
    return a-b
}

function callback(a,b,cal){
    return cal(a,b)
}
console.log(callback(4,5,sub))