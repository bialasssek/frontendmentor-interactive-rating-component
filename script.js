"use strict";

const inputNumbers = document.querySelectorAll(".rating__number");
const ratingNumberContainer = document.querySelector(
  ".rating__number-container"
);
const btnSubmit = document.querySelector(".rating__submit");
const ratingContainer = document.querySelector(".rating__container");
const thankyouContainer = document.querySelector(".thankyou__container");
const labelResultNumber = document.querySelector(".thankyou__result-number");

inputNumbers.forEach((number, i) => (number.dataset.rating = i + 1));

let numberActive;
ratingNumberContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("rating__number")) {
    inputNumbers.forEach((number) =>
      number.classList.remove("rating__number-active")
    );
    e.target.classList.add("rating__number-active");
  }
  numberActive = e.target.dataset.rating;
});

btnSubmit.addEventListener("click", function () {
  if (numberActive) {
    ratingContainer.classList.add("hidden");
    thankyouContainer.classList.remove("hidden");
    labelResultNumber.textContent = numberActive;
  }
});
