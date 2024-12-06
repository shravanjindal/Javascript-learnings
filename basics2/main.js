let a =10;
let b= "10";

console.log("a = ", a, " & b = ", b)

// operators
// + , - , * , / , % , ** , ++ , -- 
// = , += , -= , *= , %= , **=

// comparison operators
// == -> equal
// === -> equal to & type
// != -> not equal
// !== -> not equal to & type

console.log(a==b) // true
console.log(a===b) // false

// <= , >= , > , <

// logical operators

// and = &&
// or = ||
// NOT = ! 

// Conditional Statements

if(a==10 && b==20){
    a++;
    console.log(a);
}
else if(b<=0){
    a++;
    a++;
}
else{
    b+=1; // add 1 to the string
    b++;  // adds 1 to the number
    console.log(b);
}

// Ternary Operator
// condition ? true output : flase output
let age = 19;
age > 18 ? console.log("u can vote") : console.log("bhgjaa yahan se")

// Switch Statements
// see MDN docs

// EXTRA
let response = prompt("hello");
console.log(response);
alert("yo man");