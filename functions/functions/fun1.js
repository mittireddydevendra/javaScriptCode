//Reverse a string without using reverse().

const str ="devendra";
let reversed = "";
for(let i =str.length-1; i>=0;i--){
    reversed += str[i];
}
console.log(reversed)


// using built-in methods

const str1 ="hello";
const reverse =str1.split("").reverse().join("");
console.log(reverse)

// palindrom: is a string that reads the same forward and backward.

function isPalindrome(str){
    const reversed =str.split("").reverse().join("");
    return str ===reversed;
}
console.log(isPalindrome("madam"));  