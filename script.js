const menuBtn = document.querySelector(".menu-btn");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    overlay.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
});
});

document.querySelectorAll(".side-menu a").forEach(link => {
    link.addEventListener("click", () => {
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
    });
});

// AUTO BANNER SLIDER

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

}, 5000);

window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

setTimeout(function(){

document.getElementById("loader").style.display="none";

},800);

},2500);

});