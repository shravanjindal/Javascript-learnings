// BASIC TOPICS:

// 1). var const let
// 2). hoisting - I can be uses variables and function before their declaration.
//  declaration is moved on the top of the code - hoisted

// undefined -> exists but dont know its value.
// not-defined -> not-exists.

// 3). types in js - primitive and reference
// primitives = number, string, null, undefined, bool
// references = [] {} ()
// copy krne pr real copy ho jaye - primitive
// jiska real copy na ho but main value ka reference pass hojaye - reference

// 4). conditionals - if , else , else-if

// 5). loops - for , while
for (var i=0; i<10; i++){}

// 6). functions
// function hello(){}

// arguments = real value that we pass in function
// parameters = variables which store arguments

// 7). Arrays - [] - hold group of individuals
// push pop  - add and delete from back
// unshift shift - add and delete from front
// splice - .splice(index, total number of elements to delete)

// 8). Objects - {} - hold details of an individuals
// key and value
// keys -> properties
// A property which stores a function = menthod

var boy = {
    gender: "Male",
    hello: "yo",
    speak: function (){}
}

delete boy.hello;

// ADVANCE TOPICS :

// 1). Difference between -> var | let,const 

// var old js mei hai (es5)
// var is **function scoped**
// var adds itself to the window object  <--|
//                                          |
// let, const new js mei hai (es6)          |
// let, const is **braces scoped**          |
// let, const doesnt                        |
//                                          |
// some features which are not in js but are provided by browser (or say) window. 

// Eg. alert, prompt, console

// type window to check its details
var a; // -> added in the window object
let b; // -> not added

// 2). Browser context api -> window, stack, heap

// 3). Stack - LIFO

// 4). Data is stored in heap memory.

// 5). Execution context :
// Each function have a container which have following things : variables, functions inside, lexical environment
// created whenever the function is called.

function abcd(){
    var a=12;
    function def(){
        var b=12;
    }
}

// 6). Lexical Env. : what things can the function access. (scope & scope chain)

// 7). How to real copy reference values?

var c = [1,2,3,4];
var d = [...c]; // spread operator

var girl = {...boy};

// 8). everything in js belongs to either of the two categories :
// falsy - 0 false undefined null NaN document.all
// truthy - everything else

// 9). foreach forin

// foreach -> sirf array k liye
c.forEach(function(val){
    console.log(val+2);
}) 
// doesnt change in real array. Does changes in a temporary copy.

// forin -> objects pr loop krne k liye
for(var key in boy){
    console.log(key);
}

// 10). Callback functions
// suppose you click a button, which gets some data from server. Now it will take time. When it is completed, callback functions tell js that it is done.

setTimeout(function(){
    console.log("Print after 2 sec");
},2000);

// 11). First Class functions
// We can use functions as value 

var f = function(){}

function abcd(a){
    a()
}

var e = function(){
    console.log("yo");
}
abcd(e);

// 12). arr = [1,2,3] => is an **object**

// typeof [] => Object
// typeof {} => Object

Array.isArray([]) // true
Array.isArray({}) // false