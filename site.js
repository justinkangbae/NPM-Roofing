const navChange = document.querySelector(".aboutus");
const navAll = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const navElement = document.querySelectorAll(".nav__links--element");
const hamburger = document.querySelector(".nav__hamburger");
const hamburgerTop = document.querySelector(".nav__hamburger--top");
const hamburgerMid = document.querySelector(".nav__hamburger--mid");
const hamburgerBot = document.querySelector(".nav__hamburger--bot");
let topOffset = offset(navChange);
navBarChange();

window.addEventListener("scroll", () => {
    navBarChange();
});

window.addEventListener("resize", () => {
    topOffset = offset(navChange);

    //if window is resized, check the size of the window and if its less than $bp-medium
    // then change visibility of element
    if(window.innerWidth <= 704) {
        navElement.forEach(cur => {
            cur.classList.add("invisibleElement");
        });
        
        hamburgerMid.classList.remove("navAnimationMid");
        hamburgerBot.classList.remove("navAnimationBot");
        hamburgerTop.classList.remove("navAnimationTop");

        navLinks.classList.remove("visible");
    } else {
        navElement.forEach(cur => {
            cur.classList.remove("invisibleElement");
        });
    }

    navBarChange();
});

hamburger.addEventListener("click", () => {
    navBarVisibility();
})

//function that gets vertical offset of the element passed in 
function offset(el) {
    let rect = el.getBoundingClientRect();
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return 0.25 * (rect.top + scrollTop);
}

function navBarVisibility() {
    hamburgerTop.classList.toggle("navAnimationTop");
    hamburgerMid.classList.toggle("navAnimationMid");
    hamburgerBot.classList.toggle("navAnimationBot");

    navElement.forEach(cur => {
        cur.classList.toggle("invisibleElement");
    });

    navLinks.classList.toggle("visible");
}

function navBarChange() {

    if (window.pageYOffset >= topOffset) {
        navAll.classList.add("whiteBackground");

        navElement.forEach(cur => {
            cur.classList.add("redText");
        });
    }
    else {
        navAll.classList.remove("whiteBackground");

        navElement.forEach(cur => {
            cur.classList.remove("redText");
        });
    }
}