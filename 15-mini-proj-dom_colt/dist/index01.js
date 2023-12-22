"use strict";
console.log("Hi, Jeff");
console.log("Hi, Jeff");
const btn = document.getElementById("btn");
//Non-Null assertion operator = !
// add it to line 4 above like this
// const btn = document.getElementById("btn")!
// input element DOM type assertion
const input = document.getElementById("todoinput");
const form = document.querySelector("#todoform");
//const form = document.querySelector("form")!    // if you do it this way, form element is known as HTMLFormElement
// less common way to assert an element
// (<HTMLInputElement>input).value
// btn?.addEventListener("click", function () {
//     console.log("button was clicked");
// })
// Type Assertion
let mysteryVar = "This is a string";
const numChars = mysteryVar.length;
function handleSubmit(e) {
    e.preventDefault();
    console.log(input.value);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
// input element DOM
// btn.addEventListener("click", function() {
//    console.log(input.value)
//    input.value = ""
// })
