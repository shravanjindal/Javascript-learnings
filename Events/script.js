// button
let btn = document.querySelector("button");
btn.ondblclick = function () {console.log("button was double clicked!")};
btn.onmouseover = function () {
    btn.style.backgroundColor = "pink";
}
btn.onmouseout = () => {
    btn.style.backgroundColor = "";
}

// e = event object
btn.onclick = (e) => {console.dir(e)};

// Event Listeners
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click",() => {
    console.log("Button 2 was clicked");
})