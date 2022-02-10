window.onload = function () {
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];
  const disp = document.querySelectorAll(".disp");
  console.log(disp);
  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    disp[0].classList.toggle("disp");
    disp[1].classList.toggle("disp");
  });
};
