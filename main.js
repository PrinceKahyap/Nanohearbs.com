const year = document.querySelector(".current-year")
year.innerHTML = new Date().getFullYear();

// hamburger 
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// sticky navbar 
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 400)
});

const load = document.getElementById("loading");
function preloader() {
    load.style.display = "none";
};