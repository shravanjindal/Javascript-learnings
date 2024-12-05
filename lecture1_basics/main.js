// Printing
console.log("hello");
Name = "Shravan";
console.log(Name);

//(Dynamically typef) variable - var, let, const
var age = 18; // this type of variables have global scope
var age = 19; // making a new variable 
let Name = "shravan"
Name = "Jindal" // changing the same variable 
const college = "IIT ROPAR" // constant variable
// let and const type of variables have block scope

// Datatypes 
// primitive datatypes(7) -> Number, string, bool, undefined, null(object), BigInt, Symbol
typeof age; // number
typeof Name; // string

// Non-primitive -> objects- Collection of values.

const student = {
    fullName : "Shravan Jindal",
    age : 19,
    cgpa: 7.0
};
typeof student // object
console.log(student.age) // -> 19
console.age(student["age"]) // -> 19

// we can change key of const object, but cannot replace the object with some other i.e changing the address of the object 
