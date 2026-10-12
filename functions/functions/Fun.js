// function flatten(arr){
//     return arr.reduce((flat,item)=>
//         flat.concat(Array.isArray(item) ? flatten(item) : item), []);
// }

const array = [1, 2, 3, 4, 5];
const initialValue = 0;
const sumWithInitial = array.reduce(
  (acc, current) => acc + current,
  initialValue
);

console.log(sumWithInitial);
