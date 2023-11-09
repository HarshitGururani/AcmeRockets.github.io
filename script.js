"use strict";

const initApp = () => {
  const mobNavEl = document.getElementById("mobile-nav-button");
  const mobileMenuEl = document.getElementById("mobile-menu");

  const toogleMenu = () => {
    mobileMenuEl.classList.toggle("hidden");
    mobileMenuEl.classList.toggle("flex");
  };
  mobNavEl.addEventListener("click", toogleMenu);
  mobileMenuEl.addEventListener("click", toogleMenu);
};
document.addEventListener("DOMContentLoaded", initApp);
