const search = document.querySelectorAll(".open-search");
const searchContainer = document.querySelector(".search-container");
const times = document.querySelectorAll(".zabdar");

search.forEach((se) => {
  se.addEventListener("click", () => {
    searchContainer.classList.add("active");
  });
});

times.forEach((ti) => {
  ti.addEventListener("click", () => {
    searchContainer.classList.remove("active");
  });
});
