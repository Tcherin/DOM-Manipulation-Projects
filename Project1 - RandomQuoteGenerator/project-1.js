// Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    person: "Oprah Winfrey",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop",
    person: "Confucius",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter.",
    person: "Martin Luther King",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    person: "Lao Tzu",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
