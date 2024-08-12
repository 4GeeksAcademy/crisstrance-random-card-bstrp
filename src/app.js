/* eslint-disable */
import "bootstrap";
import "./style.css";

function newCard() {
  let suite = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexSuite = Math.floor(Math.random() * suite.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);

  document.querySelector("#top").innerHTML = suite[indexSuite];
  document.querySelector("#number").innerHTML = numbers[indexNumbers];
  document.querySelector("#end").innerHTML = suite[indexSuite];

  let suiteColor =
    suite[indexSuite] == "♦" || suite[indexSuite] == "♥"
      ? "text-danger"
      : "text-dark";
  document.querySelector("#top").className = suiteColor;
  document.querySelector("#end").className = suiteColor;
}

window.onload = function() {
  newCard();
  setInterval(newCard, 3000);
};
document.querySelector("#randomize").addEventListener("click", newCard);

// ♦ ♥ ♠ ♣
