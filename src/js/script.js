document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#nav").addEventListener("click", (e) => {
    e.preventDefault();
    let anchor = e.target;
    let id = anchor.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  });
});
