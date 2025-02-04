// Hide hastag when click each section
window.addEventListener(
  "hashchange",
  () => window.history.pushState({}, "", "/portfolio/"),
  {}
);

const openNav = () => {
  let hamburger = document.querySelector(".hamburger");
  let navBar1 = document.querySelector(".nav-bar");
  let navBar = document.querySelector(".topnav");

  hamburger.onclick = function () {
    navBar1.classList.add("nav-active");
    navBar.classList.toggle("active");
  };
};

const closeMenu = () => {
  let navBar = document.querySelector(".topnav");
  let navBar1 = document.querySelector(".nav-bar");
  navBar.classList.remove("active");
  navBar1.classList.remove("nav-active");
};

let prevScrollpos = window.pageYOffset;
let navBar1 = document.querySelector(".nav-bar");
let navBar = document.querySelector(".topnav");

window.onscroll = function () {
  // Create scrolling down hide nav-bar, and scrolling up show nav-bar
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navBar1.style.top = "0";
  } else {
    navBar1.style.top = "-7rem";
  }
  prevScrollpos = currentScrollPos;

  // pageYOffset or scrollY
  if (
    window.pageYOffset > 0 ||
    (window.pageYOffset > 0 && navBar.classList === "active")
  ) {
    navBar1.classList.add("nav-active");
    // } else if (window.pageYOffset > 0 && navBar.classList === "active") {
    //   navBar1.classList.add("nav-active");
  } else {
    navBar1.classList.remove("nav-active");
    navBar.classList.remove("active");
  }
};
