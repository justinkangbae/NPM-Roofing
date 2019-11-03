const navChange = document.querySelector(".aboutus");
const navAll = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const navElement = document.querySelectorAll(".nav__links--element");
const hamburger = document.querySelector(".nav__hamburger");
const hamburgerTop = document.querySelector(".nav__hamburger--top");
const hamburgerMid = document.querySelector(".nav__hamburger--mid");
const hamburgerBot = document.querySelector(".nav__hamburger--bot");
const aboutus = document.querySelector(".aboutus");
const contact = document.querySelector(".contact");
let topOffset = offset(navChange);
let aboutusHeight, contactHeight;
init();

//constantly monitor the scroll position so that navbar style will change accordingly
window.addEventListener("scroll", () => {
    navBarChange();
});

//if window is resized, we need to calculate certain variables again
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
    getScrollHeights();
});

//when you click the about us nav button, it will scroll to the calculated height
navElement[4].addEventListener("click", () => {
    window.scrollTo(0, aboutusHeight);
})

//when you click the contact nav button, it will scroll to the calculated height
navElement[5].addEventListener("click", () => {
    window.scrollTo(0, contactHeight);
})

//changes visibility of nav bar when hamburger element is clicked
hamburger.addEventListener("click", () => {
    navBarVisibility();
})

//function that gets vertical offset of the element passed in 
function offset(el) {
    let rect = el.getBoundingClientRect();
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return 0.25 * (rect.top + scrollTop);
}

//function to initialize the page
function init() {
    if(window.innerWidth <= 704) {
        navElement.forEach(cur => {
            cur.classList.add("invisibleElement");
        });
    }

    navBarChange();
    getScrollHeights();
}

//function to calculate the length to scroll for about us and contact buttons
function getScrollHeights() {
    aboutusHeight = aboutus.getBoundingClientRect().top - navAll.offsetHeight;
    contactHeight = contact.getBoundingClientRect().top - navAll.offsetHeight;
}

//function to change visibility of the navbar and animate the hamburger menu
function navBarVisibility() {
    hamburgerTop.classList.toggle("navAnimationTop");
    hamburgerMid.classList.toggle("navAnimationMid");
    hamburgerBot.classList.toggle("navAnimationBot");

    navElement.forEach(cur => {
        cur.classList.toggle("invisibleElement");
    });

    navLinks.classList.toggle("visible");
}

//changes style of navbar based on scroll position
function navBarChange() {

    //after passing certain position, change style
    if (window.pageYOffset >= topOffset) {
        navAll.classList.add("whiteBackground");

        navElement.forEach(cur => {
            cur.classList.add("redText");
        });
    }
    //if position is above a determined height, default style
    else {
        navAll.classList.remove("whiteBackground");

        navElement.forEach(cur => {
            cur.classList.remove("redText");
        });
    }
}