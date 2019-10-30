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

// window.addEventListener("scroll", () => {
//     navBarChange();

//     if(hamburgerTop.classList.contains("navAnimationTop")) {
//         navBarVisibility();
//     }
// });

window.addEventListener("resize", () => {
    topOffset = offset(navChange);
    navBarChange();
});

hamburger.addEventListener("click", () => {
    navBarVisibility();
})

//function that gets vertical offset of the element passed in 
function offset(el) {
    let rect = el.getBoundingClientRect();
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return 0.25*(rect.top + scrollTop);
}

function navBarVisibility() {
    hamburgerTop.classList.toggle("navAnimationTop");
    hamburgerMid.classList.toggle("navAnimationMid");
    hamburgerBot.classList.toggle("navAnimationBot");

    navElement.forEach(cur => {
        if(cur.style.display == "block") {
            cur.style.display = "none";
        } else {
            cur.style.display = "block";
        }
    });

    navLinks.classList.toggle("visible");
}

function navBarChange() {

    //for media query $bp-small, show navbar with white background at all times and show hamburger
    if(window.innerWidth <= 700) {
           


    } else {
        if(window.pageYOffset >= topOffset) {
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
}