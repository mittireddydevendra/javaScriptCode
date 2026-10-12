//push add last index
let a = ["BW","AW","AQ"];
a.push("QW")
console.log(a)

//pop: last index remove
let b =[1,2,3,4,5];
b.pop()
console.log(b)

//concat add two or more arrays.

const c =['a','b'];
const c1 =['c','d'];
console.log(c.concat(c1));

/*
  copywithin(): copy a sequence of array elements to another
                position with the same array 
*/
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];  
fruits.copyWithin(0, 3);  
console.log(fruits);  

//every():to check whether all elements in an array 
// satisfy a condition.
const num = [11,12,13,14,15];
const numEven =num.every(num=>num%2===0);
console.log(numEven)

// flat(): to creates a new array with sub-array 
// elements up to the specified depth.

const nestedArray = [1, [2, 3], [4, [5, 6]]];  
 const flatArray = nestedArray.flat();  
 console.log(flatArray);  

//toString(): is a function used in many programming languages
//  to convert a value into its string(text) representation.

let x =10;
let s = x.toString();
console.log(s)
console.log(typeof s)

//slice
