// HTML uses Document Object model

// DOM
var doc = window.document;
console.dir(doc);
console.log(doc);

var body = document.body;
console.dir(body);

// DOM Manipulation

// how to access 
let byId = document.getElementById("myID");
console.dir(byId);
let byClass = document.getElementsByClassName("box");
console.dir(byClass);
let byTag = document.getElementsByTagName("p");
console.dir(byTag);

let element = document.querySelector("div");

console.log(element.tagName);
console.log(element.firstChild);
console.log(element.lastChild);
console.log(element.textContent);
console.log(element.innerText);
console.log(element.innerHTML);