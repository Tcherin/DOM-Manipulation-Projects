// Styling Elements

// const title = document.querySelector("#main-heading");
// title.style.color = "red";
// console.log(title);

// const listItems = document.querySelectorAll(".list-items");

// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "5rem";
// }

// console.log(listItems);

// Creating Elements

const ul = document.querySelector("ul");
const li = document.createElement("li");

// Adding Elements

ul.append(li);

// Modifying the Text

li.innerText = "x-men";

// Modifying attributes and classes

li.setAttribute("id", "main-heading");
li.removeAttribute("id");

const title = document.querySelector("#main-heading");
console.log(title.getAttribute());
