// DEFINING THE VARIABLES 
const heading = document.getElementById('head');
const mobileBtn = document.querySelector('.mobile-button');
let menuOpen = false;

// THIS FUNCTION IS WHAT SHALL BE USED TO DISPLAY THE CLASS THAT SHOWS A MOBILE NAVBAR
function changeMenu() {
    if(!menuOpen) {
        heading.classList.add ('is-open');
        mobileBtn.setAttribute("src", "images/icon-hamburger.svg");
        menuOpen = true;
    } else {
        heading.classList.remove ('is-open');
        mobileBtn.setAttribute("src", "images/icon-hamburger.svg");
        menuOpen = false;
    }
}