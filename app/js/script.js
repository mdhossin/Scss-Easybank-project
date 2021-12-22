const btnHumberger = document.querySelector("#btnHumburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const fadeElemnts = document.querySelectorAll(".has-fade");

const overlay = document.querySelector(".overlay");
btnHumberger.addEventListener("click", () => {
  console.log("Button clicked");
  if (header.classList.contains("open")) {
    body.classList.remove("noscroll");
    //close humberger menu
    header.classList.remove("open");
    fadeElemnts.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    // open humberger menu
    header.classList.add("open");
    fadeElemnts.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
