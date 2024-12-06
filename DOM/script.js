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

// properties
console.log(element.tagName);
console.log(element.firstChild);
console.log(element.lastChild);
console.log(element.textContent);
console.log(element.innerText);
console.log(element.innerHTML);

// attributes
console.log(element.getAttribute("class"));

console.log(element.getAttribute("id")); // null
element.setAttribute("id", "firstBox");
console.log(element.getAttribute("id")); // firstBox

// style
console.dir(element.style); // CSSStyleDeclaration

// inserting new elements id="DOM_insertdelete"
let newButn = document.createElement("button");
newButn.innerText = "clickMe";
newButn.style.backgroundColor = "pink";
newButn.onclick = function () {deleteNode(newButn)};
let divdom = document.querySelector("#DOM_insertdelete");
divdom.append(newButn);

function deleteNode (el) {
    el.remove();
}