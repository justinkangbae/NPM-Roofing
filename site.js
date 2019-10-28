const navChange = document.querySelector(".aboutus");
const navAll = document.querySelector(".nav");
const navElement = document.querySelectorAll(".nav__links--element");
let topOffset = offset(navChange);
navBarChange();

window.addEventListener("scroll", () => {
    navBarChange();
});

window.addEventListener("resize", () => {
    topOffset = offset(navChange);
    navBarChange();
});

//function that gets vertical offset of the element passed in 
function offset(el) {
    let rect = el.getBoundingClientRect();
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return 0.25*(rect.top + scrollTop);
}

function navBarChange() {

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