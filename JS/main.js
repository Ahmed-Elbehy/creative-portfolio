// cgange navebar on scroll
let navbar = document.getElementById("navbar");
const logo = document.getElementById("image-logo");
const goUp = document.querySelector(".go-up");


window.addEventListener("scroll", () => navbarUI());
//  function handle navobar UI
navbarUI();
function navbarUI() {
  if (window.scrollY > 100 || window.innerWidth < 991) {
    navbar.classList.add("change-nav");
    logo.src = "images/logo-dark.png";
    if (window.scrollY > 200) {
      goUp.style.cssText = "display: block;";
    } else goUp.style.cssText = "display:none";
  } else {
    navbar.classList.remove("change-nav");
    logo.src = "images/logo-light.png";
  }
}

// handle btn scroll to next section
const btnScroller = document.getElementById("btn-scroller");
const sectionTwo = document.getElementById("section-two");
btnScroller.addEventListener("click", () => {
    window.scrollBy(0, sectionTwo.offsetTop);
});

// handle active nav link ;
const active = document.querySelectorAll(".nav-link");
console.log(active);
active.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("contact")) {
      active.forEach((el) => {
        el.classList.remove("active");
      });
    } else {
      active.forEach((el) => {
        el.classList.remove("active");
      });
      e.classList.add("active");
    }
  });
});

