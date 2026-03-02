"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const mobile = document.getElementById("mobile");

  burger.addEventListener("click", () => {
    mobile.classList.toggle("mobile-active");
  });
});
