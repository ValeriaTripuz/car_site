const burgerIcon = document.querySelector(".header__burger-icon button");
const headerNavMenu = document.querySelector(".menue-burger");

console.log(burgerIcon.value);

burgerIcon.addEventListener("click", () => {
  console.log("click");
  headerNavMenu.styles.display = "block";
  burgerIcon.styles.display = "none";
});
