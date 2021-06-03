const tabOne = document.querySelector(".tab-1");
const tabTwo = document.querySelector(".tab-2");
const newProvide = document.getElementById("new-provide");
const popular = document.getElementById("popular");

newProvide.addEventListener("click", () => {
  setTimeout(() => {
    tabOne.classList.remove("active");
    tabTwo.classList.add("active");
  }, 200);
  tabOne.classList.remove("opac");
  tabTwo.classList.add("opac");
});
popular.addEventListener("click", () => {
  setTimeout(() => {
    tabTwo.classList.remove("active");
    tabOne.classList.add("active");
  }, 200);
  tabTwo.classList.remove("opac");
  tabOne.classList.add("opac");
});
