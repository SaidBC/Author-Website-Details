const hambugerButton = document.querySelector(".hambuger");
const header = document.querySelector("header");

const handleToggleActive = function () {
  header.classList.toggle("active");
};

const handleRemoveActiveAtDesktop = function () {
  if (window.innerWidth >= 768) header.classList.remove("active");
};

window.addEventListener("resize", handleRemoveActiveAtDesktop);
hambugerButton.addEventListener("click", handleToggleActive);
