const openMenu = () => {
  const menu = document.querySelector(".header-menu");
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    document.querySelector("header .material-icons").innerHTML = "close";
  } else {
    document.querySelector(" header .material-icons").innerHTML = "menu";
  }
};
document
  .querySelector('.header-menu a[href="/"]')
  .addEventListener("click", function (event) {
    event.preventDefault(); // Empêche le comportement par défaut
    location.reload(); // Recharge la page
  });
document.getElementById("refresh-home").addEventListener("click", function (e) {
  e.preventDefault(); // Empêche le comportement par défaut du lien
  window.location.reload(); // Recharge la page
});
