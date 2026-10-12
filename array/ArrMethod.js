//Length property returns the length(size) of an array.

// Length
const fruits =["Banana","Orange","Apple","Mango"];
let  size =fruits.length;
console.log(size)

let sizes =fruits.length-2;
console.log(sizes)

//toString() return the elements of an array as a comma separated string.

//toString
const fruit = ["Banana","Orange","Apple","Mango"];
let myList =fruit.toString();
console.log(myList)  // Banana,Orange,Apple,Mango

//at() : index position in 0,1,2,3,4,....n
let fruit1 = fruit.at(2);
console.log(fruit1)

//join()
const fruit2 = ["Banana","Orange","Apple","Mango"];
let f2 =fruit.join("_")
console.log(f2)

// pop() : removes the last element 
const f3= fruit.pop();
console.log(f3)

//push(): adds a new element to an array (at the end)
const f4 = fruit.push("kiwi");
console.log(f4)



