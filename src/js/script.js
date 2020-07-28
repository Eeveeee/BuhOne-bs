const nav = document.getElementById("nav");
const burgerMenu = document.querySelector(".burger-menu");

function widthCheck() {
  if (document.documentElement.clientWidth >= 480) return 0;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#nav").addEventListener("click", (e) => {
    if (e.target.getAttribute("class") === "navbar__block") {
      e.preventDefault();
      let anchor = e.target;
      let id = anchor.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
      if (widthCheck()) {
        return;
      }
      nav.style.left = "-100vw";
      burgerMenu.classList.toggle("burger-active");
    }
  });
});

burgerMenuClick();
function burgerMenuClick() {
  if (widthCheck()) {
    return;
  }
  nav.style.left = "-100vw";
  burgerMenu.addEventListener("click", (e) => {
    e.preventDefault();
    burgerMenu.classList.toggle("burger-active");
    nav.style.left = nav.style.left === "-100vw" ? 0 : "-100vw";
  });
}
