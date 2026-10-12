const person = {
    fname : "John",
    lname : "Doe",
    age   : 50,
    eyeColor: "blue"
};
console.log(person)

const man = Object.create(person);
man.fname = "Peter";
console.log(man)

//Object.assign(): method copies properties from
//  one or more source objects to a target object.

const x = person;
x.age =10;
console.log(x)

//Setter
const person1 = {
    fname : "john",
    lname : "Doe",
    set lang(lang){
        this.language = lang;
    }
};
person1.lang ="en";
console.log(person1.language);