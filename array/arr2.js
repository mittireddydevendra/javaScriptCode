//Slice does not modify orginal array, return selected elements
let a =[1,2,3,4,5,6,7]
let a1 =a.slice(0,4) //remove values
console.log(a1)

//Splice add,modify,remove values,modifies orginal array,Destructive

let b = [10,20,30,40,50]
b.splice(1,2) //remove 20,30 
console.log(b)//o/p 10,40,50

const arr = [10, 20, 30];
arr.splice(1, 0, 15); //adding elememt
console.log(arr); //o/p 10,15,20,30

const arr1 = [10, 20, 30, 40];
arr1.splice(1, 2, 25, 35); //replace
console.log(arr1);
