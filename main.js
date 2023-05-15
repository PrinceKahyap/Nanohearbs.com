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

//  owlcarousal 
$(".carousel").owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 3,
            nav: false
        },
    }
});