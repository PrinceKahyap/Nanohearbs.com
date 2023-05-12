const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});


const year = document.querySelector(".current-year")
year.innerHTML = new Date().getFullYear();

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 100);
});