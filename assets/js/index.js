const heading = document.getElementById('head');
const mobileBtn = document.querySelector('.mobile-button');


let menuOpen = false;

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