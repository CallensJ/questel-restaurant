const toggle = document.querySelector("#menuToggle");
const nav_menu = document.querySelector("#menu");


toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  nav_menu.classList.toggle("active");
});

document.querySelectorAll(".menu__link").forEach((link) => {
  link.addEventListener("click", () => {
    console.log("clic");
    toggle.classList.remove("active");
    nav_menu.classList.remove("active");
    
  });
});
