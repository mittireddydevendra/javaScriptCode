const str = "JavaScript";
console.log(str.charAt(2));

const fruits = ["AP","ad","cd"];
console.log(fruits.indexOf("dd"))

function greet(){
    let name = "Dev";
    function displayName(){
        return 'Hi' +' '+name;
        }
    return displayName;    
}
const g1 =greet();
console.log(g1);
console.log(g1())

