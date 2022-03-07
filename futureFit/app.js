// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const liElements = document.querySelectorAll("#navbar > div > ul > li > a");
// show nav
navBtn.addEventListener("click", () => {
  if ( navbar.className.includes("showNav") )
    navbar.classList.remove("showNav");
  else
    navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
for (let i = 0;  i < liElements.length; i++)
  liElements[i].addEventListener("click", clickMe);

function clickMe() {
  navbar.classList.remove("showNav");
}
// setup date
const date = (document.getElementById(
"date"
).innerHTML = new Date().getFullYear());


