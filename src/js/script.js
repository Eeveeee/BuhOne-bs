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
    }
  });
});
