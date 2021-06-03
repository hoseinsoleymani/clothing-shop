const menu = document.querySelector(".main-menu-container");

document.addEventListener("scroll", () => {
  if (scrollY >= 40) {
    menu.classList.add("active");
  } else {
    menu.classList.remove("active");
  }
});

const menuIcon = document.querySelector(".fa-bars");
const menuUl = document.querySelector(".main-menu-container ul");
menuIcon.addEventListener("click", () => {
  menuUl.classList.toggle("active");
});