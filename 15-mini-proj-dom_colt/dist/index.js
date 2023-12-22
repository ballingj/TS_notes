"use strict";
const btn = document.getElementById("btn");
//Non-Null assertion operator = !
// add it to line 4 above like this
// const btn = document.getElementById("btn")!
// input element DOM type assertion
const input = document.getElementById("todoinput");
const form = document.querySelector("#todoform");
//const form = document.querySelector("form")!    // if you do it this way, form element is known as HTMLFormElement
const list = document.getElementById("todolist");
// less common way to assert an element
// (<HTMLInputElement>input).value
// btn?.addEventListener("click", function () {
//     console.log("button was clicked");
// })
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
}
function createTodo(todo) {
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLI.append(todo.text);
    newLI.append(checkbox);
    list.append(newLI);
}
form.addEventListener("submit", handleSubmit);
