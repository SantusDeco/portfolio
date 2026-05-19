const header = document.querySelector("header");
const menuIcon = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");

// sticky header
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 200);
});

// mobile menu toggle
menuIcon.addEventListener("click", () => {
    navList.classList.toggle("active");
});