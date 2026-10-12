// method fabrictes an array

//toString(): is a method used to convert a value into a string.
const names = ["Yashraj", "Thomas","Kate"];
console.log("Array to Sting is", names.toString());

// number to tostring

let num = 100;
console.log(num.toString());
console.log(typeof num.toString());

//at(): method is used to access an element at a specific
//      index in an array or sting

let arr = [10, 20, 30, 40];

console.log(arr.at(-1));
console.log(arr.at(-2));

/*
    forEach(): is an array method used to loop through 
               each element of an array.
*/

let arr1 = [10, 20, 30];

arr1.forEach(function(item) {
  console.log(item);
});

/*
 Array join(): is an array method used to combine
  all array element into a single string.

 */
let arr2 = ["HTML", "CSS", "JS"];
console.log(arr2.join());

let arr3 = [1,2,3];

console.log(arr3.toString());
console.log(arr3.join("-"));

//pop(): on an empty array returns undefined.

const a = [1,,2,3,4,5];
const lastName = a.pop();
console.log(lastName);
console.log(a)

// push():

let aa = ["ab","as","ax"];
console.log(aa.push("Dev"));
console.log(aa)

//shift pops
const na =["aa","aha"]
const naw =na.shift()
console.log(na)

//unshift 
const as = ["the","kate"];
const mw = as.unshift("Ya")
console.log(as)

//concat
const cc = ['s','d','e']
const cd=cc.concat("df")
console.log(cd)
