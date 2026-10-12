//HOC: is a function that takes another function as an 
      // argument or returns a function as a result.


//map() -HOC
const numbe = [1, 2, 3, 4];
const doubled = numbe.map(num => num * 2);
console.log(doubled);


function greet(name){
    return "Hello" + name;
}

function processUser(fn,name){
    return fn(name);
}
console.log(processUser(greet," Devedra"));

//Returning Another function
function mul(nam){
    return function (x){
        return x * num;
    }
}
const duble =mul(3);
console.log(duble(4))

